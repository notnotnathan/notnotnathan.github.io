// ─── Shared project data ──────────────────────────────────────────────────────
// Edit here and it updates BOTH the home page and the /portfolio page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2], height: 400, gap: 30 }  — both optional

import quadrupedImg0 from "@/assets/quadruped0.png";
import quadrupedImg1 from "@/assets/quadruped1.png";
import quadrupedImg2 from "@/assets/quadruped2.png";
import quadrupedImg3 from "@/assets/quadruped3.png";
import quadrupedImg4 from "@/assets/quadruped4.png";
import realCycloidalImg1 from "@/assets/cycloidal-actuator1.jpg";
import realCycloidalImg2 from "@/assets/cycloidal-actuator2.jpg";
import realCycloidalImg3 from "@/assets/cycloidal-actuator3.jpg";
import cycloidalImg0 from "@/assets/gearbox0.png";
import cycloidalImg1 from "@/assets/gearbox1.png";
import cycloidalImg2 from "@/assets/gearbox2.png";
import cycloidalImg3 from "@/assets/gearbox3.png";
import cycloidalImg4 from "@/assets/gearbox4.png";
import cycloidalImg5 from "@/assets/gearbox5.png";
import pancakeImg from "@/assets/pancake-printer.png";
import ft36 from "@/assets/freetime/36.jpg";
import ft3 from "@/assets/freetime/3.jpg";
import ft4 from "@/assets/freetime/4.jpg";

export type Block =
  | { type: "text"; content: string }
  | { type: "images"; images: string[]; height?: number; gap?: number };

export interface ProjectData {
  id: string;
  title: string;
  date: string;
  featured: boolean;
  coverImage: string;
  summary: string;
  bullets: string[];
  blocks?: Block[];
}

export const projects: ProjectData[] = [
  {
    id: "servo-quadruped",
    title: "hobby servo quadruped",
    date: "2026",
    featured: true,
    coverImage: quadrupedImg0,
    summary: "say hello to my little friend",
    bullets: [
      "designed 12 dof quadruped using hobby rc servos.",
      "optimized design and tolerances for 3d printing and assembly.",
      "currently working on custom 12 channel servo driver",
    ],
    blocks: [
      { type: "text", content: "work in progress." },
      { type: "images", images: [quadrupedImg1, quadrupedImg2], height: 300, gap: 20 },
      { type: "images", images: [quadrupedImg3, quadrupedImg4], height: 300, gap: 20 },
    ],
  },
  {
    id: "cycloidal-actuator",
    title: "internal cycloidal actuator",
    date: "2025",
    featured: true,
    coverImage: cycloidalImg0,
    summary: "this spins",
    bullets: [
      "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
      "performed iterative design on gear and housing tolerances to reduce backlash while preserving backdrivability and achieving smooth, reliable motion.",
      "currently working on having the components machined",
    ],
    blocks: [
      { type: "images", images: [cycloidalImg1, cycloidalImg2], height: 300, gap: 20 },
      { type: "images", images: [cycloidalImg3, cycloidalImg4], height: 300, gap: 20 },
      { type: "images", images: [cycloidalImg5, realCycloidalImg1], height: 300, gap: 20 },
      { type: "images", images: [realCycloidalImg2, realCycloidalImg3], height: 300, gap: 20 },
      
    ],
  },
  {
    id: "pancake-printer",
    title: "pancake printer",
    date: "2025",
    featured: true,
    coverImage: pancakeImg,
    summary: "pancake printer for class project",
    bullets: [
      "built a functional 2d gantry pancake printer integrating tetrix structural components, lego ev3 motors, and custom 3d-printed adapters.",
      "designed a cad assembly in solidworks, ensuring mechanical fitments and reducing prototyping time.",
      "programmed motion routines in c++, achieving precise, synchronized xy motion for accurate batter extrusion.",
    ],
    blocks: [],
  },
];
