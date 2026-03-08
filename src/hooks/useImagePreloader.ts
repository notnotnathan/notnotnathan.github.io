import { useEffect } from 'react'

export function useImagePreloader(urls: string[], count: number) {
  useEffect(() => {
    const toLoad = urls.slice(0, count)
    toLoad.forEach((url) => {
      const img = new Image()
      img.src = url
    })
  }, [urls, count])
}
