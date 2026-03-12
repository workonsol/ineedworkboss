"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

export default function PFPGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasImage, setHasImage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const applyFrame = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const SIZE = 500;
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        ctx.save();
        ctx.beginPath();
        ctx.arc(SIZE / 2, SIZE / 2, SIZE / 2, 0, Math.PI * 2);
        ctx.clip();

        const scale = Math.max(SIZE / img.width, SIZE / img.height);
        const sw = SIZE / scale;
        const sh = SIZE / scale;
        const sx = (img.width - sw) / 2;
        const sy = (img.height - sh) / 2;
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, SIZE, SIZE);
        ctx.restore();

        const overlay = new Image();
        overlay.onload = () => {
          ctx.drawImage(overlay, 0, 0, SIZE, SIZE);
          setHasImage(true);
        };
        overlay.src = "/opentowork-overlay.png";
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    applyFrame(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.download = "opentowork-pfp.png";
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  return (
    <div
      className="grid-bg hero-padding"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        paddingTop: "100px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Boot label */}
        <div style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#888888", letterSpacing: "3px", marginBottom: "14px" }}>
          // PFP_GENERATOR.exe
        </div>

        {/* Status badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid #000000",
            color: "#000000",
            fontFamily: "var(--font-pixel)",
            fontSize: "7px",
            padding: "7px 16px",
            letterSpacing: "2px",
            marginBottom: "24px",
            boxShadow: "2px 2px 0px #cccccc",
            background: "#ffffff",
          }}
        >
          <span style={{ width: 8, height: 8, background: "#000000", display: "inline-block", borderRadius: "50%" }} />
          $WORK PFP GENERATOR
        </div>

        <h1
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "clamp(18px, 4vw, 30px)",
            color: "#000000",
            lineHeight: 1.6,
            marginBottom: "16px",
            letterSpacing: "2px",
            textShadow: "2px 2px 0px #cccccc",
          }}
        >
          MAKE_YOURSELF
          <br />
          <span>#opentowork</span>
        </h1>

        <p style={{ fontFamily: "var(--font-vt323)", fontSize: "20px", color: "#555555", marginBottom: "40px", lineHeight: 1.8, letterSpacing: "1px" }}>
          {">"} Upload your PFP. Get the frame. Join the workforce.
          <br />
          {">"} 100% free. No data stored. No excuses.
        </p>

        {/* Upload Zone */}
        <div
          onDrop={handleDrop}
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onClick={() => document.getElementById("pfp-input")?.click()}
          style={{
            border: `2px dashed ${isDragging ? "#000000" : "#cccccc"}`,
            padding: "44px 24px",
            cursor: "pointer",
            background: isDragging ? "rgba(0,0,0,0.04)" : "#f5f5f5",
            transition: "all 0.15s",
            marginBottom: "32px",
            boxShadow: isDragging ? "4px 4px 0px #aaaaaa" : "4px 4px 0px #eeeeee",
            position: "relative",
          }}
        >
          {/* Pixel corner accents */}
          {["topLeft","topRight","bottomLeft","bottomRight"].map((pos) => (
            <div key={pos} style={{
              position: "absolute",
              ...(pos.includes("top") ? { top: -2 } : { bottom: -2 }),
              ...(pos.includes("Left") ? { left: -2 } : { right: -2 }),
              width: 10, height: 10,
              borderTop: pos.includes("top") ? `2px solid ${isDragging ? "#000000" : "#aaaaaa"}` : undefined,
              borderBottom: pos.includes("bottom") ? `2px solid ${isDragging ? "#000000" : "#aaaaaa"}` : undefined,
              borderLeft: pos.includes("Left") ? `2px solid ${isDragging ? "#000000" : "#aaaaaa"}` : undefined,
              borderRight: pos.includes("Right") ? `2px solid ${isDragging ? "#000000" : "#aaaaaa"}` : undefined,
              background: "#ffffff",
            }} />
          ))}

          <div style={{ fontFamily: "var(--font-pixel)", fontSize: "24px", marginBottom: "14px" }}>📎</div>
          <p style={{ fontFamily: "var(--font-pixel)", fontSize: "9px", color: isDragging ? "#000000" : "#555555", marginBottom: "8px", letterSpacing: "1px", lineHeight: 2 }}>
            DROP_PFP_HERE.png
          </p>
          <p style={{ fontFamily: "var(--font-vt323)", fontSize: "16px", color: "#aaaaaa", letterSpacing: "1px" }}>
            or click to upload · PNG, JPG, GIF · square works best
          </p>
          <input id="pfp-input" type="file" accept="image/*" onChange={handleInputChange} style={{ display: "none" }} />
        </div>

        {/* Canvas Preview */}
        {hasImage && (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
            <div style={{ marginBottom: "28px", display: "flex", justifyContent: "center" }}>
              <div style={{
                border: "3px solid #000000",
                boxShadow: "6px 6px 0px #cccccc",
                background: "#f5f5f5",
                padding: "6px",
                display: "inline-block",
                borderRadius: "50%",
              }}>
                <canvas
                  ref={canvasRef}
                  style={{ width: "280px", height: "280px", borderRadius: "50%", display: "block", imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="pixel-btn"
              style={{ fontSize: "9px", display: "block", margin: "0 auto 12px" }}
            >
              ⬇ DOWNLOAD_PFP.png
            </motion.button>

            <p style={{ fontFamily: "var(--font-pixel)", fontSize: "7px", color: "#aaaaaa", marginTop: "16px", letterSpacing: "1px" }}>
              {">"} upload a different image to start over
            </p>
          </motion.div>
        )}

        {!hasImage && <canvas ref={canvasRef} style={{ display: "none" }} />}

        {/* Privacy info */}
        <div style={{ marginTop: "48px", padding: "20px 24px", background: "#f5f5f5", border: "1px solid #dddddd", textAlign: "left", boxShadow: "4px 4px 0px #eeeeee" }}>
          <div style={{ fontFamily: "var(--font-pixel)", fontSize: "6px", color: "#888888", letterSpacing: "2px", marginBottom: "10px" }}>
            // PRIVACY.log
          </div>
          <p style={{ fontFamily: "var(--font-vt323)", fontSize: "18px", color: "#555555", lineHeight: 1.8, letterSpacing: "1px" }}>
            🔒 <span style={{ color: "#000000", fontWeight: 700 }}>PRIVACY_FIRST:</span> Your image never leaves your device. All processing runs in your browser. We don&apos;t see, store, or touch your PFP.
          </p>
        </div>

        {/* Back link */}
        <div style={{ marginTop: "32px" }}>
          <a
            href="/"
            style={{ fontFamily: "var(--font-pixel)", fontSize: "8px", color: "#aaaaaa", textDecoration: "none", letterSpacing: "1px", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.target as HTMLElement).style.color = "#000000"}
            onMouseLeave={(e) => (e.target as HTMLElement).style.color = "#aaaaaa"}
          >
            {"<"} BACK_TO_$WORK
          </a>
        </div>
      </motion.div>
    </div>
  );
}
