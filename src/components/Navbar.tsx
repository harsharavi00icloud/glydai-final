"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
];

const resources = [
    { label: "Blog", href: "/blog" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[800px] mx-auto transition-all duration-300 rounded-3xl shadow-2xl"
            style={{
                backgroundColor: scrolled ? "rgba(15, 15, 15, 0.95)" : "rgba(15, 15, 15, 0.85)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
            }}
        >
            <div className="px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="logo1.svg"
                        alt="Glyd AI"
                        width={200}
                        height={200}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-200"
                            style={{ color: pathname === link.href ? "var(--gold)" : "var(--text-secondary)" }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Resources Dropdown */}
                    <div className="relative group">
                        <button
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors duration-200 flex items-center gap-1"
                        >
                            Resources
                            <span>▼</span>
                        </button>
                        <div className="absolute hidden group-hover:block pt-3">
                            <div className="bg-[#0f0f0f] rounded-2xl py-3 px-5 shadow-xl border border-white/10 w-52">
                                {resources.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block py-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--gold)]"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/apply"
                        className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            background: "linear-gradient(135deg, #e8c48a 0%, #dbab66 50%, #c4944f 100%)",
                            color: "#000",
                        }}
                    >
                        Apply Now
                    </Link>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                style={{ backgroundColor: "rgba(15, 15, 15, 0.95)" }}
            >
                <div className="flex flex-col px-6 py-4 gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Resources Mobile */}
                    <div>
                        <button
                            onClick={() => setResourcesOpen(!resourcesOpen)}
                            className="text-base font-medium text-[var(--text-secondary)] hover:text-[var(--gold)] w-full text-left flex justify-between"
                        >
                            Resources
                            <span>{resourcesOpen ? "▲" : "▼"}</span>
                        </button>
                        {resourcesOpen && (
                            <div className="pl-4 mt-2 flex flex-col gap-3">
                                {resources.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-base text-[var(--text-secondary)] hover:text-[var(--gold)]"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <Link
                        href="/apply"
                        className="btn-gold text-center mt-2"
                        onClick={() => setMobileOpen(false)}
                    >
                        Apply Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}