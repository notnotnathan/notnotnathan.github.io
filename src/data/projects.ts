// ─── Shared project data ──────────────────────────────────────────────────────
// Edit here and it updates BOTH the home page and the /portfolio page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2, img3] }  ← all same height, side by side

import cycloidalImg from "@/assets/cycloidal-actuator.jpg";
import pancakeImg from "@/assets/pancake-printer.jpg";

export type Block =
  | { type: "text"; content: string }
  | { type: "images"; images: string[] };

export interface ProjectData {
  id: string;
  title: string;
  date: string;
  featured: boolean;   // true = shows on home page, false = portfolio only
  coverImage: string;  // square card cover + dialog cover (top-right)
  summary: string;     // shown only when dialog is expanded
  bullets: string[];
  blocks?: Block[];    // optional: rich content sections below the header
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
    blocks: [],
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
