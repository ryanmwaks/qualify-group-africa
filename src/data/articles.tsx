import React from "react";
import coverTrim from "@/assets/generated/article-trim.jpg";
import coverList from "@/assets/generated/article-list.jpg";
import coverDisplacement from "@/assets/generated/article-displacement.jpg";
import coverHogging from "@/assets/generated/article-hogging.jpg";
import coverVesselDraft from "@/assets/generated/article-vessel-draft.jpg";
import coverSagging from "@/assets/generated/article-sagging.jpg";
import coverLightship from "@/assets/generated/article-lightship.jpg";

export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  dateIso: string;
  cats: string[];
  excerpt: string;
  readTime: string;
  coverImage: string;
  body: React.ReactNode;
  sketch: React.ReactNode;
}

export const articles: Article[] = [
  // ── Article 1 ────────────────────────────────────────────────────────────────
  {
    slug: "understanding-trim-draft-survey",
    title: "Understanding Trim and Its Role in Draft Survey Accuracy",
    author: "Sebastian Muoka",
    date: "20 December 2025",
    dateIso: "2025-12-20",
    cats: ["Draft Survey", "Hydrostatics", "Marine Surveying", "Bulk Carriers"],
    excerpt:
      "Trim is one of the core parameters that determines how precise a draft survey can be. It describes the vessel's longitudinal balance in the water and directly affects displacement, tank measurements and every correction that follows the draft readings.",
    readTime: "5 min read",
    coverImage: coverTrim,
    sketch: (
      <svg
        viewBox="0 0 640 220"
        className="w-full"
        aria-label="Vessel trimmed aft — draft survey trim diagram"
      >
        {/* Water */}
        <rect x="0" y="120" width="640" height="100" fill="#e0f2fe" opacity="0.6" />
        {/* Waterline */}
        <line x1="0" y1="120" x2="640" y2="120" stroke="#0A6FAE" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="8" y="115" fontSize="10" fill="#0A6FAE" fontFamily="monospace">Waterline</text>
        {/* Hull — trimmed aft (stern lower) */}
        <path d="M 80,90 L 560,75 L 570,125 L 80,130 Z" fill="#f0f9ff" stroke="#062B4F" strokeWidth="2" />
        {/* Keel line */}
        <line x1="80" y1="130" x2="570" y2="125" stroke="#062B4F" strokeWidth="1" strokeDasharray="4 3" />
        {/* Aft perpendicular */}
        <line x1="560" y1="60" x2="560" y2="160" stroke="#007A8A" strokeWidth="1.5" />
        <text x="562" y="58" fontSize="10" fill="#007A8A" fontFamily="monospace">AP</text>
        {/* Forward perpendicular */}
        <line x1="80" y1="60" x2="80" y2="155" stroke="#007A8A" strokeWidth="1.5" />
        <text x="82" y="58" fontSize="10" fill="#007A8A" fontFamily="monospace">FP</text>
        {/* Aft draft arrow */}
        <line x1="540" y1="120" x2="540" y2="126" stroke="#E4572E" strokeWidth="2" markerEnd="url(#arr)" />
        <line x1="540" y1="74" x2="540" y2="119" stroke="#E4572E" strokeWidth="2" strokeDasharray="3 2" />
        <text x="498" y="100" fontSize="10" fill="#E4572E" fontFamily="monospace">da (aft)</text>
        {/* Forward draft arrow */}
        <line x1="100" y1="120" x2="100" y2="131" stroke="#E4572E" strokeWidth="2" />
        <line x1="100" y1="89" x2="100" y2="119" stroke="#E4572E" strokeWidth="2" strokeDasharray="3 2" />
        <text x="106" y="108" fontSize="10" fill="#E4572E" fontFamily="monospace">df (fwd)</text>
        {/* Trim annotation */}
        <line x1="100" y1="145" x2="540" y2="145" stroke="#062B4F" strokeWidth="1" markerStart="url(#arr2)" markerEnd="url(#arr2)" />
        <text x="290" y="158" fontSize="11" fill="#062B4F" fontFamily="monospace" textAnchor="middle">Trim = da - df</text>
        {/* Arrows defs */}
        <defs>
          <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#E4572E" />
          </marker>
          <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,3 L6,0 L6,6 Z" fill="#062B4F" />
          </marker>
        </defs>
        {/* Label */}
        <text x="320" y="88" fontSize="12" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          Vessel Trimmed Aft (Stern Deeper)
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Trim is one of the core parameters that determines how precise a draft survey can be. It describes the
          vessel's longitudinal balance in the water and directly affects displacement, tank measurements and every
          correction that follows the draft readings.
        </p>
        <h2>What Is Trim?</h2>
        <p>
          Trim is simply the difference between the corrected drafts at the aft and forward perpendiculars. When both
          ends sit at the same draft, the vessel is on an even keel. Hydrostatic data is built on this even-keel
          condition, which is why any deviation has to be corrected before the survey progresses.
        </p>
        <p>
          A vessel trims aft when the stern sits deeper, and trims forward when the bow sits deeper. The true trim
          comes from the corrected drafts at the AP and FP — not just the observed readings at the draft marks. This
          corrected value is essential for all displacement adjustments.
        </p>
        <blockquote>
          <strong>Trim = Corrected Aft Draft - Corrected Forward Draft</strong>
        </blockquote>
        <h2>Why Trim Must Be Kept Small</h2>
        <p>
          Keeping trim small is important. Excessive trim can distort tank soundings and reduce the reliability of
          pre-survey data. Ideally the trim stays below one percent of the vessel's length and should never be by the
          bow — because soundings taken when trimmed by the head can lead to major volume errors in forward tanks.
        </p>
        <h2>Trim Corrections Applied to Displacement</h2>
        <p>Once the true trim is known, two corrections are applied to obtain the corrected displacement:</p>
        <ul>
          <li>
            <strong>First Trim Correction:</strong> Accounts for the vessel rotating around the longitudinal centre of
            flotation (LCF). As the ship trims, the underwater volume shifts relative to the hydrostatic tables, which
            assume even keel.
          </li>
          <li>
            <strong>Second Trim Correction:</strong> Adjusts for the change in the waterplane shape as the vessel
            trims further from even keel. This is sometimes called the "layer correction" and uses the change in TPC
            and LCF values between drafts.
          </li>
        </ul>
        <p>
          The total trim correction is then applied to the even-keel displacement to obtain the corrected displacement
          for trim.
        </p>
        <h2>Effect of Trim on Tank Soundings</h2>
        <p>
          Trim also affects all deductible liquids. Tank tables usually assume even keel, so when a vessel is trimmed,
          soundings shift — sometimes significantly for long tanks. Whether a correction is added or subtracted depends
          on the trim direction and the position of the sounding pipe relative to the tank midpoint. These corrections
          must be applied to every tank before deductions are made from displacement.
        </p>
        <h2>Summary</h2>
        <p>
          Trim may look like a simple difference in drafts, but it influences every major step in the draft survey
          process. A correct understanding of it — and careful application of both trim corrections — is key to
          reaching accurate cargo figures.
        </p>
      </div>
    ),
  },

  // ── Article 2 ────────────────────────────────────────────────────────────────
  {
    slug: "understanding-list-heel-draft-survey",
    title: "Understanding List (Heel) and Its Effect on Draft Survey Accuracy",
    author: "Sebastian Muoka",
    date: "20 December 2025",
    dateIso: "2025-12-20",
    cats: ["Draft Survey", "Hydrostatics", "Marine Surveying", "Bulk Carriers"],
    excerpt:
      "List, or heel, is the sideways inclination of a vessel from the vertical. Even small angles affect hydrostatic assumptions, ballast readings and midship draft measurements.",
    readTime: "5 min read",
    coverImage: coverList,
    sketch: (
      <svg
        viewBox="0 0 640 240"
        className="w-full"
        aria-label="Vessel listing to starboard — draft survey list diagram"
      >
        {/* Water */}
        <rect x="0" y="130" width="640" height="110" fill="#e0f2fe" opacity="0.6" />
        {/* Waterline */}
        <line x1="0" y1="130" x2="640" y2="130" stroke="#0A6FAE" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="8" y="125" fontSize="10" fill="#0A6FAE" fontFamily="monospace">Waterline</text>
        {/* Vessel cross section — tilted starboard */}
        <g transform="rotate(8, 320, 130)">
          <rect x="220" y="80" width="200" height="80" rx="4" fill="#f0f9ff" stroke="#062B4F" strokeWidth="2" />
          {/* Keel */}
          <line x1="220" y1="160" x2="420" y2="160" stroke="#062B4F" strokeWidth="2" />
          {/* Mast / centreline */}
          <line x1="320" y1="30" x2="320" y2="80" stroke="#062B4F" strokeWidth="1.5" />
          {/* Deck line */}
          <line x1="220" y1="80" x2="420" y2="80" stroke="#007A8A" strokeWidth="1" />
        </g>
        {/* Vertical reference line */}
        <line x1="320" y1="20" x2="320" y2="200" stroke="#E4572E" strokeWidth="1" strokeDasharray="5 3" />
        <text x="324" y="18" fontSize="10" fill="#E4572E" fontFamily="monospace">Vertical</text>
        {/* List angle arc */}
        <path d="M 320,90 A 40,40 0 0 1 345,73" fill="none" stroke="#E4572E" strokeWidth="1.5" />
        <text x="328" y="82" fontSize="10" fill="#E4572E" fontFamily="monospace">deg</text>
        {/* Port draft label */}
        <text x="160" y="145" fontSize="10" fill="#062B4F" fontFamily="monospace">dp (Port)</text>
        <line x1="215" y1="130" x2="215" y2="155" stroke="#062B4F" strokeWidth="2" />
        {/* Starboard draft label */}
        <text x="430" y="155" fontSize="10" fill="#062B4F" fontFamily="monospace">ds (Stbd)</text>
        <line x1="425" y1="130" x2="425" y2="165" stroke="#062B4F" strokeWidth="2" />
        {/* Label */}
        <text x="320" y="215" fontSize="11" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          List = ds - dp (when listing to starboard)
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          List, or heel, is the sideways inclination of a vessel from the vertical. It is measured at midships and
          usually expressed in degrees using an inclinometer. When this instrument is not available, the list can be
          calculated from the difference between the port and starboard midships drafts.
        </p>
        <h2>How List Is Measured</h2>
        <p>
          The vessel rotates around its longitudinal axis through the longitudinal centre of flotation, which divides
          the underwater body into two equal halves. When a vessel lists to starboard, the starboard midships draft
          becomes greater than the port. The difference between the two readings — combined with the ship's beam and
          an inclinometer reading — gives the list angle.
        </p>
        <h2>Why List Matters in a Draft Survey</h2>
        <p>
          Hydrostatic data assumes the vessel is upright. Because of this, the ship should have zero list when drafts
          and tank soundings are taken. In practice, list should not exceed half a degree. Anything larger reduces the
          accuracy of the entire survey:
        </p>
        <ul>
          <li>Reading drafts becomes harder — the waterline appears at different heights on port and starboard</li>
          <li>Determining ballast quantities becomes less reliable, particularly in topside tanks</li>
          <li>Topside tanks are especially challenging because the inclined surface changes the sounding significantly</li>
        </ul>
        <h2>The List Correction</h2>
        <p>
          When a vessel lists, the waterplane area increases and the ship rises slightly. This is why the list
          correction, when used, is always positive — it adds to displacement. That said, the better option is almost
          always to remove the list rather than calculate it. Adjusting ballast or shifting weight can usually bring
          the list below half a degree. When it is that small, the correction becomes negligible and should be ignored.
        </p>
        <p>
          If the list is significant and a correction is required, a simple relationship can be used to estimate it
          based on the midships draft difference and the change in TPC between both sides.
        </p>
        <h2>List in Rough Conditions</h2>
        <p>
          In rough conditions, a manometer can help determine list when outboard drafts cannot be seen. By comparing
          water levels across the deck and scaling for the ship's beam, the true list can be derived and the outboard
          draft corrected.
        </p>
        <h2>Summary</h2>
        <p>
          Keeping the vessel upright is one of the easiest ways to improve survey accuracy. Even small angles of heel
          can have a noticeable impact on displacement and tank volumes. When in doubt — correct the list before
          taking readings, rather than trying to calculate around it.
        </p>
      </div>
    ),
  },

  // ── Article 3 ────────────────────────────────────────────────────────────────
  {
    slug: "displacement-vs-deadweight-draft-survey",
    title: "Displacement vs Deadweight: Why the Difference Matters in Draft Surveying",
    author: "Sebastian Muoka",
    date: "20 December 2025",
    dateIso: "2025-12-20",
    cats: ["Draft Survey", "Hydrostatics", "Marine Surveying", "Cargo Measurement"],
    excerpt:
      "Displacement is the true weight of the vessel. Deadweight is its carrying capacity. Only one can be used when applying density corrections — and mixing them up is a common and costly error.",
    readTime: "4 min read",
    coverImage: coverDisplacement,
    sketch: (
      <svg
        viewBox="0 0 640 200"
        className="w-full"
        aria-label="Displacement equals Light Ship Weight plus Deadweight"
      >
        {/* Displacement block (full) */}
        <rect x="20" y="30" width="600" height="60" rx="6" fill="#e0f2fe" stroke="#0A6FAE" strokeWidth="2" />
        <text x="320" y="65" fontSize="14" fill="#0A6FAE" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          DISPLACEMENT - Total weight of vessel in water
        </text>
        {/* Light ship portion */}
        <rect x="20" y="110" width="220" height="60" rx="6" fill="#f0fafa" stroke="#007A8A" strokeWidth="2" />
        <text x="130" y="138" fontSize="12" fill="#007A8A" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Light Ship</text>
        <text x="130" y="154" fontSize="10" fill="#007A8A" fontFamily="monospace" textAnchor="middle">Weight (LSW)</text>
        {/* Plus sign */}
        <text x="255" y="148" fontSize="24" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">+</text>
        {/* Deadweight portion */}
        <rect x="280" y="110" width="340" height="60" rx="6" fill="#fff7ed" stroke="#E4572E" strokeWidth="2" />
        <text x="450" y="138" fontSize="12" fill="#E4572E" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Deadweight (DWT)</text>
        <text x="450" y="154" fontSize="10" fill="#E4572E" fontFamily="monospace" textAnchor="middle">Cargo + Bunkers + Ballast + Stores + Water</text>
        {/* Equals lines */}
        <line x1="320" y1="92" x2="320" y2="108" stroke="#062B4F" strokeWidth="2" />
        <text x="302" y="104" fontSize="14" fill="#062B4F" fontFamily="monospace" fontWeight="bold">=</text>
        {/* Rule box */}
        <rect x="20" y="180" width="600" height="1" fill="#007A8A" />
        <text x="320" y="195" fontSize="10" fill="#E4572E" fontFamily="monospace" textAnchor="middle">
          Density corrections must ALWAYS be applied to Displacement — never to Deadweight alone
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Displacement and deadweight sound similar, but they serve very different roles in a draft survey.
          Understanding the distinction is essential because only one of these values can be used when applying
          density, trim and list corrections.
        </p>
        <h2>What Is Displacement?</h2>
        <p>
          Displacement is the total weight of water the vessel pushes aside when it floats. By Archimedes' Principle,
          this equals the vessel's true weight at any given moment. It includes the light ship, cargo, ballast,
          bunkers, fresh water and every other weight on board.
        </p>
        <h2>What Is Deadweight?</h2>
        <p>
          Deadweight (DWT) represents the vessel's carrying capacity — the difference between its displacement and its
          light ship weight. It covers cargo, fuel, water, stores and crew. Deadweight changes with loading; light
          ship weight does not.
        </p>
        <blockquote>
          <strong>Displacement = Light Ship Weight + Deadweight</strong>
        </blockquote>
        <h2>The Critical Rule: Always Correct Displacement, Not Deadweight</h2>
        <p>
          In draft survey work, the key rule is that density corrections must always be applied to displacement. Using
          deadweight would leave out the light ship weight — which is a permanent and substantial part of the vessel's
          mass. This would distort the corrected results and lead to inaccurate cargo calculations.
        </p>
        <p>
          If a vessel's documents show only a deadweight scale, the surveyor must add the light ship weight to obtain
          the correct displacement before making any corrections. Mistaking a deadweight scale for a displacement scale
          is a common source of error, and one that directly affects the accuracy of the final cargo figure.
        </p>
        <h2>Why This Matters in Practice</h2>
        <p>
          The draft survey ultimately relies on changes in displacement — corrected for trim, list and dock water
          density — to isolate the true weight of cargo moved between the arrival and departure surveys. If
          displacement is misstated at any point, every subsequent calculation carries that error forward.
        </p>
        <p>
          Surveyors must confirm which scale is provided in the ship's hydrostatic tables and apply the correct light
          ship weight when a deadweight-only scale is used.
        </p>
        <h2>Summary</h2>
        <p>
          Displacement is what the ship actually weighs. Deadweight is what it can carry. Corrections in draft
          surveying — density, trim, list — must always be applied to displacement. When in doubt, add the light ship
          weight first.
        </p>
      </div>
    ),
  },

  // ── Article 4 ────────────────────────────────────────────────────────────────
  {
    slug: "understanding-hogging-draft-survey",
    title: "Understanding Hogging and Why It Matters in Draft Survey Accuracy",
    author: "Sebastian Muoka",
    date: "20 December 2025",
    dateIso: "2025-12-20",
    cats: ["Draft Survey", "Ship Structure", "Bulk Carriers", "Hydrostatics"],
    excerpt:
      "Hogging is upward hull deformation at midships. It appears when most weight sits at the bow and stern, reducing underwater volume and causing displacement to be overstated if uncorrected.",
    readTime: "4 min read",
    coverImage: coverHogging,
    sketch: (
      <svg
        viewBox="0 0 640 200"
        className="w-full"
        aria-label="Vessel hogging — hull bent upward at midships"
      >
        {/* Water */}
        <rect x="0" y="120" width="640" height="80" fill="#e0f2fe" opacity="0.6" />
        {/* Waterline */}
        <line x1="0" y1="120" x2="640" y2="120" stroke="#0A6FAE" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="8" y="115" fontSize="10" fill="#0A6FAE" fontFamily="monospace">Waterline</text>
        {/* Even-keel reference (dashed) */}
        <line x1="60" y1="100" x2="580" y2="100" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
        <text x="590" y="104" fontSize="9" fill="#94a3b8" fontFamily="monospace">Even keel</text>
        {/* Hogged hull — keel curves UP at midships */}
        <path
          d="M 60,105 Q 320,72 580,105 L 580,122 Q 320,122 60,122 Z"
          fill="#f0f9ff"
          stroke="#062B4F"
          strokeWidth="2.5"
        />
        {/* Draft marks */}
        <line x1="60" y1="104" x2="60" y2="140" stroke="#E4572E" strokeWidth="2" />
        <text x="30" y="118" fontSize="10" fill="#E4572E" fontFamily="monospace">dF</text>
        <line x1="580" y1="104" x2="580" y2="140" stroke="#E4572E" strokeWidth="2" />
        <text x="584" y="118" fontSize="10" fill="#E4572E" fontFamily="monospace">dA</text>
        <line x1="320" y1="72" x2="320" y2="140" stroke="#007A8A" strokeWidth="2" />
        <text x="324" y="86" fontSize="10" fill="#007A8A" fontFamily="monospace">dM (midships)</text>
        {/* Hog annotation */}
        <defs>
          <marker id="arru" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
            <path d="M0,6 L3,0 L6,6 Z" fill="#E4572E" />
          </marker>
        </defs>
        <line x1="320" y1="99" x2="320" y2="76" stroke="#E4572E" strokeWidth="2" markerEnd="url(#arru)" />
        <text x="270" y="68" fontSize="10" fill="#E4572E" fontFamily="monospace">Hog (hull rises)</text>
        {/* Weight distribution */}
        <rect x="65" y="82" width="80" height="14" rx="2" fill="#062B4F" opacity="0.6" />
        <text x="105" y="92" fontSize="9" fill="white" fontFamily="monospace" textAnchor="middle">Weight</text>
        <rect x="495" y="82" width="80" height="14" rx="2" fill="#062B4F" opacity="0.6" />
        <text x="535" y="92" fontSize="9" fill="white" fontFamily="monospace" textAnchor="middle">Weight</text>
        {/* Label */}
        <text x="320" y="175" fontSize="11" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          Hogging: dM less than Mean of (dF + dA) / 2
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Hogging is a structural deformation that bends the hull upward at midships. It is the opposite of sagging,
          and it happens when most of the vessel's weight sits toward the bow and stern rather than the centre. Ships
          also tend to hog in light condition, where the midship area has less support from cargo weight.
        </p>
        <h2>How to Recognise Hogging</h2>
        <p>
          In a draft survey, hogging shows up when the midships draft is <strong>smaller</strong> than the arithmetic
          mean of the forward and aft drafts. This difference tells the surveyor that the hull is flexed upward at the
          middle.
        </p>
        <blockquote>
          <strong>Hogging condition: dM is less than (dF + dA) / 2</strong>
        </blockquote>
        <p>
          Because hogging reduces the underwater volume of the hull, it also reduces the vessel's displacement. If left
          uncorrected, this leads to <strong>overstated cargo figures</strong> — the survey will show more cargo than
          was actually loaded.
        </p>
        <h2>The Three-Quarter Mean Draft</h2>
        <p>
          To correct for hogging, surveyors use a representative mean draft rather than a simple arithmetic mean. For
          most ships, the <strong>three-quarter mean draft</strong> is used because it gives more weight to the
          midships reading, which best represents the hull's underwater volume:
        </p>
        <blockquote>
          <strong>Three-quarter mean = (dF + 6 x dM + dA) / 8</strong>
        </blockquote>
        <p>
          Some large bulk carriers — especially Cape Size vessels — may have dedicated deflection correction tables
          provided by the classification society. These are important because heavy ballast in a central hold can cause
          a <strong>double hog</strong>, which exaggerates the error and cannot be fully captured by the standard
          three-point method. In such cases, a small reduction in the midships draft — typically three to six
          centimetres — may be specified in the vessel's class documents.
        </p>
        <h2>Why This Matters</h2>
        <p>
          Recognising hogging and applying the right correction is essential for accurate displacement and cargo
          calculations. Hull deflection is not just a structural concern — it directly affects measurement integrity,
          particularly on large vessels in light ballast condition. Ignoring it introduces a systematic error that
          favours overstating cargo loaded.
        </p>
        <h2>Summary</h2>
        <p>
          When the midships draft reads lower than expected, suspect hogging. Use the three-quarter mean draft, and
          check whether the vessel class provides a specific deflection table. On Cape Size and larger bulk carriers,
          this step is critical.
        </p>
      </div>
    ),
  },

  // ── Article 5 ────────────────────────────────────────────────────────────────
  {
    slug: "vessel-draft",
    title: "Vessel Draft",
    author: "Sebastian Muoka",
    date: "4 April 2025",
    dateIso: "2025-04-04",
    cats: ["Draft Survey", "Marine Surveying", "Cargo Measurement", "Hydrostatics"],
    excerpt:
      "Draft is the vertical distance from the waterline to the keel. It is the primary measurement that connects the ship's position in the water to its actual weight — and the foundation of every draft survey.",
    readTime: "6 min read",
    coverImage: coverVesselDraft,
    sketch: (
      <svg
        viewBox="0 0 640 240"
        className="w-full"
        aria-label="Draft mark scale showing waterline, keel and draft readings"
      >
        {/* Water */}
        <rect x="0" y="110" width="640" height="130" fill="#e0f2fe" opacity="0.6" />
        {/* Waterline */}
        <line x1="0" y1="110" x2="640" y2="110" stroke="#0A6FAE" strokeWidth="2" />
        <text x="8" y="106" fontSize="10" fill="#0A6FAE" fontFamily="monospace">Waterline</text>
        {/* Hull outline */}
        <path d="M 80,70 L 560,70 L 560,190 Q 320,210 80,190 Z" fill="#f8fafc" stroke="#062B4F" strokeWidth="2" />
        {/* Keel */}
        <path d="M 80,190 Q 320,210 560,190" fill="none" stroke="#062B4F" strokeWidth="3" />
        <text x="320" y="225" fontSize="10" fill="#062B4F" fontFamily="monospace" textAnchor="middle">Keel (baseline)</text>
        {/* Draft mark scale — forward */}
        <g transform="translate(95,0)">
          <rect x="0" y="100" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="116" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="132" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="148" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="164" width="18" height="8" fill="#062B4F" />
          <text x="22" y="109" fontSize="9" fill="#062B4F" fontFamily="monospace">6M</text>
          <text x="22" y="125" fontSize="9" fill="#062B4F" fontFamily="monospace">5M</text>
          <text x="22" y="141" fontSize="9" fill="#062B4F" fontFamily="monospace">4M</text>
          <text x="22" y="157" fontSize="9" fill="#062B4F" fontFamily="monospace">3M</text>
          <text x="22" y="173" fontSize="9" fill="#062B4F" fontFamily="monospace">2M</text>
          <text x="-20" y="75" fontSize="10" fill="#007A8A" fontFamily="monospace">FP (Fwd)</text>
        </g>
        {/* Draft mark scale — aft */}
        <g transform="translate(518,0)">
          <rect x="0" y="100" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="116" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="132" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="148" width="18" height="8" fill="#062B4F" />
          <rect x="0" y="164" width="18" height="8" fill="#062B4F" />
          <text x="-18" y="109" fontSize="9" fill="#062B4F" fontFamily="monospace" textAnchor="end">8M</text>
          <text x="-18" y="125" fontSize="9" fill="#062B4F" fontFamily="monospace" textAnchor="end">7M</text>
          <text x="-18" y="141" fontSize="9" fill="#062B4F" fontFamily="monospace" textAnchor="end">6M</text>
          <text x="-18" y="157" fontSize="9" fill="#062B4F" fontFamily="monospace" textAnchor="end">5M</text>
          <text x="-18" y="173" fontSize="9" fill="#062B4F" fontFamily="monospace" textAnchor="end">4M</text>
          <text x="2" y="75" fontSize="10" fill="#007A8A" fontFamily="monospace">AP (Aft)</text>
        </g>
        {/* Draft arrows */}
        <line x1="100" y1="110" x2="100" y2="193" stroke="#E4572E" strokeWidth="2" strokeDasharray="4 2" />
        <text x="54" y="155" fontSize="10" fill="#E4572E" fontFamily="monospace">Draft F</text>
        <line x1="540" y1="110" x2="540" y2="185" stroke="#E4572E" strokeWidth="2" strokeDasharray="4 2" />
        <text x="544" y="150" fontSize="10" fill="#E4572E" fontFamily="monospace">Draft A</text>
        {/* Midships mark */}
        <line x1="320" y1="68" x2="320" y2="205" stroke="#007A8A" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="324" y="66" fontSize="10" fill="#007A8A" fontFamily="monospace">Midships</text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Draft is the basic measurement that connects the ship's position in the water to its actual weight. It is
          the vertical distance from the waterline down to the bottom of the keel. When the draft increases, the
          vessel is displacing more water — which means its weight has increased. This simple relationship is the
          foundation of the entire draft survey method.
        </p>
        <h2>Draft Marks on the Hull</h2>
        <p>
          Draft is read from the numbers marked on the hull. These draft marks appear{" "}
          <strong>forward, aft and at midships</strong> on both the port and starboard sides — giving six readings per
          survey. Each number shows the distance from that point on the hull to the underside of the keel. Marks may
          be in metres or feet, and they should be raised, welded or clearly outlined so the waterline can be read
          without ambiguity.
        </p>
        <p>
          <strong>Midships marks matter the most</strong> because the midships draft carries the greatest weight when
          calculating the three-quarter mean draft used for hydrostatic tables.
        </p>
        <h2>How Drafts Are Read</h2>
        <p>
          Surveyors read the draft directly from the hull whenever conditions allow — observing the waterline between
          the two marks that straddle the actual draft. If the marks are hard to see, or if the vessel has no midships
          scale, the draft can be measured indirectly using a known reference line such as the deck line and
          calculating the difference to the waterline.
        </p>
        <p>
          In rough conditions or when the hull is too fouled to read, the surveyor must note the conditions and
          exercise professional judgement on the reliability of the readings.
        </p>
        <h2>Correcting the Observed Drafts</h2>
        <p>
          Once the six drafts are taken, the first step is to average the port and starboard values at each location.
          These mean drafts must then be <strong>corrected to the forward and aft perpendiculars</strong>, because
          hydrostatic tables are built on those reference points — not on the physical position of the draft marks,
          which may be several metres inboard of the perpendiculars on large vessels.
        </p>
        <p>
          The corrected drafts also reveal any hogging or sagging of the hull. A single representative draft is then
          found using the three-quarter mean formula.
        </p>
        <h2>The Keel Plate Correction</h2>
        <p>
          If the hydrostatic data is based on the moulded base line (the inner face of the keel plate) rather than
          the extreme keel, the thickness of the keel plate must be added before entering the tables. This is
          typically a small but fixed correction.
        </p>
        <h2>Summary</h2>
        <p>
          Draft is the measurement that ties the real ship in the water to the displacement values in the hydrostatic
          book. Every other calculation in a draft survey — trim corrections, list corrections, density corrections
          and deductibles — depends on getting the draft readings right. Take time at the hull. Read from a stable
          position. Record what you see, not what you expect.
        </p>
      </div>
    ),
  },

  // ── Article 6 ────────────────────────────────────────────────────────────────
  {
    slug: "understanding-sagging-draft-survey",
    title: "Understanding Sagging and Its Impact on Draft Survey Accuracy",
    author: "Sebastian Muoka",
    date: "19 November 2018",
    dateIso: "2018-11-19",
    cats: ["Draft Survey", "Ship Structure", "Sagging", "Bulk Carriers", "Hydrostatics"],
    excerpt:
      "Sagging is downward hull deformation at midships. It appears when most cargo weight sits centrally, increasing underwater volume — and leading to understated cargo weight if uncorrected.",
    readTime: "4 min read",
    coverImage: coverSagging,
    sketch: (
      <svg
        viewBox="0 0 640 200"
        className="w-full"
        aria-label="Vessel sagging — hull bent downward at midships"
      >
        {/* Water */}
        <rect x="0" y="110" width="640" height="90" fill="#e0f2fe" opacity="0.6" />
        {/* Waterline */}
        <line x1="0" y1="110" x2="640" y2="110" stroke="#0A6FAE" strokeWidth="1.5" strokeDasharray="8 4" />
        <text x="8" y="106" fontSize="10" fill="#0A6FAE" fontFamily="monospace">Waterline</text>
        {/* Even-keel reference */}
        <line x1="60" y1="95" x2="580" y2="95" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
        <text x="590" y="99" fontSize="9" fill="#94a3b8" fontFamily="monospace">Even keel</text>
        {/* Sagged hull — keel dips DOWN at midships */}
        <path
          d="M 60,92 Q 320,118 580,92 L 580,110 Q 320,110 60,110 Z"
          fill="#f0f9ff"
          stroke="#062B4F"
          strokeWidth="2.5"
        />
        {/* Draft marks */}
        <line x1="60" y1="90" x2="60" y2="130" stroke="#E4572E" strokeWidth="2" />
        <text x="30" y="108" fontSize="10" fill="#E4572E" fontFamily="monospace">dF</text>
        <line x1="580" y1="90" x2="580" y2="130" stroke="#E4572E" strokeWidth="2" />
        <text x="584" y="108" fontSize="10" fill="#E4572E" fontFamily="monospace">dA</text>
        <line x1="320" y1="116" x2="320" y2="135" stroke="#007A8A" strokeWidth="2" />
        <text x="324" y="132" fontSize="10" fill="#007A8A" fontFamily="monospace">dM</text>
        {/* Sag annotation */}
        <defs>
          <marker id="arrd" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
            <path d="M0,0 L3,6 L6,0 Z" fill="#E4572E" />
          </marker>
        </defs>
        <line x1="320" y1="96" x2="320" y2="112" stroke="#E4572E" strokeWidth="2" markerEnd="url(#arrd)" />
        <text x="270" y="94" fontSize="10" fill="#E4572E" fontFamily="monospace">Sag (hull drops)</text>
        {/* Weight distribution */}
        <rect x="230" y="72" width="180" height="14" rx="2" fill="#062B4F" opacity="0.6" />
        <text x="320" y="82" fontSize="9" fill="white" fontFamily="monospace" textAnchor="middle">Heavy Central Load</text>
        {/* Label */}
        <text x="320" y="175" fontSize="11" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          Sagging: dM greater than Mean of (dF + dA) / 2
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Sagging is a common hull deformation that shows up when a vessel carries most of its weight amidships. The
          hull bends downward in the middle, forming a concave shape. Think of a beam resting on supports at both ends
          with a heavy load placed at the centre — ships behave in a similar way when their central holds carry more
          weight than the bow or stern.
        </p>
        <h2>How to Recognise Sagging</h2>
        <p>
          In a draft survey, sagging becomes clear when the midships draft is <strong>greater</strong> than the
          arithmetic mean of the forward and aft drafts:
        </p>
        <blockquote>
          <strong>Sagging condition: dM is greater than (dF + dA) / 2</strong>
        </blockquote>
        <p>
          Because sagging increases the underwater volume of the hull, it also increases the vessel's displacement. If
          left uncorrected, this leads to an <strong>understated cargo weight</strong> — the survey will show less
          cargo than was actually loaded.
        </p>
        <h2>Correcting for Sagging</h2>
        <p>
          To correct for sagging, surveyors use a representative mean draft rather than a simple arithmetic mean. For
          most conventional ships, the <strong>three-quarter mean draft</strong> is applied because it gives more
          weight to the midships reading:
        </p>
        <blockquote>
          <strong>Three-quarter mean = (dF + 6 x dM + dA) / 8</strong>
        </blockquote>
        <p>
          Large box-shaped vessels such as Panamax and Cape Size carriers may have{" "}
          <strong>dedicated deflection correction tables</strong> provided by the classification society. These tools
          give the correction directly in tonnes and are especially important when heavy central loading creates a
          "double sag" — a condition that the standard three-point method cannot capture accurately.
        </p>
        <h2>Why Sagging Is Commonly Overlooked</h2>
        <p>
          Sagging is most pronounced when central holds are heavily loaded, but the hull looks normal from the
          outside. Unlike visible damage, hull deflection is silent and incremental. Surveyors who rely on the simple
          mean of forward and aft drafts — ignoring the midships reading — will consistently understate cargo on
          vessels with central loading patterns.
        </p>
        <h2>Summary</h2>
        <p>
          When the midships draft reads higher than expected, suspect sagging. Apply the three-quarter mean, and check
          whether the vessel class provides a deflection correction table. Detecting sagging early and applying the
          right correction is essential for reliable displacement calculations — especially on bulk carriers with
          concentrated cargo in central holds.
        </p>
      </div>
    ),
  },

  // ── Article 7 ────────────────────────────────────────────────────────────────
  {
    slug: "light-ship-weight-draft-survey",
    title: "Light Ship Weight: The Fixed Foundation of Every Draft Survey",
    author: "Sebastian Muoka",
    date: "19 March 2019",
    dateIso: "2019-03-19",
    cats: ["Draft Survey", "Hydrostatics", "Marine Surveying", "Cargo Measurement"],
    excerpt:
      "Light Ship Weight is the vessel as built — without cargo, ballast, fuel, water or stores. It is the immovable foundation of every displacement calculation and must be correctly applied before any density corrections are made.",
    readTime: "5 min read",
    coverImage: coverLightship,
    sketch: (
      <svg
        viewBox="0 0 640 210"
        className="w-full"
        aria-label="Light ship weight decomposition diagram"
      >
        {/* Displacement outer box */}
        <rect x="20" y="20" width="600" height="50" rx="6" fill="#e0f2fe" stroke="#0A6FAE" strokeWidth="2" />
        <text x="320" y="50" fontSize="13" fill="#0A6FAE" fontFamily="monospace" textAnchor="middle" fontWeight="bold">
          DISPLACEMENT
        </text>
        {/* Equals sign */}
        <text x="320" y="90" fontSize="18" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">=</text>
        {/* Light ship box */}
        <rect x="20" y="100" width="180" height="55" rx="6" fill="#f0fafa" stroke="#007A8A" strokeWidth="2" />
        <text x="110" y="124" fontSize="12" fill="#007A8A" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Light Ship</text>
        <text x="110" y="140" fontSize="10" fill="#007A8A" fontFamily="monospace" textAnchor="middle">Weight (LSW)</text>
        {/* Plus */}
        <text x="220" y="133" fontSize="20" fill="#062B4F" fontFamily="monospace" textAnchor="middle" fontWeight="bold">+</text>
        {/* Deadweight box */}
        <rect x="245" y="100" width="375" height="55" rx="6" fill="#fff7ed" stroke="#E4572E" strokeWidth="2" />
        <text x="432" y="124" fontSize="12" fill="#E4572E" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Deadweight</text>
        <text x="432" y="140" fontSize="9" fill="#E4572E" fontFamily="monospace" textAnchor="middle">
          Cargo + Fuel + Ballast + Water + Stores
        </text>
        {/* Constant note */}
        <rect x="20" y="170" width="600" height="30" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1" />
        <text x="320" y="189" fontSize="10" fill="#854d0e" fontFamily="monospace" textAnchor="middle">
          Constant = LSW (survey) - LSW (last inclining) — recalculate every survey
        </text>
      </svg>
    ),
    body: (
      <div className="prose prose-slate max-w-none">
        <p>
          Light Ship Weight (LSW) is the vessel as built: fully equipped but without cargo, ballast, fuel, fresh water
          or stores. It includes the hull, machinery, accommodation, permanent fittings, spare parts, boiler water and
          engine lubricants. Because these components are fixed, the Light Ship Weight forms the baseline for all
          displacement calculations in every draft survey.
        </p>
        <h2>The Role of Light Ship Weight in Displacement</h2>
        <p>Displacement equals Light Ship Weight plus everything else on board at the time of the survey:</p>
        <blockquote>
          <strong>Displacement = Light Ship Weight + Deadweight</strong>
        </blockquote>
        <p>
          Deadweight includes cargo, fuel, ballast, fresh water, stores and crew effects — everything that changes
          voyage to voyage. Light Ship Weight does not change (except slowly, over years, due to accumulated paint,
          rust, modifications and additions).
        </p>
        <h2>Why This Matters When Applying Corrections</h2>
        <p>
          When a vessel's tables show only a deadweight scale — which some older ships carry — the surveyor must{" "}
          <strong>add the Light Ship Weight back</strong> before applying density corrections. Density corrections
          must always be applied to displacement. Applying them to deadweight alone omits the light ship portion and
          introduces a significant error in the corrected displacement figure.
        </p>
        <p>
          This is one of the most common errors in practice, and one that is entirely avoidable once the distinction
          is understood.
        </p>
        <h2>The Constant</h2>
        <p>
          The Constant represents all unknown weights on board — accumulated paint, rust, silt in the bilges, extra
          equipment added over time. Since a ship gets heavier over its life, the Constant grows. It is calculated at
          each survey by comparing the current Light Ship Weight (derived from the survey displacement) with the
          declared Light Ship Weight from the last inclining experiment:
        </p>
        <blockquote>
          <strong>Constant = Derived LSW (survey) - Declared LSW (last inclining)</strong>
        </blockquote>
        <p>
          The Constant must be recalculated fresh at each survey. Using a Constant carried forward from a previous
          survey introduces accumulated error, especially if the ship has had structural work, tank modifications or
          added permanent equipment since the last inclining.
        </p>
        <h2>Summary</h2>
        <p>
          Light Ship Weight is fixed, fundamental and frequently mishandled. Know the declared value from the vessel's
          documents. Confirm that the hydrostatic tables are displacement-based or deadweight-based. Apply the Light
          Ship Weight wherever needed. Recalculate the Constant at every survey. A clear understanding of Light Ship
          Weight keeps draft surveys accurate from the first loading to the last.
        </p>
      </div>
    ),
  },
];
