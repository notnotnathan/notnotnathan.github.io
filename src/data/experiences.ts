// ─── Shared experience data ───────────────────────────────────────────────────
// Edit here to update the experience dialogs on the home page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2], height: 400, gap: 30 }  — both optional

import toyotaImg from "@/assets/toyota.jpg";
import gmImg from "@/assets/gm.jpg";
import { Block } from "@/data/projects";

export interface ExperienceData {
  title: string;
  date: string;
  summary: string;
  bullets: string[];
  blocks?: Block[];
}

export const experiences: ExperienceData[] = [
  {
    title: "toyota motor manufacturing canada",
    date: "jan 2026 – apr 2026",
    summary: "engineering analyst co-op at toyota's cambridge, ontario plant.",
    bullets: [
      "led a tbp-driven continuous improvement project targeting shellbody sealer vision system downtime, reducing coherix-related equipment fault time by approximately 70%. applied structured problem-solving to identify root causes and presented results to senior management.",
      "directed integration of a torque gun system to accommodate two vehicle models with different requirements. coordinated between production, maintenance, contractors, and vendors while overseeing weekend trial runs and commissioning involving plc logic and system validation.",
      "audited and optimized weld scheduling parameters to reduce weld spatter, eliminate weld separation defects, and decrease welding tip replacement frequency — contributing to estimated annual cost and material savings.",
      "conducted time studies for overcycle processes and implemented improvements that reduced unnecessary robot movement and increased process catch-up capability.",
    ],
    blocks: [
      { type: "images", images: [toyotaImg] },
    ],
  },
  {
    title: "general motors",
    date: "may 2025 – aug 2025",
    summary: "industrial engineering co-op at gm's oshawa assembly plant on the chevrolet silverado line.",
    bullets: [
      "led a continuous improvement initiative eliminating production inefficiencies through root cause analysis and cross-functional collaboration — reduced job cycle times by up to 11.8% and eliminated significant line downtime, increasing silverado throughput.",
      "conducted time studies and redesigned standardized work across 30+ stations using lean manufacturing principles, reducing wasted movement and ergonomic risks.",
      "updated 10,000+ sqft of factory layout in autocad, delivering precise standardized floor plans that improved cross-functional coordination.",
      "attended current and future product design review meetings, connecting design intent with real-world assembly outcomes through practical dfma understanding.",
      "developed an excel-based readiness document mapping job elements to option codes, tooling, part numbers, and rack sizes — improving efficiency of plant floor changeovers.",
    ],
    blocks: [
      { type: "images", images: [gmImg] },
    ],
  },
];
