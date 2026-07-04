// ============================================================
// [CONFIG] — Model & API settings. Change MODEL to swap models.
// e.g. "google/gemini-2.5-pro" or "openai/gpt-4o"
// ============================================================
const MODEL = "z-ai/glm-4.5-air:free";
const API_URL = "https://openrouter.ai/api/v1/chat/completions";

// ============================================================
// [PALETTES] — 8 preset color themes. Add/edit here freely.
// Each palette: { id, name, bg, primary, accent, text, sub }
// ============================================================
const PALETTES = [
    { id: "midnight", name: "Midnight", bg: "#0F172A", primary: "#F59E0B", accent: "#1E293B", text: "#F8FAFC", sub: "#94A3B8" },
    { id: "forest", name: "Forest", bg: "#1A2E1A", primary: "#D4C5A9", accent: "#2D4A2D", text: "#F5F0E8", sub: "#A8B89A" },
    { id: "blaze", name: "Blaze", bg: "#1C1C1C", primary: "#E53E3E", accent: "#2D2D2D", text: "#FFFFFF", sub: "#A0A0A0" },
    { id: "ocean", name: "Ocean", bg: "#0D2137", primary: "#38B2AC", accent: "#1A3A5C", text: "#E6F4F1", sub: "#81C7C3" },
    { id: "minimal", name: "Minimal", bg: "#FFFFFF", primary: "#111111", accent: "#F5F5F5", text: "#111111", sub: "#666666" },
    { id: "sunset", name: "Sunset", bg: "#1A0A2E", primary: "#F97316", accent: "#2D1052", text: "#FFF7ED", sub: "#FDBA74" },
    { id: "corporate", name: "Corporate", bg: "#0A1628", primary: "#4A90D9", accent: "#152A4A", text: "#EDF2F7", sub: "#90AEC8" },
    { id: "lavender", name: "Lavender", bg: "#F5F0FF", primary: "#7C3AED", accent: "#EDE9FE", text: "#2D1B69", sub: "#8B7EC8" },
];

// ============================================================
// [FORMAT CONFIG] — Supported post formats & base dimensions.
// Add new formats here. resolutions = platforms for resize.
// ============================================================
const FORMATS = [
    { id: "linkedin_carousel", label: "LinkedIn Carousel", w: 1080, h: 1080, slides: [3, 8] },
    { id: "ig_carousel", label: "IG Carousel", w: 1080, h: 1080, slides: [3, 10] },
    { id: "single_image", label: "Single Image", w: 1200, h: 630, slides: [1, 1] },
    { id: "facebook_image", label: "Facebook Image", w: 1200, h: 628, slides: [1, 1] },
];

const RESIZE_PLATFORMS = [
    { id: "ig_story", label: "IG Story", w: 1080, h: 1920 },
    { id: "ig_post", label: "IG Post", w: 1080, h: 1080 },
    { id: "linkedin", label: "LinkedIn Post", w: 1200, h: 627 },
    { id: "facebook", label: "Facebook Post", w: 1200, h: 628 },
    { id: "twitter", label: "Twitter/X Banner", w: 1500, h: 500 },
    { id: "pinterest", label: "Pinterest", w: 1000, h: 1500 },
];

const TONE_OPTIONS = ["Professional", "Casual", "Bold", "Inspirational", "Witty"];

// ============================================================
// [IMPORTS]
// ============================================================
import { useState, useRef, useCallback } from "react";

