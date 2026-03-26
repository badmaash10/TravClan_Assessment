# 🚀 PROMPT: TravClan Founder's Office — Interactive Assessment Experience Website

---

## OVERVIEW & VISION

Build a **stunning, immersive single-page web experience** for a travel industry task assessment by Charchit Sahay for TravClan's Founder's Office role. This is NOT a boring document viewer — it is a **premium interactive presentation** that feels like a mix between a product demo, a data dashboard, and a storytelling experience.

**Design Language:** Think Airbnb meets Linear meets Stripe — clean, editorial, with moments of delight. Dark/light mode, rich micro-animations, smooth transitions, and "wow" reveals. Use Stitch MCP for visual design inspiration, component patterns, and color palette.

**Stack:** React + Tailwind CSS + Framer Motion (or GSAP for transitions) + Recharts (for data visualizations)

---

## STRUCTURAL ARCHITECTURE

### Global Layout
- Full-screen hero with particle or gradient animation background (ocean blues + golden hour oranges — travel palette)
- Sticky top nav with progress indicator (dots or horizontal line showing which section the user is in)
- All 3 questions (Q1, Q2, Q3) accessible from the nav
- Footer with "Made by Charchit Sahay — TravClan Founder's Office Assessment"

### Navigation Flow
```
HERO → Q1 (Thailand Package) → Q2 (Hotel Startup) → Q3 (TAT Fix) → CLOSING CARD
```
Each section is a **full-screen panel** that the user scrolls or navigates into. Within each section, there is a **TASK → REVEAL** interaction pattern (see below).

---

## CORE INTERACTION PATTERN: "TASK → REVEAL"

Every question follows this two-stage reveal:

**Stage 1 — THE TASK (shown first)**
- Display the question prompt in large, beautiful typography
- Minimal UI — just the question text, a subtle animated background, and a single CTA button
- Button text options: "See the Strategy →", "Unlock the Analysis →", "Reveal the Plan →"
- Add a small animated hint (e.g., glowing pulse on the button, or a subtle scroll indicator)

**Stage 2 — THE ANSWER (revealed on click)**
- Smooth animated transition — cards fly in, data counters animate, sections cascade in with staggered delays
- Full interactive content (see per-question specs below)
- A "Back to Question" ghost button at the top

---

## Q1: THAILAND PACKAGE — "THE DESTINATION EXPERIENCE"

### Stage 1 — Task Card
Full-screen with a beautiful Thailand background (use CSS gradient or subtle SVG landscape — temple silhouette at sunset, or ocean waves). Display: *"Design a bestseller holiday package for Indian travelers. What's the destination, the experience, and the price?"*

### Stage 2 — The Reveal

#### 2a. DESTINATION CARD GRID (Experience Selector)
Show two large, clickable destination cards side by side:

```
┌─────────────────────┐  ┌─────────────────────┐
│  🌆 LAVISH ESCAPE   │  │  ✈️ BUDGET EXPLORER  │
│  Bangkok + Phuket   │  │  Bangkok + Phuket    │
│  ₹54,999/person     │  │  ₹49,999/person      │
│  [Hover for glow]   │  │  [Hover for glow]    │
└─────────────────────┘  └─────────────────────┘
```

Each card has:
- A tag: `BESTSELLER 🔥` or `EARLY BIRD ⚡`
- Destination name + sub-headline
- Price badge (animated counter on reveal)
- "View Full Package →" button

#### 2b. ON CARD CLICK — SECRET REVEAL ANIMATION 🎉
When user clicks a destination card, trigger a **flip animation or expand animation** to reveal:

**Hidden inside the card (the "secret"):**
- 7-day itinerary as a visual timeline (horizontal scroll, day-by-day cards with emoji icons)
- Package price breakdown as an **animated donut chart** (Recharts) — showing Flights / Hotels / Tours / Transfers proportions
- 3 KPI badges that animate in one by one:
  - `✈️ 4–5 hrs flight time`
  - `🏨 4-Star Beachfront`
  - `📸 Phi Phi Islands — Social Media Gold`

