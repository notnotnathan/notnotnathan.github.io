// ─── Shared project data ──────────────────────────────────────────────────────
// Edit here and it updates BOTH the home page and the /portfolio page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2] }                 — width mode (default)
//   { type: "images", images: [img1, img2], mode: "height" } — fixed height, natural width
//   { type: "images", images: [img1, img2], mode: "width" }  — same height, fits row width

import cycloidalImg from "@/assets/cycloidal-actuator.jpg";
import pancakeImg from "@/assets/pancake-printer.jpg";
import ft36 from "@/assets/freetime/36.jpg";
import ft3 from "@/assets/freetime/3.jpg";
import ft4 from "@/assets/freetime/4.jpg";

export type Block =
  | { type: "text"; content: string }
  | { type: "images"; images: string[]; mode?: "height" | "width" };

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
    id: "cycloidal-actuator",
    title: "internal cycloidal actuator",
    date: "2025",
    featured: true,
    coverImage: cycloidalImg,
    summary: "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
    bullets: [
      "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
      "performed iterative design on gear and housing tolerances to reduce backlash while preserving backdrivability and achieving smooth, reliable motion.",
    ],
    blocks: [
      { type: "text", content: "lorem ipsum block one. this is the first paragraph of detail about the actuator design process, tolerances, and goals." },
      { type: "images", images: [ft36, cycloidalImg, pancakeImg], mode: "height" },
      { type: "text", content: "lorem ipsum block two. this covers the testing phase, results, and what was learned from the iterative design process." },
      { type: "images", images: [ft3, ft4], mode: "height" },
    ],
  },
  {
    id: "pancake-printer",
    title: "pancake printer",
    date: "2025",
    featured: true,
    coverImage: pancakeImg,
    summary: "built a functional 2d gantry pancake printer integrating tetrix structural components, lego ev3 motors, and custom 3d-printed adapters.",
    bullets: [
      "built a functional 2d gantry pancake printer integrating tetrix structural components, lego ev3 motors, and custom 3d-printed adapters.",
      "designed a cad assembly in solidworks, ensuring mechanical fitments and reducing prototyping time.",
      "programmed motion routines in c++, achieving precise, synchronized xy motion for accurate batter extrusion.",
    ],
    blocks: [],
  },
];
