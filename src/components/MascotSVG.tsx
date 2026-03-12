export default function MascotSVG() {
  return (
    <svg
      width="320"
      height="360"
      viewBox="0 0 320 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", margin: "0 auto" }}
    >
      {/* OpenToWork green halo/circle frame around head */}
      <circle
        cx="160"
        cy="58"
        r="50"
        stroke="#40B385"
        strokeWidth="10"
        fill="none"
        strokeDasharray="none"
      />
      {/* #OpenToWork label on the circle */}
      <path
        id="haloText"
        d="M 115,75 A 48,48 0 0,0 205,75"
        fill="none"
      />
      <text
        fontSize="9.5"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fill="#40B385"
        textAnchor="middle"
      >
        <textPath href="#haloText" startOffset="50%">
          #OpenToWork
        </textPath>
      </text>

      {/* Head (circle, crude) */}
      <circle
        cx="160"
        cy="58"
        r="28"
        stroke="#1C1C1C"
        strokeWidth="3.5"
        fill="#F3F2EF"
        strokeLinecap="round"
      />

      {/* Eyes — tired/desperate */}
      <line x1="150" y1="53" x2="154" y2="53" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
      <line x1="166" y1="53" x2="170" y2="53" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />

      {/* Bags under eyes */}
      <path d="M149 57 Q152 59 155 57" stroke="#1C1C1C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M165 57 Q168 59 171 57" stroke="#1C1C1C" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Mouth — forced smile */}
      <path d="M152 68 Q160 74 168 68" stroke="#1C1C1C" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Sweat drop */}
      <ellipse cx="183" cy="48" rx="4" ry="6" fill="#0077B5" opacity="0.7" />
      <path d="M183 42 Q186 38 183 35 Q180 38 183 42" fill="#0077B5" opacity="0.7" />

      {/* Neck */}
      <line x1="160" y1="86" x2="160" y2="100" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />

      {/* Tie */}
      <polygon points="157,100 163,100 165,122 160,128 155,122" fill="#0077B5" />
      <polygon points="157,100 163,100 161,108 159,108" fill="#0A66C2" />

      {/* Body / torso */}
      <line x1="160" y1="100" x2="160" y2="180" stroke="#1C1C1C" strokeWidth="4" strokeLinecap="round" />

      {/* Left arm — bent, typing on keyboard */}
      <line x1="160" y1="115" x2="120" y2="148" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="120" y1="148" x2="108" y2="180" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />

      {/* Right arm — also typing, holding coffee */}
      <line x1="160" y1="115" x2="200" y2="145" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="200" y1="145" x2="210" y2="175" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />

      {/* Coffee mug */}
      <rect x="205" y="175" width="22" height="26" rx="3" stroke="#1C1C1C" strokeWidth="2.5" fill="#F3F2EF" />
      <path d="M227 181 Q237 181 237 188 Q237 195 227 195" stroke="#1C1C1C" strokeWidth="2" fill="none" />
      {/* Steam from coffee */}
      <path d="M211 173 Q213 167 211 161" stroke="#86888A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M218 172 Q220 165 218 159" stroke="#86888A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <text x="207" y="191" fontSize="7" fill="#0077B5" fontFamily="Arial" fontWeight="bold">☕</text>

      {/* Desk */}
      <rect x="60" y="200" width="240" height="8" rx="4" fill="#1C1C1C" opacity="0.85" />
      <line x1="80" y1="208" x2="80" y2="235" stroke="#1C1C1C" strokeWidth="4" strokeLinecap="round" />
      <line x1="280" y1="208" x2="280" y2="235" stroke="#1C1C1C" strokeWidth="4" strokeLinecap="round" />

      {/* Chair legs */}
      <line x1="160" y1="180" x2="140" y2="210" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
      <line x1="160" y1="180" x2="180" y2="210" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
      <line x1="140" y1="210" x2="125" y2="220" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
      <line x1="180" y1="210" x2="195" y2="220" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />

      {/* Computer monitor on desk */}
      <rect x="115" y="155" width="90" height="60" rx="4" stroke="#1C1C1C" strokeWidth="3" fill="#0077B5" opacity="0.9" />
      {/* Monitor stand */}
      <line x1="160" y1="215" x2="160" y2="225" stroke="#1C1C1C" strokeWidth="3" />
      <line x1="148" y1="225" x2="172" y2="225" stroke="#1C1C1C" strokeWidth="3" strokeLinecap="round" />
      {/* Screen content - LinkedIn-looking UI */}
      <rect x="120" y="160" width="80" height="50" rx="2" fill="#EEF3F8" />
      {/* Tiny LinkedIn UI on screen */}
      <text x="123" y="173" fontSize="6.5" fill="#0077B5" fontFamily="Arial" fontWeight="bold">LinkedIn</text>
      <rect x="122" y="176" width="55" height="4" rx="2" fill="#0077B5" opacity="0.3" />
      <rect x="122" y="183" width="40" height="4" rx="2" fill="#0077B5" opacity="0.2" />
      <rect x="122" y="190" width="48" height="4" rx="2" fill="#40B385" opacity="0.4" />
      <text x="123" y="203" fontSize="5.5" fill="#40B385" fontFamily="Arial" fontWeight="bold">#OpenToWork</text>

      {/* Keyboard on desk */}
      <rect x="108" y="200" width="84" height="12" rx="3" fill="#86888A" opacity="0.5" />
      <rect x="108" y="200" width="84" height="12" rx="3" stroke="#1C1C1C" strokeWidth="1.5" fill="none" />
      {/* keyboard keys */}
      {[0,1,2,3,4,5,6].map((i) => (
        <rect key={i} x={112 + i*11} y={203} width="8" height="6" rx="1" fill="#F3F2EF" opacity="0.7" />
      ))}

      {/* Legs */}
      <line x1="152" y1="180" x2="145" y2="215" stroke="#1C1C1C" strokeWidth="4" strokeLinecap="round" />
      <line x1="168" y1="180" x2="175" y2="215" stroke="#1C1C1C" strokeWidth="4" strokeLinecap="round" />

      {/* Shoes */}
      <ellipse cx="141" cy="218" rx="10" ry="5" fill="#1C1C1C" />
      <ellipse cx="179" cy="218" rx="10" ry="5" fill="#1C1C1C" />

      {/* Thought bubble — "$WORK" */}
      <circle cx="195" cy="30" r="4" fill="#1C1C1C" opacity="0.15" />
      <circle cx="205" cy="20" r="6" fill="#1C1C1C" opacity="0.15" />
      <circle cx="218" cy="10" r="9" fill="#1C1C1C" opacity="0.15" />
      <text x="210" y="13" fontSize="8" fill="#0077B5" fontFamily="Arial" fontWeight="bold" textAnchor="middle">$WORK</text>
    </svg>
  );
}
