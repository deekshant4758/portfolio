import type { Project } from "@/lib/data";

type ProjectVisualProps = {
  variant: Project["visual"];
  index: string;
  year: string;
};

const stroke = "#3a3a40";
const faint = "#232327";
const accent = "#9db4ff";

function QueueVisual() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="queue-fade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#9db4ff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#9db4ff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="480" height="300" fill="url(#queue-fade)" />
      {[0, 1, 2, 3, 4, 5].map((row) => (
        <line key={row} x1="0" y1={40 + row * 44} x2="480" y2={40 + row * 44} stroke={faint} />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((col) => (
        <line key={col} x1={36 + col * 46} y1="0" x2={36 + col * 46} y2="300" stroke={faint} />
      ))}

      {[0, 1, 2].map((item) => (
        <g key={item} transform={`translate(${54 + item * 16} ${88 + item * 46})`}>
          <rect
            width="196"
            height="38"
            rx="7"
            fill="#101014"
            stroke={item === 0 ? "#4a4a52" : stroke}
          />
          <circle cx="18" cy="19" r="4" fill={item === 0 ? accent : "#4a4a52"} />
          <rect x="34" y="12" width={104 - item * 12} height="4" rx="2" fill="#333338" />
          <rect x="34" y="22" width={72 + item * 8} height="4" rx="2" fill="#26262b" />
          <rect x="152" y="14" width="30" height="10" rx="3" stroke={faint} />
        </g>
      ))}

      <path d="M318 120 H360" stroke={stroke} strokeDasharray="4 5" />
      <path d="M318 166 H360" stroke={stroke} strokeDasharray="4 5" />
      <path d="M318 212 H360" stroke={stroke} strokeDasharray="4 5" />

      <g transform="translate(366 78)">
        <rect width="70" height="160" rx="10" fill="#0d0d10" stroke={stroke} />
        {[0, 1, 2, 3, 4].map((node) => (
          <g key={node} transform={`translate(0 ${24 + node * 26})`}>
            <rect x="0" y="0" width="70" height="18" rx="5" fill={node === 1 ? "#1a1f2e" : "#141417"} />
            <circle cx="12" cy="9" r="2.5" fill={node === 1 ? accent : "#3a3a40"} />
            <rect x="22" y="7" width={30 - node * 3} height="3" rx="1.5" fill="#2e2e33" />
          </g>
        ))}
      </g>

      <g className="animate-pulse">
        <circle cx="352" cy="120" r="3" fill={accent} />
      </g>
    </svg>
  );
}

function FlowVisual() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="flow-fade" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.11" />
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#flow-fade)" />

      <g stroke={faint}>
        <path d="M96 150 H176" />
        <path d="M176 150 C214 150 208 88 244 88" />
        <path d="M176 150 C214 150 208 212 244 212" />
        <path d="M336 88 C372 88 366 150 404 150" />
        <path d="M336 212 C372 212 366 150 404 150" />
      </g>
      <g stroke={stroke} strokeDasharray="3 4">
        <path d="M176 150 C214 150 208 88 244 88" className="animate-pulse" />
        <path d="M176 150 C214 150 208 212 244 212" />
      </g>

      <g transform="translate(48 128)">
        <rect width="48" height="44" rx="8" fill="#0f0f12" stroke="#4a4a52" />
        <rect x="12" y="15" width="24" height="4" rx="2" fill="#3a3a40" />
        <rect x="12" y="25" width="16" height="4" rx="2" fill="#2a2a2f" />
      </g>

      {[
        { x: 244, y: 64, label: "PROMPT" },
        { x: 244, y: 188, label: "IMAGE" },
      ].map((node, index) => (
        <g key={node.label} transform={`translate(${node.x} ${node.y})`}>
          <rect width="92" height="48" rx="8" fill="#101014" stroke={index === 1 ? "#4a4a52" : stroke} />
          <circle cx="16" cy="16" r="4" stroke={index === 1 ? accent : "#4a4a52"} />
          <rect x="28" y="13" width="36" height="4" rx="2" fill="#333338" />
          <text x="14" y="36" fill="#6b6b73" fontSize="7" letterSpacing="1.2" fontFamily="monospace">
            {node.label}
          </text>
        </g>
      ))}

      <g transform="translate(386 122)">
        <circle cx="26" cy="26" r="26" fill="#0f0f12" stroke="#4a4a52" />
        <circle cx="26" cy="26" r="16" stroke="#333338" strokeDasharray="2 3" />
        <circle cx="26" cy="26" r="4" fill={accent} />
      </g>
    </svg>
  );
}

function GraphVisual() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="graph-fade" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#5eead4" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#graph-fade)" />

      <g transform="translate(46 52)">
        <rect width="150" height="196" rx="10" fill="#0e0e11" stroke="#333338" />
        <rect x="18" y="20" width="58" height="5" rx="2.5" fill="#3b3b42" />
        {[0, 1, 2, 3, 4, 5, 6].map((row) => (
          <rect
            key={row}
            x="18"
            y={42 + row * 17}
            width={row % 3 === 0 ? 96 : 114 - row * 4}
            height="4"
            rx="2"
            fill="#26262b"
          />
        ))}
        <rect x="18" y="166" width="42" height="12" rx="4" stroke={faint} />
      </g>

      <g stroke="#2f2f35" strokeDasharray="3 4">
        <path d="M196 110 C246 110 250 70 300 70" />
        <path d="M196 150 C246 150 250 150 300 150" />
        <path d="M196 190 C246 190 250 230 300 230" />
      </g>

      {[
        { y: 46, w: 112, label: "RETRIEVE", active: false },
        { y: 126, w: 126, label: "RANK / FAISS", active: true },
        { y: 206, w: 104, label: "GENERATE", active: false },
      ].map((node) => (
        <g key={node.label} transform={`translate(300 ${node.y})`}>
          <rect
            width={node.w}
            height="48"
            rx="8"
            fill={node.active ? "#101619" : "#101014"}
            stroke={node.active ? "#4d6b66" : stroke}
          />
          <circle cx="16" cy="16" r="4" stroke={node.active ? "#5eead4" : "#4a4a52"} />
          <rect x="28" y="13" width="46" height="4" rx="2" fill="#333338" />
          <text x="14" y="37" fill="#6b6b73" fontSize="7" letterSpacing="1.1" fontFamily="monospace">
            {node.label}
          </text>
        </g>
      ))}

      <g transform="translate(222 262)">
        <rect width="94" height="20" rx="10" stroke={faint} fill="#0d0d10" />
        <text x="12" y="13.5" fill="#6b6b73" fontSize="7" letterSpacing="1.1" fontFamily="monospace">
          EMBED / 384D
        </text>
      </g>
    </svg>
  );
}

export function ProjectVisual({ variant, index, year }: ProjectVisualProps) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-[#0b0b0d]">
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        {variant === "queue" ? <QueueVisual /> : null}
        {variant === "flow" ? <FlowVisual /> : null}
        {variant === "graph" ? <GraphVisual /> : null}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
        <span className="rounded-sm border border-line-strong/70 bg-ink/70 px-2 py-1 font-mono text-[9px] tracking-[0.16em] text-muted uppercase backdrop-blur">
          System {index}
        </span>
        <span className="font-mono text-[9px] tracking-[0.16em] text-dim uppercase">{year}</span>
      </div>
    </div>
  );
}
