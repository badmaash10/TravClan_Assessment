# TravClan Founder's Office — Task Assessment

> **🌐 Live Site:** [https://badmaash10.github.io/TravClan_Assessment/](https://badmaash10.github.io/TravClan_Assessment/)

**Submitted by:** Charchit Sahay · March 2026

---

An interactive web application presenting data-driven solutions to three business strategy questions for TravClan's Founder's Office Associate role. Every dashboard metric is backed by verified, real-world data with cited sources.

---

## 📋 Assessment Questions

### Q1 — Bestseller Holiday Package for Indian Travelers
Design a destination, experience, and pricing strategy for a bestseller international travel package.

**Answer:** *Thailand Bliss: Bangkok + Phuket (6N/7D)* — priced at ₹54,999/person (twin share), targeting metro couples aged 25–38.

### Q2 — Starting a Hotel in India Under ₹20 Lakhs
Identify the where, how, and financial viability of a budget hotel venture.

**Answer:** *Boutique Heritage Guesthouse in Varanasi* — 6-room leased property, ₹16.9L total CapEx, ~16-month payback period.

### Q3 — Fixing Hotel Confirmation TAT (30-Day Plan)
Create an action plan to fix a 25% booking confirmation miss rate.

**Answer:** *30-Day Turnaround Plan* — diagnose → fix suppliers → fix internals → measure. Target: <8% miss rate by Day 30.

---

## 📊 Data Sources & Verification

All figures displayed in the dashboards are sourced from verified, publicly available data:

### Thailand Tourism (Q1)
| Data Point | Value | Source |
|---|---|---|
| Indian arrivals in Thailand (2025) | **2,487,319** (+16.8% YoY) | [Tourism Authority of Thailand (TAT)](https://www.tourismthailand.org) |
| India's rank as Thailand source market | **#3** globally | [TAT / Xinhua News](https://english.news.cn) |
| Visa-free policy for Indians | **60-day** exemption (since Feb 2026) | [Royal Thai Embassy](https://www.thaiembassy.org) |
| Tourism receipts from Indian visitors | **93,862M Baht** (2025) | [Thailand Ministry of Tourism & Sports](https://www.mots.go.th) |
| Round-trip airfare (Delhi/Mumbai → Bangkok) | **₹15,000–35,000** economy | [Air India](https://www.airindia.com), travel aggregators |
| 4-star hotel ADR (Bangkok / Phuket) | **₹3,500–7,000/night** | [Booking.com](https://www.booking.com), [Agoda](https://www.agoda.com) |

### Varanasi Hotel Market (Q2)
| Data Point | Value | Source |
|---|---|---|
| Annual tourist footfall (2024) | **110 million+** | [UP Tourism Department](https://uptourism.gov.in) |
| Foreign tourist arrivals (2024) | **309,932** | [UP Tourism Dept / Varanasi Tourism](https://varanasi-tourism.in) |
| Foreign tourist growth post-KV Corridor | **120x** since 2021 | [Organiser](https://organiser.org) |
| OTA commission — Booking.com | **15–25%** | [SiteMinder](https://www.siteminder.com), [Booking.com Partner](https://partner.booking.com) |
| OTA commission — Airbnb | **15.5%** (host-only) | [Airbnb Help Center](https://www.airbnb.com/help/article/1857) |
| OTA commission — MakeMyTrip | **18–22%** avg | [MakeMyTrip Investor Filings](https://www.makemytrip.com) |

### TAT & Hotel Operations (Q3)
| Data Point | Value | Source |
|---|---|---|
| Automated PMS confirmation time | **Instant to 30 min** | [SiteMinder](https://www.siteminder.com), Phocuswright Reports |
| Manual property confirmation SLA | **Up to 24 hours** | [Booking.com Partner Guidelines](https://partner.booking.com) |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| Charts | Recharts |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages via GitHub Actions |

---

## 🚀 Running Locally

```bash
cd travclan-app
npm install
npm run dev
```

Open [http://localhost:5173/TravClan_Assessment/](http://localhost:5173/TravClan_Assessment/) in your browser.

---

## 📁 Project Structure

```
TravClan_Assessment/
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── TravClan_Assessment_CharchitSahay.md  # Written assessment
├── travclan-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero.tsx           # Landing section
│   │   │   ├── Q1Thailand.tsx     # Thailand package strategy
│   │   │   ├── Q2Hotel.tsx        # Hotel business plan
│   │   │   ├── Q3TATFix.tsx       # TAT fix action plan
│   │   │   ├── DataSources.tsx    # Reusable citation footer
│   │   │   ├── Navbar.tsx         # Navigation
│   │   │   ├── Closing.tsx        # Footer / sign-off
│   │   │   └── ...
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── vite.config.ts
│   └── package.json
└── README.md
```

---

**— Charchit Sahay**