#### 2c. WHY IT'S A BESTSELLER — Animated Stat Counters
After destination reveal, animate in 5 reason cards:
```
2M+ Indian visitors → Visa-Free → ₹54,999 price sweet spot → Nov–Feb Best Season → 2-city formula
```
Each card slides in with a staggered 150ms delay.

#### 2d. MINI DASHBOARD — "The Numbers"
A small data panel showing:
- Animated counter: `2,000,000+ Indian visitors to Thailand in 2025`
- Progress bar: `Search Rank #3 globally for Indian travelers`
- Price comparison bar chart: TravClan package vs competitor estimate

---

## Q2: HOTEL STARTUP — "THE INVESTMENT DASHBOARD"

### Stage 1 — Task Card
Clean, warm saffron/ochre palette (India heritage feel). Text: *"Start a hotel in India for under ₹20 Lakhs. Where, how, and will it make money?"*

### Stage 2 — The Reveal

#### 2a. LOCATION REVEAL CARD
A stylized India map or Varanasi ghat illustration (SVG) with an animated pin dropping on Varanasi, followed by a popup with stats:
- `7–8M tourists/year`
- `75–85% OTA occupancy`
- `Low competition (fragmented supply)`

#### 2b. CAPEX BREAKDOWN — Animated Stacked Bar / Treemap
Show all budget items as an **interactive treemap or horizontal bar chart**:
- Each category is a colored block that the user can hover to see the exact amount and description
- Total animates from ₹0 → ₹16,90,000 with a green "Under Budget! ₹3.1L saved" badge at the end

#### 2c. P&L PROJECTIONS — The Wow Chart
Animated line/area chart (Recharts) showing:
- Year 1 revenue curve (conservative 65% occupancy)
- Year 2 revenue curve (75% occupancy)
- Break-even line marked with a dotted horizontal line
- Animated annotation: `📍 Payback at Month 16`

#### 2d. SECRET TIPS — "The Insider Cards" 🃏
Below the financial data, 4 face-down cards. User clicks each to flip and reveal a success factor:
```
Card 1 (flipped): 🌅 Ghat-View Rooftop = 30–40% rate premium
Card 2 (flipped): 📷 Professional photos → 25–30% CTR boost
Card 3 (flipped): 🍳 Breakfast inclusion = above budget, below luxury
Card 4 (flipped): ⭐ First 20 reviews = long-term OTA ranking
```
Each flip should have a satisfying card-flip CSS/Framer animation.

#### 2e. KPI TICKER (Live-Feel Stats)
A horizontal auto-scrolling ticker (like a stock ticker) at the bottom of the section:
```
₹12,74,364 NET ANNUAL PROFIT  •  16 MONTHS PAYBACK  •  6 ROOMS  •  65% OCCUPANCY  •  ₹1,500 ADR  •  ...
```

---

## Q3: TAT FIX — "THE 30-DAY WAR ROOM"

### Stage 1 — Task Card
Dark, urgent palette (deep navy + red accent). Text: *"25% of hotel bookings are missing confirmation deadlines. Fix it. 30 days. Go."*

### Stage 2 — The Reveal

#### 2a. PROBLEM DIAGNOSIS — Three-Layer Reveal
Three cards representing the root cause layers (Process / System / Supplier) animate in like a cascade, each with:
- Layer name + icon
- Root cause
- "How to verify" text that fades in on hover

#### 2b. 30-DAY TIMELINE — Interactive Gantt-Style View
A horizontal timeline split into 4 weeks. Each week is a distinct color band.
- Clicking a week expands to show daily actions as a vertical list of task cards
- Each task card has a small checkbox animation (purely visual — satisfying UX)
- Week labels: `⚡ Diagnose & Define` → `🏨 Fix Suppliers` → `🔧 Fix Internals` → `📊 Measure & Lock`

#### 2c. BEFORE / AFTER KPI DASHBOARD — The Hero Moment
**This is the most visually dramatic section.** Show a 2-column layout:

```
BEFORE                    AFTER
──────────────────────    ──────────────────────
TAT Miss Rate: 25%   →   TAT Miss Rate: <8%
Avg Confirm Time: ?  →   <3 Hours
Complaints: HIGH     →   ↓ 60–70%
Auto-confirm: 0      →   30 Hotels Enrolled
```

