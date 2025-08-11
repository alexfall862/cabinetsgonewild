import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { DoorOpen, Clapperboard, Clock, Wrench, Video, XCircle, Shield, Check, Crown, Zap, Lock, Play } from "lucide-react";

const tiers = [
  {
    name: "Drawer Tease",
    price: "$3.99",
    period: "/mo",
    highlights: [
      "480p slow-close highlights",
      "Algorithmic sawdust recommendations",
      "1 profile (hinge-curious)",
    ],
    cta: "Start 7‑Day Trial",
  },
  {
    name: "Soft‑Close Plus",
    price: "$9.99",
    period: "/mo",
    highlights: [
      "1080p hinge-cam live feeds",
      "Unlimited cabinet categories",
      "3 profiles + parental locks (for doors)",
    ],
    cta: "Go Soft‑Close",
    featured: true,
  },
  {
    name: "Hinge Lord Ultra",
    price: "$29.99",
    period: "/mo",
    highlights: [
      "4K grain-counter documentaries",
      "After-hours joinery ASMR",
      "VIP early access to new… shelves",
    ],
    cta: "Ascend to Ultra",
  },
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Card({ children, style }) {
  return <div className="card" style={style}>{children}</div>;
}

function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "1rem" }}>
      <h3 className="title" style={{ fontSize: "2rem" }}>{title}</h3>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
}

