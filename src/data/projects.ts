// ─── Shared project data ──────────────────────────────────────────────────────
// Edit here and it updates BOTH the home page and the /portfolio page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2], height: 400, gap: 30 }  — both optional

import tbpCover from "@/assets/tbp-cover.png";
import tbpFull from "@/assets/TBP.jpg";
import statorWindingConfig from "@/assets/stator_winding.jpg";
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
    id: "auto-quadruped",
    title: "autonomous quadruped",
    date: "2026",
    featured: true,
    coverImage: quadrupedImg0,
    summary: "say hello to my little friend",
    bullets: [
      "designed 12 dof quadruped using hobby rc servos.",
      "optimized design and tolerances for 3d printing and assembly.",
      "hierarchical control architecture using custom 12-channel stm32 driver for low-level servo control, raspberry pi for high-level perception, mapping, and motion planning, with lidar for environmental sensing",
      "currently working on custom servo driver",
    ],
    blocks: [
      { type: "images", images: [quadrupedImg1, quadrupedImg2], height: 300, gap: 20 },
      { type: "images", images: [quadrupedImg3, quadrupedImg4], height: 300, gap: 20 },
    ],
  },
  {
    id: "tmmc-tbp",
    title: "productivity improvement project",
    date: "2026",
    featured: true,
    coverImage: tbpCover,
    summary: "86% reduction in sealer vision equipment fault time on shellbody sealer process",
    bullets: [
      "86% reduction in Coherix fault time on RAV4 left front door hemming adhesive sealer",
      "Root caused via Excel fault log analysis → floor observation → cross-functional RCA",
      "Led maintenance through robot teach, personally established cleaning and Coherix reteach process, then handed off to production/maintenance",
      "Built troubleshooting flowchart, trained maintenance on reteach procedure, initiated QCNS and startup procedure updates",
      "Presented full TBP to senior management",
    ],
    blocks: [
      { type: "images", images: [tbpFull]},
      { type: "text", content: "problem" },
      { type: "text", content: "Shellbody is a critical upstream process — it builds door, hatch, and hood panels for the Final Line. When Shellbody stops, Install and Final run short on parts, directly impacting North Weld's overall production output. Coherix vision system faults on the 311D front door outer hemming sealer were contributing 50.7 minutes of equipment fault time per shift on the RAV4 left front door hemming adhesive sealer process, making it the highest priority target within a broader 576 minute total fault time problem. The goal was to drive Coherix-related fault time to zero."},
      { type: "text", content: "approach"},
      { type: "text", content: "Started by sifting through recorded fault logs across all shellbody equipment — a lengthy data cleaning process in Excel to filter false faults, identify top contributors, and narrow scope to the highest impact equipment. Once the 311D Outer was prioritized, moved to the floor to observe the live process and pull raw fault recordings on that specific station, combining direct observation with fault data to build a root cause hypothesis."},
      { type: "text", content: "Root causes fell into four categories: sealer contamination physically obstructing the sensor and corrupting scan data with noise, inconsistent datuming causing the robot to dispense at incorrect positions relative to the part, an incorrect robot teach producing a poor bead profile, and Coherix teach parameters not trained to correctly pass or fail the actual bead being produced. The contamination and robot teach issues were foundational — without a clean sensor and a good repeatable bead to reference, any Coherix reteach would just be training the system to accept a bad result."},
      { type: "text", content: "Countermeasures were developed and evaluated against quality, safety, productivity, and cost. Magnetic fixturing was explored to improve datuming consistency but rejected due to Class A surface damage risk. Equipment cleaning, robot reteach, and Coherix reteach were all implemented. Worked cross-functionally throughout — led maintenance through the robot teaching process, directing the work while they operated the pendant as the trained and responsible party, personally performed the initial equipment cleaning and Coherix reteach to establish the process, then transferred that knowledge to maintenance and production as the long-term owners. Built a troubleshooting flowchart from scratch and conducted hands-on training with maintenance team members on when and why to perform a reteach, supplemented by vendor-provided reteach documentation."},
      { type: "text", content: "Results were presented formally to senior management as a complete TBP submission."},
      { type: "text", content: "result" },
      { type: "text", content: "Coherix-related equipment fault time reduced by 86%, from 50.7 minutes per shift to near zero. Normalized shellbody equipment fault time dropped from 576 minutes to 436 minutes following the first countermeasures, with further reduction after the robot reteach. Standardization activities including a Coherix troubleshooting flowchart, QCNS reteach workflow integration, and shift startup procedure updates were initiated to sustain the gains beyond the co-op term."},

    ],
  },
  {
    id: "coherix-bracket",
    title: "sealer vision mounting bracket",
    date: "2026",
    featured: true,
    coverImage: quadrupedImg0,
    summary: "Designed, fabricated, and installed in under 24 hours — because the weekend doesn't wait.",
    bullets: [
      "Last-minute bracket design and fabrication closed out in under 24 hours for ~$1,200 CAD",
      "Two-piece mild steel design enabled 3-axis machining from standard stock, minimizing cost and lead time without sacrificing function",
      "Sensor mounted at required 60mm standoff, clearing all applicator constraints and ready for weekend production integration",
    ],
    blocks: [
      { type: "text", content: "problem" },
      { type: "text", content: "A vision system integration was scheduled on a hood hemming adhesive sealer process, requiring a bracket to mount the Coherix sensor to the dispense applicator. The bracket had to clear an existing heater and shroud on the applicator while positioning the sensor at the manufacturer-specified 60mm standoff from the application surface, perpendicular within ±5mm and ±5°. End-of-fiscal-year budget pressure added urgency, with the integration needing to close before month's end — a cancellation would have been a significant cost to the program." },
      { type: "text", content: "approach" },
      { type: "text", content: "Contacted both the dispense system vendor and vision system vendor for drawings, supplementing with physical measurements to fill gaps where documentation was incomplete. Cross-referenced with similar bracket designs already deployed on other applicators to validate the general approach, and consulted in-house maintenance staff with machining and millwright experience as well as the fabricating machinist and dispense system vendor to confirm sizing decisions — this precedent and collective expertise gave confidence that the design was adequate without requiring formal stress analysis given the negligible loading." },
      { type: "text", content: "The bracket is a two-piece design: a ring piece that bolts concentrically onto the sensor — which is itself a large ring that surrounds the applicator — and a flat bar that bridges perpendicular between the ring piece and a bolted connection directly into the applicator body, forming an L-configuration. This split geometry meant each piece could be machined from standard stock on a 3-axis machine with simple setups, rather than requiring a complex multi-axis operation or custom profile to produce as a single part — directly reducing machining cost and lead time while retaining full functionality and ease of assembly." },
      { type: "text", content: "A fixed bolted mount was chosen over a slotted adjustable design deliberately. The 60mm standoff is fully determined by the bracket geometry, so field adjustment offers no functional benefit — and slotted holes introduce positional play that accumulates over time under the vibration of the machine cycle and thermal cycling near the heater, which would degrade sensor reading consistency. A fixed mount means any installation error is caught at assembly, not discovered later in production." },
      { type: "text", content: "Mild steel was selected for cost and same-day stock availability. No weight, corrosion, or strength-to-weight constraint justified aluminum's cost premium, and steel's higher stiffness for the same cross-section better resists long-term deflection and thermal expansion drift near the heater." },
      { type: "text", content: "result" },
      { type: "text", content: "Bracket designed and fabricated within 24 hours for approximately $1,200 CAD. Sensor was mounted to the applicator clearing all heater and shroud clearances, sitting at the required 60mm standoff in a stable, repeatable position well within the ±5mm and ±5° tolerance. The integration job closed on schedule, protecting a high-value production program from a costly delay." },
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
    summary: "Full acuator design from first principles: custom-wound BLDC motor, cycloidal gearbox, and FOC control integration",
    bullets: [
      "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
      "performed iterative design on gear and housing tolerances to reduce backlash while preserving backdrivability and achieving smooth, reliable motion.",
      "currently having components fabricated",
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
