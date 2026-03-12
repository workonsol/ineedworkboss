"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FloatingCards from "@/components/FloatingCards";

const CA_PLACEHOLDER = "Coming Thursday";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA_PLACEHOLDER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section
        className="grid-bg hero-padding"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          overflow: "hidden",
          paddingBottom: "60px",
          background: "#ffffff",
        }}
      >
        {/* Corner decorations — desktop only */}
        <div className="hide-mobile" style={{ position: "absolute", top: 80, left: 20, color: "#cccccc", fontFamily: "var(--font-pixel)", fontSize: "8px", lineHeight: 1.8, opacity: 0.8 }}>
          {`┌─────────────────┐\n│  SYS: ONLINE    │\n│  NET: SOLANA    │\n│  STATUS: HIRING │\n└─────────────────┘`}
        </div>
        <div className="hide-mobile" style={{ position: "absolute", top: 80, right: 20, color: "#cccccc", fontFamily: "var(--font-pixel)", fontSize: "8px", lineHeight: 1.8, opacity: 0.8, textAlign: "right" }}>
          {`┌─────────────────┐\n│  TAX: 0/0       │\n│  LP: BURNED 🔥  │\n│  SUPPLY: 1B     │\n└─────────────────┘`}
        </div>

        <FloatingCards />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", zIndex: 10, position: "relative" }}
        >
          {/* Boot sequence text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hero-boot-text"
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px",
              color: "#888888",
              marginBottom: "16px",
              letterSpacing: "2px",
            }}
          >
            INITIALIZING GRIND PROTOCOL...
          </motion.div>

          {/* Big $WORK heading */}
          <h1
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(36px, 10vw, 96px)",
              fontWeight: 400,
              color: "#000000",
              lineHeight: 1,
              marginBottom: "8px",
              letterSpacing: "4px",
              textShadow: "4px 4px 0px #cccccc",
            }}
          >
            $WORK
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hero-subtitle"
            style={{
              fontFamily: "var(--font-vt323)",
              fontSize: "clamp(16px, 3vw, 26px)",
              color: "#555555",
              marginBottom: "8px",
              letterSpacing: "3px",
            }}
          >
            THE FIRST TOKEN FOR THE PERPETUALLY EMPLOYED
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(7px, 1.5vw, 9px)",
              color: "#000000",
              marginBottom: "32px",
              letterSpacing: "1px",
              lineHeight: 2,
              padding: "0 8px",
            }}
          >
            ALWAYS_WORKING.exe &nbsp;|&nbsp; NEVER_EARNING.sol
          </motion.p>

          {/* Hero Art Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ marginBottom: "36px", display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                position: "relative",
                border: "3px solid #000000",
                boxShadow: "6px 6px 0px #cccccc",
                background: "#f5f5f5",
                padding: "6px",
                display: "inline-block",
              }}
            >
              {/* Pixel corner accents */}
              <div style={{ position: "absolute", top: -2, left: -2, width: 12, height: 12, borderTop: "3px solid #000000", borderLeft: "3px solid #000000", background: "#ffffff" }} />
              <div style={{ position: "absolute", top: -2, right: -2, width: 12, height: 12, borderTop: "3px solid #000000", borderRight: "3px solid #000000", background: "#ffffff" }} />
              <div style={{ position: "absolute", bottom: -2, left: -2, width: 12, height: 12, borderBottom: "3px solid #000000", borderLeft: "3px solid #000000", background: "#ffffff" }} />
              <div style={{ position: "absolute", bottom: -2, right: -2, width: 12, height: 12, borderBottom: "3px solid #000000", borderRight: "3px solid #000000", background: "#ffffff" }} />

              <Image
                src="/hero-art.webp"
                alt="$WORK mascot"
                width={320}
                height={320}
                style={{
                  display: "block",
                  imageRendering: "pixelated",
                  maxWidth: "min(320px, 70vw)",
                  height: "auto",
                }}
              />
            </div>
          </motion.div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "20px" }}>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="pixel-btn pixel-btn-blue"
            >
              BUY $WORK
            </motion.a>
            <motion.a
              href="#ca"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="pixel-btn"
              style={{ fontSize: "9px" }}
            >
              GET CA
            </motion.a>
          </div>

          {/* opentowork badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ marginTop: "12px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1px solid #000000",
                color: "#000000",
                fontFamily: "var(--font-pixel)",
                fontSize: "7px",
                padding: "8px 16px",
                letterSpacing: "2px",
                boxShadow: "2px 2px 0px #cccccc",
                background: "#ffffff",
              }}
            >
              <span style={{ width: 8, height: 8, background: "#000000", display: "inline-block", borderRadius: "50%" }} />
              #opentowork · SOLANA
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── CONTRACT ADDRESS ─────────────────────────────────── */}
      <section
        id="ca"
        style={{
          background: "#f5f5f5",
          padding: "60px 24px",
          textAlign: "center",
          borderTop: "2px solid #000000",
          borderBottom: "2px solid #000000",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px",
              color: "#888888",
              letterSpacing: "3px",
              marginBottom: "12px",
            }}
          >
            // CONTRACT_ADDRESS
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(16px, 4vw, 28px)",
              color: "#000000",
              marginBottom: "28px",
              letterSpacing: "2px",
              textShadow: "2px 2px 0px #cccccc",
            }}
          >
            DEPLOY_KEY.sol
          </h2>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              border: "2px solid #000000",
              boxShadow: "4px 4px 0px #cccccc",
              background: "#ffffff",
              padding: "20px 28px",
              maxWidth: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-vt323)",
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#000000",
                wordBreak: "break-all",
                letterSpacing: "2px",
              }}
            >
              ⏳ LAUNCHING_THURSDAY...
            </span>
            <button
              onClick={handleCopy}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "7px",
                border: "1px solid #888888",
                background: "transparent",
                color: copied ? "#000000" : "#888888",
                padding: "8px 12px",
                cursor: "pointer",
                letterSpacing: "1px",
                transition: "all 0.1s",
              }}
            >
              {copied ? "COPIED ✓" : "COPY"}
            </button>
          </div>

          <p
            style={{
              marginTop: "16px",
              fontFamily: "var(--font-pixel)",
              fontSize: "7px",
              color: "#aaaaaa",
              letterSpacing: "1px",
            }}
          >
            {">"} CA_DROPS_THURSDAY. THE_GRIND_DOESNT_WAIT.
          </p>
        </motion.div>
      </section>

      {/* ─── ART FEATURE SECTION ──────────────────────────────── */}
      <section
        className="grid-bg section-padding"
        style={{
          padding: "80px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "48px",
          borderBottom: "2px solid #000000",
          background: "#ffffff",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "48px",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1000px",
            width: "100%",
          }}
        >
          {/* Art piece */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div
              style={{
                border: "2px solid #000000",
                boxShadow: "6px 6px 0px #cccccc",
                background: "#f5f5f5",
                padding: "8px",
                display: "inline-block",
              }}
            >
              <Image
                src="/hero-art.webp"
                alt="$WORK pixel art"
                width={280}
                height={280}
                style={{
                  display: "block",
                  imageRendering: "pixelated",
                  maxWidth: "min(280px, 80vw)",
                  height: "auto",
                }}
              />
            </div>
            <div style={{
              textAlign: "center",
              marginTop: "8px",
              fontFamily: "var(--font-pixel)",
              fontSize: "7px",
              color: "#888888",
              letterSpacing: "2px",
            }}>
              PIXEL_ART_V1.png
            </div>
          </div>

          {/* Terminal stat block */}
          <div style={{ flex: 1, minWidth: "260px", maxWidth: "420px" }}>
            <div
              className="stats-box"
            style={{
                border: "2px solid #000000",
                background: "#f5f5f5",
                padding: "24px 28px",
                fontFamily: "var(--font-vt323)",
                fontSize: "20px",
                color: "#555555",
                lineHeight: 2,
                boxShadow: "4px 4px 0px #cccccc",
              }}
            >
              <div style={{ color: "#000000", marginBottom: "8px", fontFamily: "var(--font-pixel)", fontSize: "8px", letterSpacing: "2px" }}>
                // GRIND_STATS.log
              </div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>CONNECTIONS:</span> 500+</div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>CERTS_COMPLETED:</span> 14</div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>JOBS_APPLIED:</span> 847</div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>OFFERS_RECEIVED:</span> 0</div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>COFFEES_TODAY:</span> 12</div>
              <div><span style={{ color: "#aaaaaa" }}>{">"}</span> <span style={{ color: "#000000" }}>STATUS:</span> <span style={{ color: "#000000" }} className="cursor">#opentowork</span></div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── LORE ─────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px",
              color: "#888888",
              letterSpacing: "3px",
              marginBottom: "12px",
              textAlign: "center",
            }}
          >
            // LORE.txt
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(14px, 3vw, 24px)",
              color: "#000000",
              marginBottom: "36px",
              textAlign: "center",
              letterSpacing: "2px",
              textShadow: "2px 2px 0px #cccccc",
            }}
          >
            THE_LORE_OF_$WORK
          </h2>

          <div
            className="lore-box"
            style={{
              border: "2px solid #000000",
              background: "#f5f5f5",
              padding: "32px 36px",
              fontFamily: "var(--font-vt323)",
              fontSize: "22px",
              color: "#555555",
              lineHeight: 1.8,
              position: "relative",
              boxShadow: "4px 4px 0px #cccccc",
            }}
          >
            {/* Terminal top bar */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              background: "#000000",
              padding: "6px 12px",
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}>
              <div style={{ width: 8, height: 8, background: "#ff5f57", borderRadius: "50%" }} />
              <div style={{ width: 8, height: 8, background: "#febc2e", borderRadius: "50%" }} />
              <div style={{ width: 8, height: 8, background: "#28c840", borderRadius: "50%" }} />
              <span style={{ marginLeft: 8, fontFamily: "var(--font-pixel)", fontSize: "6px", color: "#888888", letterSpacing: "1px" }}>lore.txt — WORK_ORIGIN_STORY</span>
            </div>
            <div style={{ marginTop: "28px" }}>
              <p style={{ marginBottom: "16px" }}>
                He has been <span style={{ color: "#000000", fontWeight: 700 }}>#opentowork</span> since 2009. He has{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>500+ connections</span>. He posts thought leadership content at 5:47am —{" "}
                <em style={{ color: "#888888" }}>"not for the likes, for the conversation."</em>
              </p>
              <p style={{ marginBottom: "16px" }}>
                He works on weekends <em style={{ color: "#888888" }}>"for passion, not a paycheck."</em> He has attended every
                virtual networking event since March 2020. His LinkedIn banner says{" "}
                <em style={{ color: "#888888" }}>"Building the future, one pivot at a time."</em>
              </p>
              <p style={{ marginBottom: "16px" }}>
                He has optimized his resume <span style={{ color: "#000000", fontWeight: 700 }}>37 times</span>. He has completed{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>14 certifications</span> on Coursera. He has applied to{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>847 jobs</span>. He has received{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>0 offers</span>.
              </p>
              <p style={{ marginBottom: "16px" }}>
                One day, staring at his 12th cup of coffee, he had a vision.{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>What if the grind itself was the product?</span>{" "}
                What if dedication to the hustle — the pure, uncut, unrewarded hustle — could be tokenized?
              </p>
              <p style={{ color: "#000000", fontFamily: "var(--font-pixel)", fontSize: "10px", letterSpacing: "1px", lineHeight: 2 }}>
                {">"} $WORK WAS BORN. ON SOLANA. DURING A LAYOFF NOTICE.
              </p>
              <p style={{ marginTop: "16px", color: "#888888", fontSize: "16px", fontStyle: "italic" }}>
                He is all of us. He is the market. He is always{" "}
                <span style={{ color: "#000000", fontWeight: 700 }}>#opentowork</span>.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── TOKENOMICS ──────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background: "#f5f5f5",
          padding: "60px 24px",
          borderTop: "2px solid #000000",
          borderBottom: "2px solid #000000",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "8px",
              color: "#888888",
              letterSpacing: "3px",
              marginBottom: "12px",
            }}
          >
            // TOKENOMICS.json
          </div>
          <h2
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "clamp(14px, 3vw, 22px)",
              color: "#000000",
              marginBottom: "40px",
              letterSpacing: "2px",
              textShadow: "2px 2px 0px #cccccc",
            }}
          >
            TOKEN_CONFIG
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {[
              { label: "SUPPLY", value: "1,000,000,000", sub: "$WORK" },
              { label: "TAX", value: "0 / 0", sub: "BUY / SELL" },
              { label: "CHAIN", value: "SOLANA", sub: "FAST & CHEAP" },
              { label: "LP", value: "BURNED 🔥", sub: "GONE FOREVER" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, boxShadow: "4px 4px 0px #aaaaaa" }}
                style={{
                  background: "#ffffff",
                  border: "2px solid #000000",
                  borderTop: "4px solid #000000",
                  padding: "24px 16px",
                  textAlign: "center",
                  transition: "all 0.15s",
                  boxShadow: "4px 4px 0px #cccccc",
                }}
              >
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", letterSpacing: "2px", color: "#888888", marginBottom: "12px" }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "var(--font-vt323)", fontSize: "28px", color: "#000000", marginBottom: "4px" }}>
                  {item.value}
                </div>
                <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#aaaaaa", letterSpacing: "1px" }}>
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ─── PFP CTA ──────────────────────────────────────────── */}
      <section className="grid-bg" style={{ padding: "80px 24px", textAlign: "center", background: "#ffffff" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="pfp-cta-box"
            style={{
              border: "2px solid #000000",
              boxShadow: "8px 8px 0px #cccccc",
              padding: "48px 32px",
              maxWidth: "600px",
              margin: "0 auto",
              background: "#f5f5f5",
              position: "relative",
            }}
          >
            {/* Terminal top bar */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              background: "#000000",
              padding: "6px 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <span style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#888888", letterSpacing: "1px" }}>pfp_generator.exe</span>
              <span style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#888888" }}>[ _ ][ □ ][ ✕ ]</span>
            </div>
            <div style={{ marginTop: "24px" }}>
              <h2
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "clamp(12px, 2.5vw, 18px)",
                  color: "#000000",
                  marginBottom: "16px",
                  letterSpacing: "1px",
                  lineHeight: 1.8,
                }}
              >
                SHOW_THE_WORLD_YOU_ARE
                <br />
                <span style={{ textShadow: "2px 2px 0px #cccccc" }}>#opentowork</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-vt323)",
                  fontSize: "20px",
                  color: "#555555",
                  marginBottom: "28px",
                  letterSpacing: "1px",
                }}
              >
                {">"} Upload your PFP. Get the frame. Join the grind.
              </p>
              <motion.a
                href="/pfp"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="pixel-btn"
                style={{ fontSize: "9px" }}
              >
                MAKE_MY_PFP.exe →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────── */}
      <footer
        style={{
          background: "#000000",
          borderTop: "2px solid #000000",
          padding: "48px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "28px",
            color: "#ffffff",
            marginBottom: "8px",
            letterSpacing: "4px",
            textShadow: "2px 2px 0px #333333",
          }}
        >
          $WORK
        </div>
        <div style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "7px",
          color: "#555555",
          marginBottom: "28px",
          letterSpacing: "2px",
        }}>
          ALWAYS_WORKING.exe · NEVER_EARNING.sol
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "32px", marginBottom: "28px", flexWrap: "wrap" }}>
          {[
            { label: "TELEGRAM", href: "#" },
            { label: "X_TWITTER", href: "#" },
            { label: "DEXSCREENER", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "8px",
                color: "#555555",
                textDecoration: "none",
                letterSpacing: "1px",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#ffffff"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#555555"; }}
            >
              {">"} {link.label}
            </a>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-pixel)", fontSize: "6px", color: "#333333", letterSpacing: "1px", lineHeight: 2.5 }}>
          © 2026 $WORK · ALL_RIGHTS_RESERVED · CURRENTLY{" "}
          <span style={{ color: "#ffffff" }}>#opentowork</span>
        </p>
        <p style={{ fontFamily: "var(--font-pixel)", fontSize: "5px", color: "#222222", marginTop: "8px", letterSpacing: "1px", lineHeight: 2.5 }}>
          $WORK IS A MEME TOKEN WITH NO INTRINSIC VALUE. FOR ENTERTAINMENT PURPOSES ONLY.
        </p>
      </footer>
    </main>
  );
}