// ============================================================
// [SLIDE RENDERER] — Renders a single slide at given w×h.
// Layout variants: text-only, split, visual-first.
// ref is attached for html2canvas capture.
// ============================================================
function Slide({ slide, palette, w, h, scale, slideRef }) {
    const base = { width: w, height: h, background: palette.bg, color: palette.text, fontFamily: "Inter, system-ui, sans-serif", position: "relative", overflow: "hidden", transform: `scale(${scale})`, transformOrigin: "top left", flexShrink: 0 };
    const layout = slide.layout || "text-only";

    // [SLIDE: text-only layout]
    if (layout === "text-only") return (
        <div ref={slideRef} style={base}>
            <div style={{ position: "absolute", inset: 0, background: palette.accent, clipPath: "circle(60% at 100% 100%)", opacity: 0.4 }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: w * 0.1 }}>
                {slide.tag && <span style={{ color: palette.primary, fontSize: w * 0.028, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: w * 0.04 }}>{slide.tag}</span>}
                <h2 style={{ margin: 0, fontSize: w * 0.072, fontWeight: 800, lineHeight: 1.15, color: palette.text, marginBottom: w * 0.04 }}>{slide.headline}</h2>
                {slide.body && <p style={{ margin: 0, fontSize: w * 0.036, lineHeight: 1.6, color: palette.sub, maxWidth: "80%" }}>{slide.body}</p>}
                {slide.cta && <div style={{ marginTop: w * 0.08, display: "inline-block", background: palette.primary, color: palette.bg, padding: `${w * 0.02}px ${w * 0.05}px`, borderRadius: w * 0.01, fontWeight: 700, fontSize: w * 0.032 }}>{slide.cta}</div>}
            </div>
            <div style={{ position: "absolute", bottom: w * 0.05, right: w * 0.07, fontSize: w * 0.022, color: palette.sub, opacity: 0.6 }}>{slide.slideNumber}</div>
        </div>
    );

    // [SLIDE: split layout]
    if (layout === "split") return (
        <div ref={slideRef} style={base}>
            <div style={{ position: "absolute", inset: 0, display: "flex" }}>
                <div style={{ flex: 1, background: palette.accent, display: "flex", flexDirection: "column", justifyContent: "center", padding: w * 0.08 }}>
                    {slide.tag && <span style={{ color: palette.primary, fontSize: w * 0.026, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: w * 0.04 }}>{slide.tag}</span>}
                    <h2 style={{ margin: 0, fontSize: w * 0.06, fontWeight: 800, lineHeight: 1.2, color: palette.text, marginBottom: w * 0.04 }}>{slide.headline}</h2>
                    {slide.cta && <div style={{ marginTop: w * 0.06, display: "inline-block", background: palette.primary, color: palette.bg, padding: `${w * 0.018}px ${w * 0.045}px`, borderRadius: w * 0.008, fontWeight: 700, fontSize: w * 0.03 }}>{slide.cta}</div>}
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: w * 0.08, background: palette.bg }}>
                    {slide.body && <p style={{ margin: 0, fontSize: w * 0.038, lineHeight: 1.7, color: palette.sub }}>{slide.body}</p>}
                </div>
            </div>
        </div>
    );

    // [SLIDE: visual-first layout]
    return (
        <div ref={slideRef} style={base}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "55%", background: palette.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontSize: w * 0.18, opacity: 0.15, fontWeight: 900, color: palette.bg, textAlign: "center", padding: w * 0.04, lineHeight: 1 }}>{slide.headline?.slice(0, 3).toUpperCase()}</div>
                {slide.tag && <div style={{ position: "absolute", bottom: w * 0.04, left: w * 0.06, fontSize: w * 0.026, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: palette.bg, opacity: 0.85 }}>{slide.tag}</div>}
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "48%", background: palette.bg, display: "flex", flexDirection: "column", justifyContent: "center", padding: w * 0.07 }}>
                <h2 style={{ margin: 0, fontSize: w * 0.055, fontWeight: 800, lineHeight: 1.2, color: palette.text, marginBottom: w * 0.03 }}>{slide.headline}</h2>
                {slide.body && <p style={{ margin: 0, fontSize: w * 0.032, lineHeight: 1.6, color: palette.sub }}>{slide.body}</p>}
                {slide.cta && <div style={{ marginTop: w * 0.04, display: "inline-block", background: palette.primary, color: palette.bg, padding: `${w * 0.015}px ${w * 0.04}px`, borderRadius: w * 0.008, fontWeight: 700, fontSize: w * 0.028 }}>{slide.cta}</div>}
            </div>
        </div>
    );
}

// ============================================================
// [PALETTE PICKER] — Visual swatch grid for preset selection.
// ============================================================
function PalettePicker({ selected, onSelect }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
            {PALETTES.map(p => (
                <div key={p.id} onClick={() => onSelect(p)} title={p.name} style={{ width: 48, height: 48, borderRadius: 10, background: p.bg, border: selected?.id === p.id ? `3px solid ${p.primary}` : "3px solid transparent", cursor: "pointer", position: "relative", overflow: "hidden", boxShadow: selected?.id === p.id ? `0 0 0 2px white` : "none" }}>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: p.primary, opacity: 0.9 }} />
                    <div style={{ position: "absolute", bottom: 2, right: 4, fontSize: 8, fontWeight: 700, color: p.bg }}>{p.name.slice(0, 3)}</div>
                </div>
            ))}
        </div>
    );
}

