export function CheckpointVisual() {
  return (
    <div
      className="checkpoint-visual"
      role="img"
      aria-label="A verified checkpoint separates an active coding-agent session from a restore-ready project state."
    >
      <div className="visual-grid" aria-hidden="true" />
      <svg
        aria-hidden="true"
        className="absolute inset-0 size-full overflow-visible"
        viewBox="0 0 720 590"
        fill="none"
      >
        <defs>
          <linearGradient id="pathGradient" x1="62" y1="315" x2="680" y2="315" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF8F3F" stopOpacity="0" />
            <stop offset=".34" stopColor="#FFB454" />
            <stop offset=".53" stopColor="#65F2B1" />
            <stop offset="1" stopColor="#65F2B1" stopOpacity=".16" />
          </linearGradient>
          <radialGradient id="floorGlow">
            <stop stopColor="#65F2B1" stopOpacity=".34" />
            <stop offset="1" stopColor="#65F2B1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="428" cy="478" rx="174" ry="70" fill="url(#floorGlow)" />
        <path className="timeline-path" d="M54 318C172 316 247 376 338 338C411 307 442 269 514 284C575 297 622 333 694 331" stroke="url(#pathGradient)" strokeWidth="2" />
        <path d="M64 333C181 364 235 389 329 350" stroke="#FF9C43" strokeWidth="1" strokeDasharray="3 11" opacity=".52" />
        <g className="timeline-dots" fill="#65F2B1">
          <circle cx="505" cy="283" r="10" fillOpacity=".24" stroke="#65F2B1" />
          <circle cx="557" cy="303" r="8" fillOpacity=".23" stroke="#65F2B1" />
          <circle cx="608" cy="324" r="6" fillOpacity=".2" stroke="#65F2B1" />
          <circle cx="655" cy="332" r="4" fillOpacity=".18" stroke="#65F2B1" />
        </g>
        <g className="change-fragments" fill="#FFB454">
          <rect x="143" y="322" width="9" height="4" rx="2" />
          <rect x="166" y="334" width="15" height="5" rx="2.5" />
          <rect x="199" y="344" width="8" height="4" rx="2" />
          <rect x="220" y="355" width="20" height="5" rx="2.5" />
          <rect x="263" y="353" width="12" height="4" rx="2" />
          <rect x="289" y="346" width="18" height="5" rx="2.5" />
        </g>
        <g className="orbit" opacity=".5" stroke="#65F2B1">
          <ellipse cx="420" cy="458" rx="112" ry="35" />
          <ellipse cx="420" cy="458" rx="78" ry="23" opacity=".55" />
          <circle cx="309" cy="457" r="3" fill="#65F2B1" />
          <circle cx="492" cy="441" r="2.5" fill="#65F2B1" />
        </g>
      </svg>

      <div className="visual-label visual-label-agent" aria-hidden="true">
        <span className="label-dot bg-amber" />
        agent session
      </div>
      <div className="visual-label visual-label-checkpoint" aria-hidden="true">
        <span className="label-dot bg-mint" />
        checkpoint created
      </div>
      <div className="visual-label visual-label-restore" aria-hidden="true">
        <span className="label-dot bg-mint" />
        restore ready
      </div>

      <div className="checkpoint-shell" aria-hidden="true">
        <div className="checkpoint-echo checkpoint-echo-one" />
        <div className="checkpoint-echo checkpoint-echo-two" />
        <div className="checkpoint-core">
          <div className="checkpoint-window">
            <svg viewBox="0 0 68 68" className="size-12" fill="none">
              <path d="m34 8 22 13v26L34 60 12 47V21L34 8Z" fill="#65F2B1" fillOpacity=".18" stroke="#98F7C9" />
              <path d="m12 21 22 13 22-13M34 34v26" stroke="#B8FFDC" strokeOpacity=".85" />
              <path d="m34 18 13 8v16l-13 8-13-8V26l13-8Z" fill="#65F2B1" fillOpacity=".78" />
            </svg>
          </div>
        </div>
      </div>

      <div className="state-cube state-cube-one" aria-hidden="true" />
      <div className="state-cube state-cube-two" aria-hidden="true" />
    </div>
  );
}
