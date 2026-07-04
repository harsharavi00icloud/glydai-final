"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
// ─── Types ───────────────────────────────────────────────────────────────────

type FormData = {
  role: string;
  teamSize: string;
  monthlyLeads: number;
  biggestPain: string;
  currentTools: string[];
  name: string;
  email: string;
  phone: string;
};

// ─── Constants ────────────────────────────────────────────────────────────────

const STEPS = 5;

const ROLES = [
  { id: "solo", label: "Solo Agent", icon: "◈" },
  { id: "team-lead", label: "Team Lead", icon: "◎" },
  { id: "broker-owner", label: "Broker / Owner", icon: "◉" },
];

const TEAM_SIZES: Record<string, string[]> = {
  solo: ["Just me"],
  "team-lead": ["2–5 agents", "6–10 agents"],
  "broker-owner": ["2–5 agents", "6–10 agents", "11–20 agents", "20+ agents"],
};

const PAIN_POINTS = [
  {
    id: "speed-to-lead",
    label: "Leads go cold before I respond",
    sub: "Speed to lead",
    icon: "⚡",
  },
  {
    id: "lead-quality",
    label: "Too many tire-kickers wasting my time",
    sub: "Lead qualification",
    icon: "🎯",
  },
  {
    id: "social-presence",
    label: "I'm invisible on social media",
    sub: "Social authority",
    icon: "📡",
  },
  {
    id: "listing-ops",
    label: "Listing launches are chaotic & manual",
    sub: "Listing automation",
    icon: "🏠",
  },
];

const TOOLS = [
  "Follow Up Boss",
  "KVCore",
  "HubSpot",
  "Wise Agent",
  "LionDesk",
  "Chime",
  "None / Other",
];




// ─── Helper: Submit to HubSpot ────────────────────────────────────────────────

async function submitToHubSpot(data: FormData) {
  const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  if (!PORTAL_ID || !FORM_ID) {
    console.warn("HubSpot env vars not set — submission skipped.");
    return;
  }

  const payload = {
    fields: [
      { name: "firstname", value: data.name.split(" ")[0] ?? data.name },
      { name: "lastname", value: data.name.split(" ").slice(1).join(" ") ?? "" },
      { name: "email", value: data.email },
      { name: "phone", value: data.phone },
      // Custom properties — create these in HubSpot (see HUBSPOT_SETUP.md)
      { name: "realtor_role", value: data.role },
      { name: "team_size", value: data.teamSize },
      { name: "monthly_leads", value: String(data.monthlyLeads) },
      { name: "biggest_pain_point", value: data.biggestPain },
      { name: "current_crm_tools", value: data.currentTools.join(", ") },
    ],
    context: {
      pageUri: typeof window !== "undefined" ? window.location.href : "",
      pageName: "Apply Page",
    },
  };

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HubSpot error: ${err}`);
  }
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-10">
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative flex items-center">
          <motion.div
            animate={{
              width: i === current ? 28 : 8,
              backgroundColor: i < current ? "#dbab66" : i === current ? "#e8c48a" : "rgba(255,255,255,0.12)",
            }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="h-2 rounded-full"
          />
        </div>
      ))}
      <span className="ml-3 text-xs font-medium tracking-widest uppercase text-[#71717a]">
        {current + 1} / {total}
      </span>
    </div>
  );
}

function CardSelect({
  options,
  value,
  onChange,
}: {
  options: { id: string; label: string; sub?: string; icon?: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => {
        const selected = value === opt.id;
        return (
          <motion.button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`relative text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer group ${
              selected
                ? "border-[#dbab66] bg-[#dbab661a]"
                : "border-[rgba(255,255,255,0.08)] bg-[#141415] hover:border-[rgba(255,255,255,0.16)]"
            }`}
          >
            {opt.icon && (
              <div className="text-2xl mb-3 leading-none">{opt.icon}</div>
            )}
            <div
              className={`font-semibold text-sm leading-tight ${
                selected ? "text-[#e8c48a]" : "text-[#fafafa]"
              }`}
            >
              {opt.label}
            </div>
            {opt.sub && (
              <div className="text-xs mt-1 text-[#71717a]">{opt.sub}</div>
            )}
            {selected && (
              <motion.div
                layoutId="card-check"
                className="absolute top-4 right-4 w-5 h-5 rounded-full bg-[#dbab66] flex items-center justify-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#000"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

function ChipSelect({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (value.includes(opt)) {
      onChange(value.filter((v) => v !== opt));
    } else {
      onChange([...value, opt]);
    }
  };
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const selected = value.includes(opt);
        return (
          <motion.button
            key={opt}
            onClick={() => toggle(opt)}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
              selected
                ? "border-[#dbab66] bg-[#dbab661a] text-[#e8c48a]"
                : "border-[rgba(255,255,255,0.1)] text-[#b4b4bd] hover:border-[rgba(255,255,255,0.2)]"
            }`}
          >
            {opt}
          </motion.button>
        );
      })}
    </div>
  );
}

function LeadSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const min = 5;
  const max = 200;
  const pct = ((value - min) / (max - min)) * 100;

  const labels = [
    { val: 5, label: "5" },
    { val: 50, label: "50" },
    { val: 100, label: "100" },
    { val: 200, label: "200+" },
  ];

  return (
    <div className="space-y-5">
      <div className="flex items-end justify-between">
        <div>
          <span className="text-5xl font-bold text-[#e8c48a] font-[var(--font-serif)]">
            {value >= 200 ? "200+" : value}
          </span>
          <span className="text-[#71717a] text-sm ml-2">leads / month</span>
        </div>
        <div
          className={`text-xs px-3 py-1 rounded-full border font-medium ${
            value >= 50
              ? "border-[#dbab66] text-[#dbab66] bg-[#dbab661a]"
              : "border-[rgba(255,255,255,0.1)] text-[#71717a]"
          }`}
        >
          {value < 20
            ? "Early stage"
            : value < 60
            ? "Growing fast"
            : value < 120
            ? "High volume"
            : "Enterprise scale"}
        </div>
      </div>

      <div className="relative py-2">
        {/* Track */}
        <div className="relative h-2 rounded-full bg-[rgba(255,255,255,0.08)]">
          {/* Fill */}
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#c4944f] to-[#e8c48a] transition-all duration-150"
            style={{ width: `${pct}%` }}
          />
        </div>
        {/* Native input for accessibility */}
        <input
          type="range"
          min={min}
          max={max}
          step={5}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          style={{ margin: 0 }}
        />
        {/* Thumb visual */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#e8c48a] border-2 border-[#0f0f0f] shadow-lg pointer-events-none"
          style={{ left: `calc(${pct}% - 10px)` }}
          whileHover={{ scale: 1.2 }}
        />
      </div>

      {/* Tick labels */}
      <div className="flex justify-between text-xs text-[#71717a]">
        {labels.map(({ val, label }) => (
          <span key={val}>{label}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Step Content ─────────────────────────────────────────────────────────────

const stepVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
  }),
};

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState<FormData>({
    role: "",
    teamSize: "",
    monthlyLeads: 30,
    biggestPain: "",
    currentTools: [],
    name: "",
    email: "",
    phone: "",
  });

  const set = (key: keyof FormData, val: FormData[typeof key]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const canAdvance = () => {
    if (step === 0) return !!form.role;
    if (step === 1) return form.monthlyLeads >= 5;
    if (step === 2) return !!form.biggestPain;
    if (step === 3) return true; // tools optional
    if (step === 4)
      return !!form.name && !!form.email && form.email.includes("@");
    return true;
  };

  const advance = () => {
    if (!canAdvance()) return;
    setDir(1);
    setStep((s) => Math.min(s + 1, STEPS - 1));
  };

  const back = () => {
    setDir(-1);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      await submitToHubSpot(form);
      setSubmitted(true);
    } catch (e: unknown) {
      setError(
        e instanceof Error ? e.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "var(--surface)" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-lg"
        >
          <div className="w-16 h-16 rounded-full bg-[#dbab661a] border border-[#dbab66] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
              <path
                d="M2 11L10 19L26 2"
                stroke="#dbab66"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--text-primary)",
            }}
          >
            Application Received
          </h1>
          <p
            className="text-base leading-relaxed mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            We review every application personally. If you're a fit, you'll hear
            from us within{" "}
            <span style={{ color: "var(--gold)" }}>24 hours</span>.
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Check your inbox — and your spam folder just in case.
          </p>
        </motion.div>
      </main>
    );
  }

  // ── Step content ──────────────────────────────────────────────────────────
  const stepContent: Record<number, React.ReactNode> = {
    0: (
      <>
        <Label>What best describes you?</Label>
        <CardSelect
          options={ROLES}
          value={form.role}
          onChange={(v) => {
            set("role", v);
            const sizes = TEAM_SIZES[v];
            set("teamSize", sizes?.[0] ?? "");
          }}
        />
        {form.role && TEAM_SIZES[form.role].length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5"
          >
            <Label>How many agents on your team?</Label>
            <ChipSelect
              options={TEAM_SIZES[form.role]}
              value={form.teamSize ? [form.teamSize] : []}
              onChange={(v) => set("teamSize", v[v.length - 1] ?? "")}
            />
          </motion.div>
        )}
      </>
    ),
    1: (
      <>
        <Label>How many inbound leads do you get per month?</Label>
        <p className="text-sm text-[#71717a] mb-8 -mt-2">
          Include all sources — Zillow, Realtor, MLS, referrals, social.
        </p>
        <LeadSlider
          value={form.monthlyLeads}
          onChange={(v) => set("monthlyLeads", v)}
        />
      </>
    ),
    2: (
      <>
        <Label>What's your biggest growth bottleneck right now?</Label>
        <CardSelect
          options={PAIN_POINTS}
          value={form.biggestPain}
          onChange={(v) => set("biggestPain", v)}
        />
      </>
    ),
    3: (
      <>
        <Label>Which tools are you currently using?</Label>
        <p className="text-sm text-[#71717a] mb-6 -mt-2">
          Select all that apply. This helps us plan the integration.
        </p>
        <ChipSelect
          options={TOOLS}
          value={form.currentTools}
          onChange={(v) => set("currentTools", v)}
        />
      </>
    ),
    4: (
      <>
        <Label>Last step — how do we reach you?</Label>
        <div className="space-y-4">
          {[
            {
              key: "name" as const,
              placeholder: "Full name",
              type: "text",
              label: "Name",
            },
            {
              key: "email" as const,
              placeholder: "your@email.com",
              type: "email",
              label: "Work email",
            },
            {
              key: "phone" as const,
              placeholder: "+1 (555) 000-0000",
              type: "tel",
              label: "Phone / WhatsApp",
            },
          ].map((field) => (
            <div key={field.key}>
              <p className="text-xs text-[#71717a] mb-1.5 font-medium tracking-wide uppercase">
                {field.label}
              </p>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.key] as string}
                onChange={(e) => set(field.key, e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && canAdvance()) handleSubmit();
                }}
                className="w-full px-4 py-3.5 rounded-xl text-sm bg-[#141415] border border-[rgba(255,255,255,0.08)] text-[#fafafa] placeholder:text-[#71717a] focus:outline-none focus:border-[#dbab66] transition-colors duration-200"
              />
            </div>
          ))}
        </div>

        {/* Privacy note */}
        <p className="text-xs text-[#71717a] mt-5 leading-relaxed">
          We review every application personally. Your info is never sold or
          shared.
        </p>

        {error && (
          <p className="text-sm text-red-400 mt-3 bg-red-900/20 border border-red-800/40 rounded-xl px-4 py-3">
            {error}
          </p>
        )}
      </>
    ),
  };

  const isLastStep = step === STEPS - 1;

  return (
    <>
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter+Tight:wght@400;500;600;700&display=swap');
      `}</style>

      <main
        className="min-h-screen flex flex-col"
        style={{
          background: "var(--surface)",
          fontFamily: "var(--font-sans), 'Inter Tight', sans-serif",
        }}
      >
        < Navbar />
        {/* Ambient gradient */}
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(219,171,102,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Top bar */}
        <nav className="mt-12 relative z-10 flex items-center justify-between px-6 pt-6 pb-4 max-w-2xl mx-auto w-full">
          <a
            href="/"
            className="flex items-center gap-2 text-[#71717a] hover:text-[#fafafa] transition-colors text-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="opacity-70"
            >
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </a>
          <div
            className="text-sm font-semibold tracking-tight"
            style={{
              fontFamily: "var(--font-serif), 'Cormorant Garamond', serif",
              color: "var(--gold)",
              fontSize: "18px",
            }}
          >
            Apply
          </div>
        </nav>

        {/* Form container */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
          <div className="w-full max-w-xl">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
                style={{ color: "var(--gold)" }}
              >
                Application
              </p>
              <h1
                className="text-3xl sm:text-4xl font-bold leading-tight"
                style={{
                  fontFamily: "var(--font-serif), 'Cormorant Garamond', serif",
                  color: "var(--text-primary)",
                }}
              >
                Let's see if we're a fit.
              </h1>
              <p
                className="text-sm mt-2"
                style={{ color: "var(--text-muted)" }}
              >
                Takes under 90 seconds. We review every application personally.
              </p>
            </motion.div>

            {/* Step indicator */}
            <StepIndicator current={step} total={STEPS} />

            {/* Step card */}
            <div
              className="relative rounded-2xl border p-7 overflow-hidden"
              style={{
                background: "var(--surface-card)",
                borderColor: "var(--border-card)",
                minHeight: 280,
              }}
            >
              {/* Subtle corner accent */}
              <div
                className="absolute -top-px -right-px w-20 h-20 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(219,171,102,0.08), transparent 70%)",
                }}
              />

              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  {stepContent[step]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={back}
                className={`text-sm text-[#71717a] hover:text-[#b4b4bd] transition-colors px-2 ${
                  step === 0 ? "invisible" : ""
                }`}
              >
                ← Back
              </button>

              {isLastStep ? (
                <motion.button
                  onClick={handleSubmit}
                  disabled={!canAdvance() || submitting}
                  whileHover={canAdvance() ? { y: -1, scale: 1.01 } : {}}
                  whileTap={canAdvance() ? { scale: 0.98 } : {}}
                  className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed min-w-[160px] flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="30"
                          strokeDashoffset="10"
                        />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Submit Application →"
                  )}
                </motion.button>
              ) : (
                <motion.button
                  onClick={advance}
                  disabled={!canAdvance()}
                  whileHover={canAdvance() ? { y: -1, scale: 1.01 } : {}}
                  whileTap={canAdvance() ? { scale: 0.98 } : {}}
                  className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </motion.button>
              )}
            </div>
          </div>
        </div>

        {/* Social proof strip */}
        <div
          className="relative z-10 border-t py-5 px-6"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div className="max-w-xl mx-auto flex flex-wrap gap-6 items-center justify-center">
            {[
              "⚡ Avg. response time drops to under 60 sec",
              "🔒 Application reviewed in 24 hrs",
              "🇺🇸 US realtors only",
            ].map((item) => (
              <span
                key={item}
                className="text-xs"
                style={{ color: "var(--text-muted)" }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        < Footer />
      </main>
    </>
  );
}

// ─── Helper component ─────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xl font-semibold mb-5 leading-snug"
      style={{
        fontFamily: "var(--font-serif), 'Cormorant Garamond', serif",
        color: "var(--text-primary)",
        fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
      }}
    >
      {children}
    </h2>
  );
}