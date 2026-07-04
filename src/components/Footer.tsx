import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer
            className="py-12 px-6"
            style={{
                backgroundColor: "var(--surface)",
                borderTop: "1px solid var(--border-subtle)",
            }}
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                    <Image
                        src="/logo1.svg"
                        alt="Glyd AI"
                        width={200}
                        height={50}
                        className="h-20 w-auto"
                    />

                    {/* Instagram 
                    <a
                        href="https://instagram.com/glydai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                        aria-label="Instagram"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                    </a>
                    */}
                </div>

                {/* Disclaimer */}
                <p
                    className="text-xs leading-relaxed mb-6"
                    style={{ color: "var(--text-muted)" }}
                >
                    Disclaimer: This site is not a part of the Facebook website or
                    Facebook Inc. Additionally, This site is NOT endorsed by Facebook in
                    any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                </p>

                {/* Bottom Row */}
                <div
                    className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6"
                    style={{ borderTop: "1px solid var(--border-subtle)" }}
                >
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                        © 2026 Glyd AI All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                        <Link
                            href="/policy/privacy"
                            className="hover:text-[var(--text-primary)] transition-colors"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Privacy Policy
                        </Link>
                        <span style={{ color: "var(--text-muted)" }}>|</span>
                        <Link
                            href="/policy/terms"
                            className="hover:text-[var(--text-primary)] transition-colors"
                            style={{ color: "var(--text-muted)" }}
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
