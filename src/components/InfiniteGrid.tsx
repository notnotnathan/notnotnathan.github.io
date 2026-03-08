import { useState, useEffect, useMemo, useCallback, memo, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useImagePreloader } from '@/hooks/useImagePreloader'

const SPRING_CONFIG = { damping: 40, stiffness: 200, mass: 0.5 }
const MOBILE_SPRING = { damping: 60, stiffness: 600, mass: 0.3 } // responsive but not instant
const SCALE_SPRING = { damping: 25, stiffness: 300, mass: 0.2 }
const TIER1_COUNT = 20

function getGridMetrics(containerSize: { width: number; height: number }) {
  const shortSide = Math.min(containerSize.width, containerSize.height)
  const cellSize = Math.round(Math.min(340, Math.max(145, shortSide * 0.27)))
  const gap = Math.max(10, Math.round(cellSize * 0.09))
  const totalCell = cellSize + gap
  const hoverRadius = cellSize * 1.25
  return { cellSize, gap, totalCell, hoverRadius }
}

const mod = (n: number, m: number) => ((n % m) + m) % m

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

interface GridItemData {
  id: string
  relX: number
  relY: number
  imgUrl: string
}

interface GridItemProps {
  item: GridItemData
  x: ReturnType<typeof useSpring>
  y: ReturnType<typeof useSpring>
  mouseX: ReturnType<typeof useMotionValue>
  mouseY: ReturnType<typeof useMotionValue>
  gridWidth: number
  gridHeight: number
  cellSize: number
  totalCell: number
  hoverRadius: number
  reduceMotion: boolean
}

const GridItem = memo(({ item, x, y, mouseX, mouseY, gridWidth, gridHeight, cellSize, totalCell, hoverRadius, reduceMotion }: GridItemProps) => {
  const [loaded, setLoaded] = useState(false)
  const tx = useTransform(x, (v) => mod((item.relX * totalCell) + v + totalCell, gridWidth) - totalCell)
  const ty = useTransform(y, (v) => mod((item.relY * totalCell) + v + totalCell, gridHeight) - totalCell)

  const hoverRadiusSq = hoverRadius * hoverRadius
  const rawScale = useTransform([tx, ty, mouseX, mouseY], ([latestX, latestY, mx, my]: number[]) => {
    if (reduceMotion) return 1
    const centerX = latestX + cellSize / 2
    const centerY = latestY + cellSize / 2
    const distanceSq = (mx - centerX) ** 2 + (my - centerY) ** 2
    if (distanceSq > hoverRadiusSq) return 1
    const distance = Math.sqrt(distanceSq)
    return 1 + (1 - distance / hoverRadius) * 0.12
  })

  const scale = useSpring(rawScale, SCALE_SPRING)

  return (
    <motion.div
      style={{
        position: 'absolute',
        width: cellSize,
        height: cellSize,
        x: tx,
        y: ty,
        scale,
        willChange: 'transform',
      }}
      className="pointer-events-none"
    >
      <div className="w-full h-full rounded-xl overflow-hidden shadow-lg relative bg-muted">
        <img
          src={item.imgUrl}
          alt=""
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          decoding="async"
          draggable={false}
          onLoad={() => setLoaded(true)}
        />
      </div>
    </motion.div>
  )
}, (prev, next) => prev.item.id === next.item.id)

GridItem.displayName = 'GridItem'

interface InfiniteGridProps {
  photos: string[]
  width: number
  height: number
}

const InfiniteGrid = ({ photos, width, height }: InfiniteGridProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [shouldReduceMotion, setShouldReduceMotion] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => setShouldReduceMotion(e.matches)
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, isTouchDevice ? MOBILE_SPRING : SPRING_CONFIG)
  const y = useSpring(rawY, isTouchDevice ? MOBILE_SPRING : SPRING_CONFIG)

  // Track mouse relative to the grid container — fixes the hover offset
  const mouseX = useMotionValue(-9999)
  const mouseY = useMotionValue(-9999)

  const shuffledImages = useMemo(() => shuffleArray(photos), [photos])
  useImagePreloader(shuffledImages, TIER1_COUNT)

  const metrics = useMemo(() => getGridMetrics({ width, height }), [width, height])

  const gridConfig = useMemo(() => {
    const { totalCell } = metrics
    const cols = Math.ceil(width / totalCell) + 4
    const rows = Math.ceil(height / totalCell) + 4
    const items: GridItemData[] = []

    const grid: (string | null)[][] = Array.from({ length: rows }, () => new Array(cols).fill(null))

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const forbidden = new Set<string>()
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            if (dr === 0 && dc === 0) continue
            const nr = (r + dr + rows) % rows
            const nc = (c + dc + cols) % cols
            if (grid[nr][nc] !== null) forbidden.add(grid[nr][nc]!)
          }
        }
        const candidates = shuffledImages.filter(img => !forbidden.has(img))
        const pool = candidates.length > 0 ? candidates : shuffledImages
        grid[r][c] = pool[Math.floor(Math.random() * pool.length)]
      }
    }

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push({ id: `${r}-${c}`, relX: c - 1, relY: r - 1, imgUrl: grid[r][c]! })
      }
    }
    return { items, cols, rows, ...metrics }
  }, [width, height, shuffledImages])

  const onPanStart = useCallback(() => setIsDragging(true), [])
  const onPan = useCallback((_: unknown, info: { delta: { x: number; y: number } }) => {
    rawX.set(rawX.get() + info.delta.x)
    rawY.set(rawY.get() + info.delta.y)
  }, [rawX, rawY])
  const onPanEnd = useCallback(() => setIsDragging(false), [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }, [mouseX, mouseY])

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-9999)
    mouseY.set(-9999)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ width, height, overflow: 'hidden', position: 'relative' }}
      className="select-none rounded-lg"
    >
      <motion.div
        onPanStart={onPanStart}
        onPan={onPan}
        onPanEnd={onPanEnd}
        className="absolute inset-0 z-0"
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          WebkitUserSelect: 'none',
          touchAction: 'none',
        }}
      >
        {gridConfig.items.map((item) => (
          <GridItem
            key={item.id}
            item={item}
            x={x}
            y={y}
            mouseX={mouseX}
            mouseY={mouseY}
            gridWidth={gridConfig.cols * gridConfig.totalCell}
            gridHeight={gridConfig.rows * gridConfig.totalCell}
            cellSize={gridConfig.cellSize}
            totalCell={gridConfig.totalCell}
            hoverRadius={gridConfig.hoverRadius}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteGrid
