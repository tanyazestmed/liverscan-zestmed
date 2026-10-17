// มาสคอทตับ 4 ระยะ: 1 ตับปกติ → 2 ไขมันพอกตับ → 3 พังผืด → 4 ตับแข็ง

const LIVER =
  "M20 72 C18 36 60 18 106 24 C142 28 176 30 189 46 C197 57 186 70 166 80 C141 93 116 111 92 135 C79 148 60 151 45 141 C25 127 21 102 20 72 Z";

const fills = ["#EE8B74", "#F3BA5C", "#BE6A50", "#7D4636"];

export default function LiverMascot({ stage }: { stage: 1 | 2 | 3 | 4 }) {
  const fill = fills[stage - 1];
  const clip = `liver-clip-${stage}`;

  return (
    <svg viewBox="0 0 210 170" className="h-auto w-full" role="img" aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <path d={LIVER} />
        </clipPath>
      </defs>

      {/* เงาใต้ตัว */}
      <ellipse cx="100" cy="160" rx={stage === 1 ? 62 : 54} ry="6" fill="#173B57" opacity="0.12" />

      {/* ตัวตับ */}
      <path d={LIVER} fill={fill} />

      <g clipPath={`url(#${clip})`}>
        {/* ไฮไลต์ด้านบน */}
        <ellipse cx="70" cy="40" rx="38" ry="12" fill="#fff" opacity={stage === 4 ? 0.08 : 0.28} />

        {stage === 2 && (
          <g fill="#FCE3A3">
            <circle cx="45" cy="60" r="8" />
            <circle cx="140" cy="45" r="7" />
            <circle cx="160" cy="62" r="5" />
            <circle cx="50" cy="112" r="7" />
            <circle cx="125" cy="98" r="6" />
            <circle cx="35" cy="88" r="5" />
            <circle cx="98" cy="40" r="5" />
            <circle cx="80" cy="128" r="5" />
          </g>
        )}

        {stage === 3 && (
          <g fill="none" stroke="#F4D3C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 58 L42 66 L36 74 L48 82" />
            <path d="M130 40 L142 48 L136 56 L150 60" />
            <path d="M118 100 L128 96 L126 108" />
            <path d="M42 112 L54 108 L52 122" />
          </g>
        )}

        {stage === 4 && (
          <g fill="#5E3226" stroke="#9A5A46" strokeWidth="2">
            {[
              [36, 52], [56, 40], [82, 34], [110, 34], [138, 40], [162, 50], [178, 54],
              [30, 82], [46, 118], [64, 136], [86, 126], [112, 104], [140, 84], [158, 70],
              [40, 100], [128, 62], [150, 98],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 8 : 6} />
            ))}
          </g>
        )}
      </g>

      {/* ใบหน้า */}
      {stage === 1 && (
        <g>
          <path d="M64 80 Q72 70 80 80" stroke="#173B57" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M100 78 Q108 68 116 78" stroke="#173B57" strokeWidth="4" fill="none" strokeLinecap="round" />
          <ellipse cx="60" cy="94" rx="8" ry="5" fill="#FF6F8A" opacity="0.55" />
          <ellipse cx="122" cy="92" rx="8" ry="5" fill="#FF6F8A" opacity="0.55" />
          <path d="M76 96 Q90 114 104 95 Z" fill="#173B57" />
          <path d="M83 104 Q90 110 97 103" fill="#FF8FA3" />
          {/* ประกายวิ้ง */}
          <g fill="#62BFAE">
            <path d="M178 14 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" />
            <path d="M12 30 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 Z" />
          </g>
          <path d="M160 100 c0 -6 8 -6 8 0 c0 -6 8 -6 8 0 c0 6 -8 11 -8 14 c0 -3 -8 -8 -8 -14 Z" fill="#FF6F8A" />
        </g>
      )}

      {stage === 2 && (
        <g>
          <circle cx="72" cy="78" r="5.5" fill="#173B57" />
          <circle cx="108" cy="76" r="5.5" fill="#173B57" />
          <circle cx="74" cy="76" r="1.8" fill="#fff" />
          <circle cx="110" cy="74" r="1.8" fill="#fff" />
          <path d="M76 102 q5 -5 10 0 t10 0 t10 0" stroke="#173B57" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* เหงื่อตก */}
          <path d="M132 58 q6 10 0 14 q-6 -4 0 -14 Z" fill="#7CC8F0" />
        </g>
      )}

      {stage === 3 && (
        <g>
          <path d="M62 73 L80 67" stroke="#173B57" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M118 73 L100 67" stroke="#173B57" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="72" cy="82" r="5" fill="#173B57" />
          <circle cx="108" cy="82" r="5" fill="#173B57" />
          <path d="M78 108 Q90 98 102 108" stroke="#173B57" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* พลาสเตอร์ */}
          <g transform="rotate(-25 150 62)">
            <rect x="132" y="54" width="36" height="14" rx="7" fill="#F7E1C8" />
            <rect x="144" y="54" width="12" height="14" fill="#EBCBA8" />
          </g>
        </g>
      )}

      {stage === 4 && (
        <g>
          <path d="M64 74 l12 12 M76 74 l-12 12" stroke="#F6E6DE" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M102 72 l12 12 M114 72 l-12 12" stroke="#F6E6DE" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M76 114 Q90 100 104 114" stroke="#F6E6DE" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* น้ำตา */}
          <path d="M68 90 q6 12 0 16 q-6 -4 0 -16 Z" fill="#7CC8F0" />
          {/* เมฆหมองบนหัว */}
          <g fill="#9AA8B4">
            <circle cx="150" cy="18" r="9" />
            <circle cx="162" cy="14" r="11" />
            <circle cx="175" cy="19" r="8" />
            <rect x="148" y="18" width="30" height="9" rx="4.5" />
          </g>
          <path d="M156 30 l-3 8 M166 31 l-3 8 M176 30 l-3 8" stroke="#7CC8F0" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}
