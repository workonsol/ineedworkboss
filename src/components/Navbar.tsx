"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(4px)",
        borderBottom: "2px solid #000000",
        boxShadow: "0 2px 0px #000000",
        padding: "14px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "16px",
            color: "#000000",
            textDecoration: "none",
            letterSpacing: "2px",
          }}
        >
          $WORK
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link
            href="/pfp"
            className="mobile-nav-link"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px",
              color: "#888888",
              textDecoration: "none",
              letterSpacing: "1px",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#000000"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#888888"; }}
          >
            PFP_MAKER
          </Link>

          <a
            href="#"
            className="pixel-btn pixel-btn-blue"
            style={{ fontSize: "8px", padding: "10px 16px" }}
          >
            BUY $WORK
          </a>
        </div>
      </div>
    </nav>
  );
}