// ============================================================
// [EXPORT UTIL] — Captures a DOM node via html2canvas → JPG.
// Uses dynamic CDN import to keep bundle light.
// ============================================================
async function exportSlideAsJPG(domNode, filename) {
    if (!window.html2canvas) {
        await new Promise((res, rej) => {
            const s = document.createElement("script");
            s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
            s.onload = res; s.onerror = rej;
            document.head.appendChild(s);
        });
    }
    const canvas = await window.html2canvas(domNode, { scale: 2, useCORS: true, backgroundColor: null });
    const link = document.createElement("a");
    link.download = `${filename}.jpg`;
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
}

// ============================================================
// [API CALL] — Sends prompt to OpenRouter. Returns slide JSON.
// Swap MODEL const at top to change the AI model used.
// ============================================================
async function generateSlides({ apiKey, businessContext, palette, format, postContext }) {
    const fmt = FORMATS.find(f => f.id === format);
    const slideCount = fmt.slides[0] === fmt.slides[1] ? fmt.slides[0] : `${fmt.slides[0]} to ${fmt.slides[1]}`;

    const systemPrompt = `You are a professional social media graphic designer and copywriter.
Return ONLY valid JSON — no markdown, no explanation, no code fences.
The JSON must be an array of slide objects.
Each slide object must have:
- headline (string, punchy, max 8 words)
- body (string, 1-2 sentences, can be null for cover slides)
- layout (one of: "text-only", "split", "visual-first")
- tag (optional short label like "Tip #1" or "Did you know?")
- cta (only on the last slide, a call-to-action string)
- slideNumber (e.g. "01 / 05")
Choose layouts that vary across slides for visual interest.`;

    const userPrompt = `Business context:
- Name: ${businessContext.name || "Our Brand"}
- Industry: ${businessContext.industry || "General"}
- Tone: ${businessContext.tone || "Professional"}
- Target audience: ${businessContext.audience || "General public"}
- Color palette chosen: ${palette.name}

Post context: ${postContext}
Format: ${fmt.label}
Number of slides: ${slideCount}

Generate the slides now.`;

    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${apiKey}`, "HTTP-Referer": "https://claude.ai", "X-Title": "Image Generator" },
        body: JSON.stringify({ model: MODEL, max_tokens: 2000, messages: [{ role: "system", content: systemPrompt }, { role: "user", content: userPrompt }] })
    });

    if (!res.ok) { const err = await res.json(); throw new Error(err?.error?.message || "API error"); }
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content || "[]";
    return JSON.parse(raw.replace(/```json|```/g, "").trim());
}

// ============================================================
// [MAIN APP] — Root component. Manages all state & layout.
// ============================================================
export default function App() {
    // [STATE: credentials & model]
    const [apiKey, setApiKey] = useState("");

    // [STATE: business context]
    const [bizName, setBizName] = useState("");
    const [bizIndustry, setBizIndustry] = useState("");
    const [bizTone, setBizTone] = useState("Professional");
    const [bizAudience, setBizAudience] = useState("");

    // [STATE: generation inputs]
    const [postContext, setPostContext] = useState("");
    const [format, setFormat] = useState("linkedin_carousel");
    const [palette, setPalette] = useState(PALETTES[0]);

    // [STATE: output]
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // [STATE: resize mode]
    const [resizing, setResizing] = useState(false);
    const [activePlatform, setActivePlatform] = useState(null);

    // [REFS: per-slide DOM nodes for export]
    const slideRefs = useRef([]);

    const currentFormat = FORMATS.find(f => f.id === format);
    const activePlt = activePlatform ? RESIZE_PLATFORMS.find(p => p.id === activePlatform) : null;
    const renderW = activePlt ? activePlt.w : currentFormat.w;
    const renderH = activePlt ? activePlt.h : currentFormat.h;
    const PREVIEW_W = 340;
    const scale = PREVIEW_W / renderW;

    // [HANDLER: generate]
    const handleGenerate = useCallback(async () => {
        if (!apiKey.trim()) { setError("Please enter your OpenRouter API key."); return; }
        if (!postContext.trim()) { setError("Please enter post context."); return; }
        setError(""); setLoading(true); setSlides([]); setResizing(false); setActivePlatform(null);
        try {
            const result = await generateSlides({ apiKey, businessContext: { name: bizName, industry: bizIndustry, tone: bizTone, audience: bizAudience }, palette, format, postContext });
            if (!Array.isArray(result) || result.length === 0) throw new Error("No slides returned.");
            setSlides(result);
        } catch (e) { setError(e.message || "Something went wrong."); }
        finally { setLoading(false); }
    }, [apiKey, postContext, format, palette, bizName, bizIndustry, bizTone, bizAudience]);

    // [HANDLER: export single slide]
    const handleExport = async (idx) => {
        const node = slideRefs.current[idx];
        if (!node) return;
        const suffix = activePlt ? `_${activePlt.id}` : "";
        await exportSlideAsJPG(node, `slide_${idx + 1}${suffix}`);
    };

    // [HANDLER: export all slides]
    const handleExportAll = async () => {
        for (let i = 0; i < slides.length; i++) {
            await handleExport(i);
            await new Promise(r => setTimeout(r, 300));
        }
    };

    // ============================================================
    // [RENDER]
    // ============================================================
    return (
        <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif", background: "var(--color-background-tertiary)", color: "var(--color-text-primary)", fontSize: 14 }}>

            {/* [LEFT PANEL: controls] */}
            <div style={{ width: 320, minWidth: 320, background: "var(--color-background-primary)", borderRight: "0.5px solid var(--color-border-tertiary)", overflowY: "auto", display: "flex", flexDirection: "column", gap: 0 }}>

                {/* [SECTION: header] */}
                <div style={{ padding: "20px 20px 16px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                    <div style={{ fontWeight: 700, fontSize: 16 }}>Image Generator</div>
                    <div style={{ color: "var(--color-text-secondary)", fontSize: 12, marginTop: 2 }}>AI-powered social content</div>
                </div>

                {/* [SECTION: API key input] */}
                <div style={{ padding: "16px 20px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                    <label style={{ fontWeight: 500, fontSize: 12, color: "var(--color-text-secondary)", display: "block", marginBottom: 6 }}>OPENROUTER API KEY</label>
                    <input type="password" value={apiKey} onChange={e => setApiKey(e.target.value)} placeholder="sk-or-..." style={{ width: "100%", boxSizing: "border-box", fontSize: 13 }} />
                    <div style={{ fontSize: 11, color: "var(--color-text-tertiary)", marginTop: 4 }}>Model: <code style={{ fontSize: 11 }}>{MODEL}</code></div>
                </div>

                {/* [SECTION: business context] */}
                <div style={{ padding: "16px 20px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Business Context</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>BUSINESS NAME</label>
                            <input value={bizName} onChange={e => setBizName(e.target.value)} placeholder="e.g. Acme Corp" style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13 }} />
                        </div>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>INDUSTRY / NICHE</label>
                            <input value={bizIndustry} onChange={e => setBizIndustry(e.target.value)} placeholder="e.g. SaaS, Fashion, Finance" style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13 }} />
                        </div>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>TONE OF VOICE</label>
                            <select value={bizTone} onChange={e => setBizTone(e.target.value)} style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13 }}>
                                {TONE_OPTIONS.map(t => <option key={t}>{t}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>TARGET AUDIENCE</label>
                            <input value={bizAudience} onChange={e => setBizAudience(e.target.value)} placeholder="e.g. Small business owners" style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13 }} />
                        </div>
                    </div>
                </div>

                {/* [SECTION: color palette picker] */}
                <div style={{ padding: "16px 20px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Color Palette</div>
                    <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8 }}>Selected: <strong>{palette.name}</strong></div>
                    <PalettePicker selected={palette} onSelect={setPalette} />
                </div>

                {/* [SECTION: post context & format] */}
                <div style={{ padding: "16px 20px", borderBottom: "0.5px solid var(--color-border-tertiary)" }}>
                    <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 12 }}>Post Details</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>POST CONTEXT</label>
                            <textarea value={postContext} onChange={e => setPostContext(e.target.value)} placeholder="Describe what this post is about..." rows={4} style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13, resize: "vertical" }} />
                        </div>
                        <div>
                            <label style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 500 }}>FORMAT</label>
                            <select value={format} onChange={e => setFormat(e.target.value)} style={{ width: "100%", boxSizing: "border-box", marginTop: 4, fontSize: 13 }}>
                                {FORMATS.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* [SECTION: generate button] */}
                <div style={{ padding: "16px 20px" }}>
                    <button onClick={handleGenerate} disabled={loading} style={{ width: "100%", padding: "12px 0", fontSize: 14, fontWeight: 600, background: loading ? "var(--color-background-secondary)" : "#111", color: loading ? "var(--color-text-secondary)" : "#fff", border: "none", borderRadius: 8, cursor: loading ? "not-allowed" : "pointer" }}>
                        {loading ? "Generating..." : "Generate Images"}
                    </button>
                    {error && <div style={{ marginTop: 10, fontSize: 12, color: "var(--color-text-danger)", lineHeight: 1.5 }}>{error}</div>}
                </div>
            </div>

            {/* [RIGHT PANEL: preview & export] */}
            <div style={{ flex: 1, overflowY: "auto", padding: "24px 28px" }}>

                {/* [PREVIEW: empty state] */}
                {slides.length === 0 && !loading && (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "60vh", color: "var(--color-text-tertiary)", gap: 12 }}>
                        <div style={{ fontSize: 48, opacity: 0.3 }}>&#9776;</div>
                        <div style={{ fontSize: 15 }}>Fill in the details and hit Generate</div>
                    </div>
                )}

                {/* [PREVIEW: loading state] */}
                {loading && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", flexDirection: "column", gap: 12, color: "var(--color-text-secondary)" }}>
                        <div style={{ width: 32, height: 32, border: "3px solid var(--color-border-tertiary)", borderTop: "3px solid #111", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                        <div>Thinking and generating slides...</div>
                        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                    </div>
                )}

                {/* [PREVIEW: slides output] */}
                {slides.length > 0 && (
                    <>
                        {/* [TOOLBAR: resize & export controls] */}
                        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
                            <div style={{ fontWeight: 600, fontSize: 15 }}>{slides.length} slide{slides.length > 1 ? "s" : ""} generated</div>
                            <button onClick={() => { setResizing(!resizing); setActivePlatform(null); }} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: resizing ? "#111" : "transparent", color: resizing ? "#fff" : "var(--color-text-primary)", cursor: "pointer", fontWeight: 500 }}>
                                {resizing ? "Exit Resize" : "Resize for Platforms"}
                            </button>
                            <button onClick={handleExportAll} style={{ fontSize: 12, padding: "6px 14px", borderRadius: 6, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer", fontWeight: 500 }}>
                                Download All
                            </button>
                        </div>

                        {/* [RESIZE: platform selector tabs] */}
                        {resizing && (
                            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                                <button onClick={() => setActivePlatform(null)} style={{ fontSize: 11, padding: "5px 12px", borderRadius: 20, border: "0.5px solid var(--color-border-secondary)", background: !activePlatform ? "#111" : "transparent", color: !activePlatform ? "#fff" : "var(--color-text-primary)", cursor: "pointer", fontWeight: 500 }}>
                                    Original
                                </button>
                                {RESIZE_PLATFORMS.map(p => (
                                    <button key={p.id} onClick={() => setActivePlatform(p.id)} style={{ fontSize: 11, padding: "5px 12px", borderRadius: 20, border: "0.5px solid var(--color-border-secondary)", background: activePlatform === p.id ? "#111" : "transparent", color: activePlatform === p.id ? "#fff" : "var(--color-text-primary)", cursor: "pointer", fontWeight: 500 }}>
                                        {p.label} <span style={{ opacity: 0.5 }}>{p.w}×{p.h}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* [SLIDE GRID: rendered slides] */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
                            {slides.map((slide, idx) => {
                                slideRefs.current[idx] = slideRefs.current[idx] || null;
                                return (
                                    <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                        {/* [SLIDE: scaled preview wrapper] */}
                                        <div style={{ width: PREVIEW_W, height: Math.round(renderH * scale), overflow: "hidden", borderRadius: 10, boxShadow: "0 4px 24px rgba(0,0,0,0.12)", background: palette.bg }}>
                                            <Slide
                                                slide={slide}
                                                palette={palette}
                                                w={renderW}
                                                h={renderH}
                                                scale={scale}
                                                slideRef={el => slideRefs.current[idx] = el}
                                            />
                                        </div>
                                        {/* [SLIDE: label & download button] */}
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: 4 }}>
                                            <span style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>Slide {idx + 1}{activePlt ? ` · ${activePlt.label}` : ""}</span>
                                            <button onClick={() => handleExport(idx)} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 5, border: "0.5px solid var(--color-border-secondary)", background: "transparent", cursor: "pointer" }}>
                                                Export JPG
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}