function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="section" style={{ background: "radial-gradient(60% 60% at 50% 0%, #e2e8f0 0%, transparent 60%)" }}>
      <div className="container">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="row">
            <div className="card" style={{ width: 40, height: 40, display: "grid", placeItems: "center", borderRadius: 14, background: "#fff" }}>
              <DoorOpen size={22} />
            </div>
            <div>
              <h1 style={{ margin: 0, fontWeight: 900, fontSize: 22 }}>
                Cabinets <span style={{ color: "#64748b" }}>Gone</span> Wild <span style={{ color: "#94a3b8" }}>Max+</span>
              </h1>
              <p className="small" style={{ marginTop: -4 }}>Where storage gets… tastefully steamy™</p>
            </div>
          </div>
          <Badge>Now in 4K Grain™</Badge>
        </div>

        <div className="grid hero-grid" style={{ marginTop: 40, alignItems: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="title">Your number one destination for <span style={{ textDecoration: "underline wavy", textDecorationColor: "#f59e0b" }}>hinge‑forward</span> entertainment.</h2>
            <p className="subtitle" style={{ marginTop: 12 }}>From soft‑close romances to high‑octane drawer chases, binge a universe of cabinet cinema curated for makers, fans, and the tasteful hinge‑enthusiast.</p>
            <div className="row" style={{ marginTop: 18 }}>
              <button className="btn"><Play size={18} style={{ marginRight: 8 }} /> Start 7‑Day Trial (auto‑renews hourly)</button>
              <button className="btn secondary" onClick={() => setShowModal(true)}><XCircle size={18} style={{ marginRight: 8 }} /> Cancel Subscription</button>
            </div>
            <p className="small" style={{ marginTop: 8 }}>*Time is a flat door. Terms of Endless Love™ apply.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="card" style={{ overflow: "hidden" }}>
              <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} style={{ aspectRatio: "16/9", position: "relative", background: "linear-gradient(135deg,#f1f5f9,#e2e8f0)" }}>
                    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#334155", textAlign: "center" }}>
                      <Clapperboard size={24} />
                      <div className="small" style={{ marginTop: 4 }}>Cabinet Clip {i + 1}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: "1px solid var(--border)", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "#475569", fontSize: 14 }}>
                <div className="kv"><Clock size={16} /> Live: 24/7 Hinge‑Cam</div>
                <div className="kv"><Wrench size={16} /> Workshop Mode</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3 style={{ marginTop: 0 }}>Cancel Subscription</h3>
            <p className="subtitle">We tried to cancel your subscription but the doors jammed slightly. Happens. Would you like to try a <strong>complimentary upgrade</strong> while we oil the hinges?</p>
            <div className="card" style={{ padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div className="row">
                <Shield size={18} />
                <div>
                  <div style={{ fontWeight: 600 }}>Enhance to Soft‑Close Plus</div>
                  <div className="small">Free for the next 0.3 days*</div>
                </div>
              </div>
              <input type="checkbox" defaultChecked aria-label="Enhance" />
            </div>
            <div className="row" style={{ justifyContent: "flex-end", marginTop: 12 }}>
              <button className="btn">Accept Enhancement</button>
              <button className="btn secondary" onClick={() => setShowModal(false)}>I’ll Think About It</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function Features() {
  const items = useMemo(() => ([
    { icon: <Lock size={18} />, title: "Privacy First", desc: "Incognito ‘Do Not Disturb’ sanding mode. We never log your hinge preferences.*" },
    { icon: <Zap size={18} />, title: "Adaptive Bitrate", desc: "From 144p to 4K Grain™, our footage matches your bandwidth and your soul." },
    { icon: <Check size={18} />, title: "Certified Tasteful", desc: "Every title reviewed by a panel of cabinet makers and one very patient ethicist." },
    { icon: <DoorOpen size={18} />, title: "Door Lore", desc: "Deep‑cut docs on joinery history, mythical pantries, and famous squeaks." },
    { icon: <Video size={18} />, title: "Hinge‑Cam+ Channels", desc: "Niche live streams: Corner Lazy Susans, Handle Close‑ups, and Drawer POV." },
    { icon: <Shield size={18} />, title: "Household‑Safe", desc: "Flexible content controls. Parental locks that actually lock." },
  ]), []);

  return (
    <section className="section" style={{ background: "#f1f5f9", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center" }}>
          <Badge>What’s Inside</Badge>
          <h3 className="title" style={{ fontSize: "2rem" }}>Built for makers. Adored by fans. Mildly concerning to landlords.</h3>
          <p className="subtitle">Everything you need to enjoy the fine art of cabinetry—responsibly.</p>
        </div>
        <div className="grid" style={{ marginTop: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
          {items.map((f) => (
            <Card key={f.title} style={{ padding: 16 }}>
              <div className="row">
                <div className="card" style={{ padding: 8, borderRadius: 12, background: "#fff" }}>{f.icon}</div>
                <div>
                  <div style={{ fontWeight: 700 }}>{f.title}</div>
                  <div className="subtitle">{f.desc}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="small" style={{ marginTop: 8 }}>*We absolutely log your preferences to recommend more cabinets.</p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <SectionTitle title="Choose your plan" subtitle="All plans come with unlimited cabinet puns and 0% chance to successfully unsubscribe." />
        <div className="grid pricing">
          {tiers.map((t) => (
            <Card key={t.name} style={{ padding: 16, outline: t.featured ? "2px solid #fcd34d" : "none" }}>
              {t.featured && <div style={{ textAlign: "center", marginTop: -26 }}><Badge>Most Popular</Badge></div>}
              <div className="row" style={{ alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{t.name}</div>
              </div>
              <div className="row" style={{ alignItems: "baseline", marginTop: 8 }}>
                <div style={{ fontSize: 34, fontWeight: 800 }}>{t.price}</div>
                <div className="subtitle">{t.period}</div>
              </div>
              <ul className="list">
                {t.highlights.map((h) => (
                  <li key={h}><Check size={16} style={{ marginTop: 2 }} /> {h}</li>
                ))}
              </ul>
              <div style={{ marginTop: 12 }}><button className="btn" style={{ width: "100%" }}>{t.cta}</button></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogTabs() {
  const [tab, setTab] = useState("catalog");
  const titles = ["Soft‑Close: The Musical","Drawers, Openly","The Plywood Identity","Cabinet Noir","Handle With Care","Shelf Discovery"];
  return (
    <section className="section">
      <div className="container">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="tabs">
            <button className={"tab " + (tab === "catalog" ? "active" : "")} onClick={() => setTab("catalog")}>Catalog</button>
            <button className={"tab " + (tab === "live" ? "active" : "")} onClick={() => setTab("live")}>Live</button>
            <button className={"tab " + (tab === "behind" ? "active" : "")} onClick={() => setTab("behind")}>Behind the Doors</button>
          </div>
          <div className="small">Handpicked for you: “Fifty Shades of Greige: A Paint Journey”</div>
        </div>

        {tab === "catalog" && (
          <div className="grid catalog" style={{ marginTop: 16 }}>
            {titles.map((t, i) => (
              <Card key={t}>
                <div style={{ aspectRatio: "16/9", background: "linear-gradient(135deg,#f1f5f9,#e2e8f0)", display: "grid", placeItems: "center", color: "#334155" }}>
                  <Clapperboard size={26} />
                </div>
                <div style={{ padding: 14 }}>
                  <div style={{ fontWeight: 700 }}>{t}</div>
                  <div className="small">Runtime: {88 + i} min • Rating: G for Grain</div>
                  <div style={{ marginTop: 8 }}><button className="btn" style={{ width: "100%" }}><Play size={16} style={{ marginRight: 6 }} /> Play</button></div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {tab === "live" && (
          <Card>
            <div style={{ padding: 16 }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>Hinge‑Cam: Live</div>
              <div className="small">It opens. It closes. It contemplates. So do you.</div>
              <div style={{ marginTop: 12, aspectRatio: "16/7", borderRadius: 14, border: "1px solid var(--border)", background: "#f1f5f9", display: "grid", placeItems: "center", color: "#334155" }}>
                <Video size={20} /> Live stream placeholder
              </div>
            </div>
          </Card>
        )}

        {tab === "behind" && (
          <div className="grid" style={{ marginTop: 16, gridTemplateColumns: "1fr", gap: "1rem" }}>
            <Card><div style={{ padding: 16, fontStyle: "italic" }}>“Finally, a service that understands the raw pathos of a well‑aligned face frame.” <div className="small" style={{ marginTop: 6 }}>— Avery P., Finish Carpenter</div></div></Card>
            <Card><div style={{ padding: 16, fontStyle: "italic" }}>“The 4K Grain™ changed my life. I can count knots from across the room.” <div className="small" style={{ marginTop: 6 }}>— Sam R., Shop Teacher</div></div></Card>
          </div>
        )}
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section" style={{ background: "#f1f5f9", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <SectionTitle title="Frequently Asked (and Carefully Answered) Questions" />
        <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "1rem" }}>
          {[
            ["Is this for cabinet makers or cabinet… appreciators?", "Yes. We serve pros, hobbyists, and the incurably hinge‑curious. Our catalog ranges from shop‑class fundamentals to poetic slow‑close cinema."],
            ["Can I cancel anytime?", "Absolutely! Simply locate the big red “Cancel” button, which will confidently guide you to a tasteful enhancement pathway that looks suspiciously like… not canceling."],
            ["Is the content… safe for work?", "Our content is SFW with a wink. Expect wood, hardware, and the occasional lingering shot of a dovetail joint. No explicit content—just extremely photogenic storage."],
            ["Do you really have a 24/7 Hinge‑Cam?", "Yes. It’s a door. That opens. And closes. Endlessly. It’s oddly calming and raises many philosophical questions about purpose and squeaks."],
          ].map(([q, a]) => (
            <Card key={q}><div style={{ padding: 16 }}><div style={{ fontWeight: 700 }}>{q}</div><div className="subtitle" style={{ marginTop: 6 }}>{a}</div></div></Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
        <div>
          <div className="row">
            <div className="card" style={{ width: 32, height: 32, display: "grid", placeItems: "center", borderRadius: 10, background: "#fff" }}>
              <DoorOpen size={18} />
            </div>
            <strong>Cabinets Gone Wild Max+</strong>
          </div>
          <p className="small">© {new Date().getFullYear()} Cabinetry Media Group, LLC Probably. All rights reserved and softly closed.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} style={{ justifySelf: "end", maxWidth: 420, width: "100%" }}>
          <label className="small">Get tasteful updates in your inbox</label>
          <div className="row">
            <input type="email" placeholder="you@pantrymail.com" />
            <button className="btn" type="submit">Subscribe</button>
          </div>
          <p className="small">By subscribing, you agree to receive 1 (one) tasteful email per day forever.</p>
        </form>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Hero />
      <Features />
      <CatalogTabs />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
