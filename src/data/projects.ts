// ─── Shared project data ──────────────────────────────────────────────────────
// Edit here and it updates BOTH the home page and the /portfolio page.
//
// Block types:
//   { type: "text", content: "your paragraph here" }
//   { type: "images", images: [img1, img2], height: 400, gap: 30 }  — both optional

import tbpCover from "@/assets/tbp-cover.png";
import tbpFull from "@/assets/TBP.jpg";
import bracketCAD from "@/assets/coherix_bracket_cad.png";
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
import pancakeCover from "@/assets/realPancakePrinter.png";
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
    title: "toyota productivity improvement",
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
    title: "laser sensor mounting bracket",
    date: "2026",
    featured: true,
    coverImage: bracketCAD,
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
    ],
  },
  {
    id: "cycloidal-actuator",
    title: "internal cycloidal actuator",
    date: "2025",
    featured: true,
    coverImage: cycloidalImg0,
    summary: "from-scratch electromechanical actuator build — custom-wound BLDC motor, cycloidal gearbox, and a hard lesson in manufacturing precision",
    bullets: [
      "designed and built a full integrated cycloidal actuator from scratch — custom-wound 36s42p outrunner BLDC, internal cycloidal gearbox, and encoder, modelled in SolidWorks.",
      "prototype validated motor and gearbox concept before compounding issues — PLA creep, print inaccuracy, and a highly constrained internal envelope — caused tolerance stack-up and gearbox seizure.",
      "concluded cycloidal precision requirements exceed current manufacturing access; pivoting to planetary gearbox design planned top-down from the start.",
    ],
    blocks: [
      { type: "text", content: "motivation" },
      { type: "text", content: "Designed as both a learning exercise and a functional joint actuator for a future quadruped robot project. Cycloidal drives were chosen for their high torque density, low backlash, and shock load tolerance — properties well suited to legged robot hip and knee joints where the leg strikes the ground repeatedly and precise position control matters. The goal was to build something non-trivial from scratch: design the gearbox, build the motor, and integrate closed-loop FOC control." },
      { type: "text", content: "approach" },
      { type: "text", content: "Designed the full assembly in SolidWorks — an internal cycloidal gearbox integrated around a custom outrunner BLDC motor. The cycloidal disk geometry was generated from reference and adapted to the design, with heavy inspiration from Aaed Musa's open-source actuator work as a benchmark. The overall architecture — motor, gearbox, encoder, and output — was designed as a compact integrated unit rather than stacking off-the-shelf components." },
      { type: "text", content: "The motor was built from scratch: a 36-slot 42-pole outrunner configuration using an 8110 stator, with rotor geometry, magnet placement, and pole/slot ratio selected by consulting reference designs and weighing tradeoffs between torque smoothness, cogging, and winding complexity. Coils were hand-wound onto the stator. The rotor housing, magnet retention, and all structural motor components were 3D printed. The motor successfully spun under ESC control, validating the electromagnetic design." },
      { type: "text", content: "The intended controller was a Moteus FOC driver for closed-loop torque and position control — the right choice for a compliant legged actuator — but firmware configuration proved a persistent blocker and remains a work in progress." },
      { type: "text", content: "The prototype was printed in PLA and assembled with tight tolerances to validate fit and function. It spun successfully under load initially, but the design accumulated several compounding issues over time: PLA creep caused dimensional drift in load-bearing features, print dimensional inaccuracy and inherent warping pushed already tight clearances into interference, and the chosen 8110 stator imposed a highly constrained internal envelope that forced extreme design compromises around off-the-shelf hardware — bearings, screws, and spacers come in fixed sizes, and when space is that tight, every component becomes a constraint on every other. The result was a design cadded reactively around constraints rather than planned from the ground up. That said, 3D printing genuinely enabled geometries that would be impossible or impractical to machine — internal features, organic profiles, and integrated structures that made the build feasible at all. The failure wasn't the process, it was applying it to a mechanism that ultimately demands more precision than FDM can reliably deliver." },
      { type: "text", content: "current status & path forward" },
      { type: "text", content: "Cycloidal drives are elegant in theory but unforgiving in practice — the low backlash and torque density advantages depend entirely on tight manufacturing tolerances at the disk-to-pin interface. Without precision machining, those benefits don't materialize, and a sloppy cycloidal gearbox ends up worse than a well-executed planetary. The deeper lesson was process: designing as you go works for simple builds but falls apart when every component is a spatial constraint on the next. The next actuator will be a planetary gearbox — simpler geometry, more forgiving tolerances, and planned top-down from the start." },
      { type: "text", content: "what it demonstrates" },
      { type: "text", content: "End-to-end electromechanical system design — CAD, motor theory, winding, gearbox geometry, and control system selection — built entirely from personal initiative with no coursework requirement or deadline. The prototype worked, the failure mode was diagnosed correctly, and the lessons are directly informing the next build." },
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
    coverImage: pancakeCover,
summary: "a 2-axis gantry robot that prints pancake batter into user-selected shapes",
bullets: [
  "built a functional 2-axis gantry pancake printer using Tetrix, Lego EV3, laser-cut rails, and custom 3D printed parts.",
  "replaced rack and pinion extrusion with a lead screw mid-project after torque requirements exceeded what the rack could deliver.",
  "programmed in C++ with encoder-based positioning, colour sensor shape selection, manual mode, and automatic nozzle zeroing.",
  "all seven engineering specifications verified at live demonstration including 456 cm² print area and 90 mL dispensable volume.",
  "see detailed report [here](/Pancake Printer ME101 Course Project Report.pdf)",
],
blocks: [
  { type: "text", content: "problem" },
  { type: "text", content: "The goal was to build a robot that could automatically extrude pancake batter into custom shapes on a 2D plane, weighing under 6kg and fitting within 50×50×40cm. The core challenge was integrating three independent subsystems — a 2-axis gantry, a batter extrusion mechanism, and a user interface — using constrained hardware: Lego EV3 motors and sensors, Tetrix structural components, and custom fabricated parts." },
  { type: "text", content: "approach" },
  { type: "text", content: "Three conceptual designs were evaluated through a decision-making matrix: a rack and pinion gantry, a wheel and rail gantry, and a free-roaming car. The car design was eliminated for accuracy and maintenance reasons — without fixed axes, positional error compounds quickly. The wheel and rail gantry was selected for its accuracy, modularity, and user interface flexibility via the EV3 brick screen and buttons." },
  { type: "text", content: "The extrusion system went through a critical mid-project redesign. The original rack and pinion mechanism was tested but couldn't generate enough torque to push viscous batter through the syringe — rack and pinion systems are suited for high-speed low-torque applications, not the sustained high-torque requirement of batter extrusion. It was replaced with a lead screw, which converts motor rotation to linear force far more effectively, producing cleaner and more consistent extrusion." },
  { type: "text", content: "The gantry rails were laser cut from 1/8-inch wood rather than 3D printed — the strips were too long to fit on a print bed, and laser cutting was faster and cheaper for flat uniform geometry. 3D printing was reserved for the brackets, mounts, and adapters that required 3D geometry incompatible with laser cutting. PLA was used throughout as no structural load case demanded stronger materials like PETG. Tolerances for friction fits and loose fits were dialled in iteratively through test prints." },
  { type: "text", content: "Physical bumpers were added to both axes as hard stops — not just for safety, but as a zeroing mechanism. On each reset, the nozzle drives into the bumpers to re-establish a known origin, correcting any positional drift accumulated from motor encoder error over consecutive prints. Virtual limits in software provided a redundant layer of protection." },
  { type: "text", content: "The software was structured around a core move_Both() function handling simultaneous XY movement and extrusion toggling based on defined coordinate bounds. All shape functions — square, triangle, spiral — were built on top of this abstraction, keeping each shape to a few lines of coordinate calls. The original face shape was replaced with a spiral because the face required repeated extrusion start/stop cycles, and batter drip made non-continuous shapes unreliable. The spiral's continuous extrusion path played to the system's strengths." },
  { type: "text", content: "result" },
  { type: "text", content: "All seven engineering specifications were successfully verified at live demonstration. The robot printed three consecutive shapes without failure, fit within the dimensional and mass constraints, dispensed 90 mL of batter (exceeding the 75 mL minimum), and achieved a printable area of 456 cm² against a 225 cm² requirement. An uninvolved student successfully operated both modes with minimal instruction, confirming the ease-of-use specification. Remaining limitations were centred on batter viscosity control and extrusion drip — identified as the primary target for future refinement." },
],
  },
  {
    id: "timer-parachute",
    title: "tommy timer parachute",
    date: "2024",
    featured: false,
    coverImage: pancakeCover,
    summary: "mechanically timed parachute deployment nosecone for a 2L water rocket — no electronics, no batteries, just a wind-up toy timer and a plastic spring",
    bullets: [
      "designed and built a modular 3D printed nosecone attachment with an internal parachute deployment system compatible with any standard 2L bottle.",
      "mechanically timed deployment using a tomy wind-up timer, calibrated to release the nosecone within ~2.5 seconds to match time to apogee.",
      "prototyped, field tested, and iterated through multiple design cycles — parachute successfully deployed on all recorded flight trials.",
      "see detailed report [here](/parachute_report.pdf)",
    ],
    blocks: [
      { type: "text", content: "problem" },
      { type: "text", content: "Water rocket parachute deployment is a commonly discussed challenge — most solutions are either overcomplicated or unreliable, and the few commercial options use electronics that aren't child-friendly. The goal was a mechanically timed, modular nosecone attachment that any kid could use, fit any standard 2L bottle, and reliably deploy a parachute at or near apogee." },
      { type: "text", content: "approach" },
      { type: "text", content: "Three deployment mechanisms were evaluated: a gravity-based system, a pressure plate design, and a mechanical timer. Gravity and pressure plate designs were both eliminated — both rely on consistent and predictable flight orientation, making them susceptible to premature deployment. A tomy wind-up timer was selected for its reliability and independence from flight path or external forces." },
      { type: "text", content: "The timer needed to start the moment the rocket launched. A combined pin-and-launcher solution was developed: a block inserted as a physical stop, tied to the launch stand, so it pulls out automatically the moment the rocket lifts off — eliminating false starts from pre-launch movement." },
      { type: "text", content: "A PETG plastic strip was chosen over a metal spring for the parachute ejection mechanism. Metal springs couldn't be compressed into the tight nosecone volume and produced inconsistent force. The PETG strip compressed into a compact form and delivered reliable, consistent ejection force on every trial." },
      { type: "text", content: "The nosecone attachment went through multiple iterations. A friction fit proved unreliable across different bottle shapes. A sponge and string solution improved compatibility, and a 3D printed clip with a nut-and-bolt tightening method ultimately replaced rubber bands — providing a secure, repeatable fit across all bottle types tested." },
      { type: "text", content: "Timer calibration was done systematically: slow-motion video identified the exact rotational position at which the rubber band releases, then bench testing mapped wind-up turns to deployment time. Flight trials without the nosecone established time to apogee at approximately 2.5 seconds, and 1 rotation of wind-up was confirmed as the optimal queue amount to match this." },
      { type: "text", content: "result" },
      { type: "text", content: "Parachute deployed successfully on all recorded flight trials. The tomy timer released the nosecone at or near apogee consistently, and the PETG spring ejected the parachute reliably on every test. Remaining refinements identified include a proper integrated bracket for the timer and spring to replace the glue and zip tie solution used in the prototype, and a more suitable parachute material to improve air-catch consistency." },
    ],
  },
];