Animate each row with a left-to-right sweep, where the "AFTER" numbers count up dramatically. Use red → green color transitions. Add a confetti burst (very subtle) when all four rows have revealed.

#### 2d. KEY PRINCIPLE — Callout Card
Large, bold, centered quote card with a subtle gradient border:
> *"Don't over-engineer. SLA + Tracker + Better Suppliers = the fix. Process, not tech, moves the needle in 30 days."*

Add a "Copy this principle" micro-interaction on click (clipboard copy with a toast notification).

---

## GLOBAL DESIGN TOKENS (for Stitch MCP)

```
Primary Brand: TravClan Orange → #FF6B35
Accent: Deep Ocean Blue → #0A2463
Background (dark): #0D1117
Background (light): #F8F9FA
Surface Card: rgba(255,255,255,0.05) [glassmorphism]
Text Primary: #FFFFFF / #1A1A2E
Text Secondary: #A0AEC0
Success Green: #48BB78
Danger Red: #FC8181
Gold Highlight: #F6C90E

Typography:
  Display: 'Syne' or 'Space Grotesk' (bold, editorial)
  Body: 'Inter' or 'DM Sans'
  Numbers/Data: 'JetBrains Mono' (monospace for KPIs)

Radius: 16px cards, 8px inputs
Shadows: 0 8px 32px rgba(0,0,0,0.3) for elevated cards
```

---

## ANIMATION SPECS

| Element | Animation | Duration | Easing |
|---|---|---|---|
| Section entrance | Fade + slide up | 600ms | ease-out |
| Card stagger | Cascade (150ms between) | 400ms each | spring |
| Counter numbers | Count up from 0 | 1200ms | ease-in-out |
| Card flip (secrets) | CSS 3D rotateY | 500ms | ease |
| Chart lines draw | Stroke dashoffset | 1000ms | ease-in-out |
| Before/After rows | Left sweep reveal | 300ms stagger | ease |
| Confetti | Burst + gravity fall | 2000ms | ease-out |

---

## RESPONSIVE BEHAVIOR
- **Desktop:** Full two-column layouts, side-by-side cards, full charts
- **Tablet:** Single column, stacked cards, charts scale down
- **Mobile:** Vertical timeline for Q3, swipeable card carousels for destination cards

---

## EASTER EGGS & DELIGHT MOMENTS 🥚

1. **Konami Code** → Triggers a full-screen "You found the secret!" animation with Charchit's thank-you message
2. **Q1 Phi Phi Islands card** → On hover, plays a subtle ocean wave CSS animation
3. **Q2 Varanasi** → On the map pin drop, a tiny animated diya (lamp) flickers
4. **Q3 Confetti** → Only triggers if user has viewed all 4 before/after KPIs in sequence
5. **Progress bar at top** → When user reaches the final closing card, it fills completely and pulses gold

---

## CLOSING CARD

Full-screen card with:
- Gradient background (orange → blue diagonal)
- Large text: *"That's the full picture."*
- Sub-text: *"3 questions. Real thinking. Built to ship."*
- Name: **Charchit Sahay — Founder's Office Candidate**
- CTA button: **"Back to the beginning ↑"** (smooth scroll to top)

---

## DELIVERABLE CHECKLIST

- [ ] Single-page React app (or vanilla HTML/JS if preferred)
- [ ] All 3 questions with Task → Reveal pattern
- [ ] Q1: Destination cards with flip reveal + donut chart
- [ ] Q2: Capex treemap + P&L chart + flip secret cards + KPI ticker
- [ ] Q3: 30-day Gantt timeline + Before/After KPI dashboard + confetti
- [ ] Smooth scroll between sections
- [ ] Global progress indicator in nav
- [ ] Responsive (mobile + desktop)
- [ ] At least 3 easter egg moments
- [ ] Dark mode default

---

*This prompt is for Antigravity IDE development with Stitch MCP for design inspiration. The .md file with all data content is provided separately as `TravClan_Assessment_CharchitSahay.md`.*
