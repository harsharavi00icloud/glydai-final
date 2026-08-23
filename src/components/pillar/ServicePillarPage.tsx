import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getRelated, type Pillar } from "@/data/pillars";
import { PillarFaq } from "./PillarFaq";
import { PillarJsonLd } from "./PillarJsonLd";

function ApplyLink({
  query,
  className,
  children,
}: {
  query: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={`/apply?${query}`} className={className}>
      {children}
    </Link>
  );
}

export function ServicePillarPage({ data }: { data: Pillar }) {
  const related = getRelated(data);
  const offerLabel =
    data.offer === "pro" ? "Pro" : data.offer === "both" ? "Essential · Pro" : "Essential";

  return (
    <>
      <PillarJsonLd data={data} />
      <Navbar />
      <main style={{ background: "#000" }}>
        {/* Hero */}
        <section
          className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 120px 40px rgba(59, 130, 246, 0.06), inset 0 2px 0 rgba(59, 130, 246, 0.16)",
            }}
          />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-5"
                style={{ color: "var(--gold)" }}
              >
                {data.eyebrow} · {offerLabel}
              </p>
              <h1
                className="font-serif text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.12] tracking-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {data.h1}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p
                className="mt-6 text-base md:text-lg font-light leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {data.lede}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.22}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <ApplyLink query={data.applyQuery} className="btn-gold inline-block">
                  Apply to Work With Us
                </ApplyLink>
                <a
                  href="#how-it-works"
                  className="text-sm font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  See how it works ↓
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Proofs */}
        <section className="px-6 -mt-4 relative z-10">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.proofs.map((proof, i) => (
              <ScrollReveal key={proof.label} delay={0.06 * i}>
                <div className="card-dark p-6 md:p-8 text-center h-full">
                  <div
                    className="font-serif text-3xl md:text-4xl mb-2"
                    style={{ color: "var(--gold-light)" }}
                  >
                    {proof.stat}
                  </div>
                  <div
                    className="text-sm font-medium tracking-wide uppercase mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {proof.label}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {proof.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Problem */}
        <section className="section-padding">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                The problem
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-6"
                style={{ color: "var(--text-primary)" }}
              >
                {data.problem.headline}
              </h2>
              <p
                className="text-base md:text-lg font-light leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {data.problem.body}
              </p>
            </ScrollReveal>
            <ul className="space-y-3">
              {data.problem.bullets.map((bullet, i) => (
                <ScrollReveal key={bullet} delay={0.05 * i}>
                  <li
                    className="flex gap-3 text-sm md:text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span style={{ color: "var(--gold)" }} aria-hidden>
                      —
                    </span>
                    <span>{bullet}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="section-padding" style={{ background: "var(--surface)" }}>
          <div className="max-w-[900px] mx-auto">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                How it works
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-12"
                style={{ color: "var(--text-primary)" }}
              >
                Five steps. We run them. You do not log in.
              </h2>
            </ScrollReveal>
            <ol className="space-y-8">
              {data.howItWorks.map((item, i) => (
                <ScrollReveal key={item.step} delay={0.04 * i}>
                  <li className="grid grid-cols-[auto_1fr] gap-5 md:gap-8">
                    <div
                      className="font-serif text-2xl md:text-3xl pt-1"
                      style={{ color: "var(--gold)" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3
                        className="text-xl md:text-2xl font-serif mb-3"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm md:text-base font-light leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.body}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Week one */}
        <section className="section-padding">
          <div className="max-w-[1100px] mx-auto">
            <ScrollReveal>
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                First seven days
              </p>
              <h2
                className="font-serif text-3xl md:text-4xl font-light leading-tight mb-10 max-w-2xl"
                style={{ color: "var(--text-primary)" }}
              >
                What actually happens in week one
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {data.weekOne.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.08 * i}>
                  <div className="card-dark p-7 h-full">
                    <p
                      className="text-xs tracking-[0.18em] uppercase mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3
                      className="font-serif text-xl mb-3"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Includes / not */}
        <section className="section-padding" style={{ background: "var(--surface)" }}>
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal>
              <div className="card-dark p-8 h-full">
                <h2
                  className="font-serif text-2xl md:text-3xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  What is included
                </h2>
                <ul className="space-y-3">
                  {data.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--gold)" }} aria-hidden>
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-dark p-8 h-full">
                <h2
                  className="font-serif text-2xl md:text-3xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  What this is not
                </h2>
                <ul className="space-y-3">
                  {data.notIncluded.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span aria-hidden>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Who for */}
        <section className="section-padding">
          <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <ScrollReveal>
              <div className="rounded-2xl p-8 h-full border" style={{ borderColor: "rgba(219,171,102,0.25)", background: "rgba(219,171,102,0.04)" }}>
                <h2
                  className="font-serif text-2xl md:text-3xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Who this is for
                </h2>
                <ul className="space-y-3">
                  {data.whoFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--gold)" }} aria-hidden>
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="card-dark p-8 h-full">
                <h2
                  className="font-serif text-2xl md:text-3xl mb-6"
                  style={{ color: "var(--text-primary)" }}
                >
                  Who this is not for
                </h2>
                <ul className="space-y-3">
                  {data.whoNotFor.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span aria-hidden>×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: "var(--surface)" }}>
          <div className="max-w-[800px] mx-auto">
            <ScrollReveal>
              <h2
                className="font-serif text-3xl md:text-4xl font-light text-center mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                Common questions
              </h2>
              <p
                className="text-center text-base mb-12"
                style={{ color: "var(--text-secondary)" }}
              >
                Straight answers. If it is gated, we say it is gated.
              </p>
            </ScrollReveal>
            <PillarFaq faqs={data.faqs} />
          </div>
        </section>

        {/* Related */}
        <section className="section-padding">
          <div className="max-w-[1100px] mx-auto">
            <ScrollReveal>
              <h2
                className="font-serif text-3xl md:text-4xl font-light mb-10"
                style={{ color: "var(--text-primary)" }}
              >
                Related systems
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {related.map((item, i) => (
                <ScrollReveal key={item.slug} delay={0.08 * i}>
                  <Link href={`/${item.slug}`} className="card-dark p-7 h-full flex flex-col group">
                    <p
                      className="text-xs tracking-[0.18em] uppercase mb-3"
                      style={{ color: "var(--gold)" }}
                    >
                      {item.eyebrow}
                    </p>
                    <h3
                      className="font-serif text-xl mb-3 group-hover:text-[var(--gold-light)] transition-colors"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.navLabel}
                    </h3>
                    <p
                      className="text-sm font-light leading-relaxed flex-1"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.lede.length > 160 ? `${item.lede.slice(0, 157)}…` : item.lede}
                    </p>
                    <span
                      className="mt-5 text-sm"
                      style={{ color: "var(--gold)" }}
                    >
                      View {item.navLabel} →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative py-24 md:py-32 overflow-hidden"
          style={{ background: "var(--hero-gradient)" }}
        >
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <ScrollReveal>
              <h2
                className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal leading-tight"
                style={{ color: "#fafafa" }}
              >
                {data.closing}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-5 text-base font-light" style={{ color: "#b4b4b4" }}>
                US realtors only. We review every application in 24 hours. Pricing is scoped on the call — not stamped on a page.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.28}>
              <ApplyLink query={data.applyQuery} className="btn-gold mt-10 inline-block">
                Apply to Work With Us
              </ApplyLink>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
