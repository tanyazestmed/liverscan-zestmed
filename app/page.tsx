const LINE_URL = "https://line.me/R/ti/p/@zestmed";
const PHONE_DISPLAY = "02-682-9151–4";
const PHONE_TEL = "tel:026829151";
const EMAIL = "support@zest-med.com";
const FACEBOOK_URL = "https://www.facebook.com/zestmed";

const highlights = [
  {
    title: "ประเมินทั้งไขมันสะสมและความแข็งของตับ",
    body: "ให้ข้อมูลการสะสมไขมันและค่าความแข็งของเนื้อตับในการตรวจครั้งเดียว ช่วยแพทย์ประเมินภาวะไขมันพอกตับและพังผืด โดยไม่ต้องเจาะชิ้นเนื้อ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 14c0-5 3-9 8-9s8 4 8 9c0 3-2 5-5 5h-6c-3 0-5-2-5-5Z" />
        <path d="M8 13l2 2 3-4 3 3" />
      </svg>
    ),
  },
  {
    title: "พกพาสะดวก พร้อมภาพช่วยนำทางขณะตรวจ",
    body: "ระบบไร้สาย น้ำหนักเบา พร้อมภาพอัลตราซาวนด์ B-mode แบบเรียลไทม์ช่วยกำหนดตำแหน่งตรวจ ใช้ได้ทั้งในโรงพยาบาล คลินิก และหน่วยบริการเคลื่อนที่",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </svg>
    ),
  },
  {
    title: "ทีม Zest-Med สนับสนุนการใช้งานในไทย",
    body: "สาธิตเครื่อง อบรมบุคลากร แนะนำการประยุกต์ใช้ในบริการของท่าน และดูแลหลังการขาย เพื่อให้สถานพยาบาลเริ่มใช้งานได้จริงอย่างมั่นใจ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 19c0-3 3-5 6-5s6 2 6 5M15 18c0-2 2-4 5-4" />
      </svg>
    ),
  },
];

const facts = [
  { label: "เทคโนโลยี", value: "Transient Elastography (TE)" },
  { label: "เวลาตรวจ", value: "ประมาณ 1 นาที" },
  { label: "การรับรอง", value: "US FDA 510(k) Clearance" },
  { label: "การรับประกัน", value: "2 ปี" },
];

const products = [
  {
    name: "เครื่อง LIVERSCAN",
    desc: "เครื่องประเมินสุขภาพตับแบบพกพา พร้อมหัวตรวจและซอฟต์แวร์รายงานผล",
    price: "ติดต่อขอใบเสนอราคา",
  },
  {
    name: "สาธิตเครื่องสำหรับสถานพยาบาล",
    desc: "ทีมงานนำเครื่องไปสาธิตถึงที่ เพื่อให้แพทย์และทีมได้ทดลองใช้งานจริง",
    price: "ติดต่อเพื่อนัดหมาย",
  },
  {
    name: "อบรมการใช้งานและบริการหลังการขาย",
    desc: "อบรมบุคลากร แนะนำการประยุกต์ใช้ และดูแลเครื่องตลอดอายุการใช้งาน",
    price: "สอบถามขอบเขตบริการ",
  },
];

const audiences = [
  "โรงพยาบาล",
  "คลินิกเฉพาะทางตับและทางเดินอาหาร",
  "คลินิกเบาหวานและเมตาบอลิก",
  "ศูนย์ตรวจสุขภาพ",
  "Wellness / Longevity Center",
];

const faqs = [
  {
    q: "LIVERSCAN ตรวจอะไรได้บ้าง",
    a: "ประเมินค่าความแข็งของเนื้อตับ (Liver Stiffness) ซึ่งสัมพันธ์กับภาวะพังผืดในตับ และค่าการสะสมไขมันในตับ ซึ่งสัมพันธ์กับภาวะไขมันพอกตับ ทั้งสองค่าได้จากการตรวจในครั้งเดียว",
  },
  {
    q: "การตรวจเจ็บไหม ใช้เวลานานแค่ไหน",
    a: "ไม่เจ็บและไม่รุกล้ำร่างกาย ผู้รับบริการเพียงนอนราบแล้ววางหัวตรวจบริเวณชายโครงขวา ใช้เวลาตรวจประมาณ 1 นาที ทราบผลได้ทันที",
  },
  {
    q: "เหมาะกับสถานพยาบาลแบบไหน",
    a: "เหมาะกับโรงพยาบาล คลินิกเฉพาะทาง คลินิกเบาหวานและเมตาบอลิก ศูนย์ตรวจสุขภาพ และศูนย์ Wellness ที่ต้องการเพิ่มบริการประเมินตับเชิงป้องกัน รวมถึงหน่วยบริการเคลื่อนที่ เนื่องจากเครื่องพกพาและไร้สาย",
  },
  {
    q: "ซื้อแล้วมีใครช่วยสอนใช้งานไหม",
    a: "มีครับ ทีม Zest-Med จะอบรมการใช้งานให้บุคลากรของท่าน แนะนำการนำผลไปใช้ และดูแลหลังการขายตลอดระยะรับประกัน 2 ปี",
  },
];

function LineIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 5.7 2 10.26c0 4.08 3.62 7.5 8.5 8.15.33.07.78.22.9.5.1.26.07.66.03.92l-.14.87c-.04.26-.2 1.01.89.55 1.09-.46 5.86-3.45 8-5.9 1.48-1.6 2.18-3.24 2.18-5.09C22.36 5.7 17.52 2 12 2Zm-3.6 10.9H6.1a.5.5 0 0 1-.5-.5V8.35a.5.5 0 1 1 1 0v3.55h1.8a.5.5 0 0 1 0 1Zm1.7-.5a.5.5 0 1 1-1 0V8.35a.5.5 0 1 1 1 0v4.05Zm4.6 0a.5.5 0 0 1-.9.3l-1.9-2.6v2.3a.5.5 0 1 1-1 0V8.35a.5.5 0 0 1 .9-.3l1.9 2.6v-2.3a.5.5 0 1 1 1 0v4.05Zm3.4-2.55a.5.5 0 0 1 0 1h-1.8v.95h1.8a.5.5 0 0 1 0 1h-2.3a.5.5 0 0 1-.5-.5V8.35a.5.5 0 0 1 .5-.5h2.3a.5.5 0 0 1 0 1h-1.8v.95h1.8Z" />
    </svg>
  );
}

function LineButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-line-green px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-line-green/30 transition hover:brightness-95 active:scale-[0.98] ${className}`}
    >
      <LineIcon className="h-6 w-6" />
      ทักไลน์เลย
    </a>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-navy">LIVERSCAN</span>
            <span className="text-sm text-muted">by Zest-Med</span>
          </a>
          <nav className="hidden gap-6 text-sm font-medium text-ink md:flex">
            <a href="#features" className="hover:text-navy">จุดเด่น</a>
            <a href="#products" className="hover:text-navy">สินค้าและบริการ</a>
            <a href="#faq" className="hover:text-navy">คำถามที่พบบ่อย</a>
            <a href="#contact" className="hover:text-navy">ติดต่อเรา</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-line-green px-4 py-2 text-sm font-semibold text-white"
          >
            <LineIcon className="h-4 w-4" />
            ทักไลน์
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section id="top" className="relative overflow-hidden bg-sky">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-mint/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="mb-3 inline-block rounded-full bg-mint/15 px-3 py-1 text-sm font-medium text-mint-dark">
              เครื่องมือแพทย์สำหรับสถานพยาบาล
            </p>
            <h1 className="text-3xl md:text-[2.75rem]">
              ประเมินสุขภาพตับ
              <br />
              ได้ใน 1 นาที โดยไม่ต้องเจาะ
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink">
              LIVERSCAN เครื่องประเมินสุขภาพตับแบบพกพา ด้วยเทคโนโลยี Transient Elastography
              วัดทั้งความแข็งของตับและไขมันสะสมในตับแบบไม่รุกล้ำ
              เพิ่มบริการดูแลสุขภาพเชิงป้องกันให้โรงพยาบาลและคลินิกของคุณ
            </p>
            <div className="mt-8">
              <LineButton className="w-full sm:w-auto" />
              <p className="mt-3 text-sm text-muted">
                สอบถามการใช้งาน • ขอใบเสนอราคา • นัดสาธิตเครื่อง
              </p>
            </div>
          </div>

          {/* ภาพประกอบแทนรูปเครื่อง (เปลี่ยนเป็นรูปจริงได้ภายหลัง) */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-white p-6 shadow-xl shadow-navy/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-navy">LIVERSCAN</span>
                <span className="rounded-full bg-mint/15 px-2 py-0.5 text-xs font-medium text-mint-dark">
                  Wireless
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-sky p-4">
                  <p className="text-xs text-muted">ความแข็งของตับ</p>
                  <p className="mt-1 text-2xl font-bold text-navy">
                    5.2 <span className="text-sm font-medium text-muted">kPa</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-sky p-4">
                  <p className="text-xs text-muted">ไขมันสะสมในตับ</p>
                  <p className="mt-1 text-2xl font-bold text-navy">
                    215 <span className="text-sm font-medium text-muted">dB/m</span>
                  </p>
                </div>
              </div>
              <div className="mt-3 flex h-28 items-end gap-1 rounded-2xl bg-navy p-3">
                {[30, 55, 40, 70, 60, 85, 50, 65, 45, 75, 35, 60].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-mint/80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-3 text-center text-xs text-muted">ตัวอย่างหน้าจอแสดงผล (ภาพจำลอง)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Facts strip ===== */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-sm text-muted">{f.label}</p>
              <p className="font-semibold text-navy">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Highlights ===== */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl">ทำไมสถานพยาบาลจึงเลือก LIVERSCAN</h2>
        <p className="mt-3 max-w-2xl text-muted">
          ออกแบบให้ใช้งานง่ายในงานประจำวัน และมีทีมงานในประเทศไทยช่วยดูแลตั้งแต่วันแรก
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="rounded-3xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint/15 text-mint-dark [&>svg]:h-7 [&>svg]:w-7">
                {h.icon}
              </div>
              <h3 className="mt-5 text-lg">{h.title}</h3>
              <p className="mt-2 text-muted">{h.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Audiences ===== */}
      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl md:text-3xl">เหมาะกับสถานพยาบาลแบบไหน</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-white px-4 py-2 font-medium text-navy"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 max-w-2xl text-muted">
            นำไปใช้ในโปรแกรมตรวจสุขภาพ ติดตามผู้ป่วยไขมันพอกตับ (MASLD) ผู้ป่วยเบาหวาน
            และการติดตามผลระหว่างการรักษาด้านเมตาบอลิก
          </p>
        </div>
      </section>

      {/* ===== Products ===== */}
      <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl">สินค้าและบริการ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {products.map((p) => (
            <div key={p.name} className="flex flex-col rounded-3xl border border-line bg-white p-6">
              <h3 className="text-lg">{p.name}</h3>
              <p className="mt-2 flex-1 text-muted">{p.desc}</p>
              <p className="mt-5 inline-block self-start rounded-full bg-sky px-4 py-1.5 font-semibold text-navy">
                {p.price}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-3xl bg-navy p-8 text-center text-white md:p-10">
          <h2 className="text-2xl text-white">อยากเห็นเครื่องจริง? นัดสาธิตถึงที่ได้เลย</h2>
          <p className="mx-auto mt-2 max-w-xl text-white/80">
            ทีม Zest-Med พร้อมนำเครื่องไปสาธิตที่สถานพยาบาลของคุณ ไม่มีค่าใช้จ่าย
          </p>
          <div className="mt-6">
            <LineButton />
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="bg-sky">
        <div className="mx-auto max-w-3xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl">คำถามที่พบบ่อย</h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-line bg-white p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  {f.q}
                  <span className="shrink-0 text-mint-dark transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl">ติดต่อเรา</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-mint"
            >
              <LineIcon className="h-8 w-8 text-line-green" />
              <div>
                <p className="text-sm text-muted">LINE Official Account</p>
                <p className="font-semibold text-navy">@zestmed</p>
              </div>
            </a>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-mint"
            >
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-muted">โทรศัพท์สำนักงาน</p>
                <p className="font-semibold text-navy">{PHONE_DISPLAY}</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-mint"
            >
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-sm text-muted">อีเมล</p>
                <p className="font-semibold text-navy">{EMAIL}</p>
              </div>
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-line p-4 transition hover:border-mint"
            >
              <span className="text-2xl">👍</span>
              <div>
                <p className="text-sm text-muted">Facebook</p>
                <p className="font-semibold text-navy">facebook.com/zestmed</p>
              </div>
            </a>
          </div>
          <div className="rounded-3xl bg-sky p-6">
            <p className="font-semibold text-navy">บริษัท เซสท์-เมด จำกัด</p>
            <p className="mt-2 text-muted">
              896/1-2 อาคารสำนักงาน เอส วี ซิตี้ ทาวเวอร์ 1 ชั้น 3 ถนนพระราม 3
              แขวงบางโพงพาง เขตยานนาวา กรุงเทพฯ 10120
            </p>
            <p className="mt-4 font-semibold text-navy">เวลาทำการ</p>
            <p className="text-muted">จันทร์–ศุกร์ เวลา 08:30–17:30 น.</p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-line bg-white pb-24 md:pb-8">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted">
          <p className="font-semibold text-navy">LIVERSCAN by Zest-Med</p>
          <p className="mt-1">
            จัดจำหน่ายโดย บริษัท เซสท์-เมด จำกัด ผู้แทนจำหน่ายอย่างเป็นทางการในประเทศไทย
          </p>
          <p className="mt-3">
            เครื่องมือแพทย์ ใช้ภายใต้การดูแลของบุคลากรทางการแพทย์ ผลการตรวจเป็นข้อมูลประกอบการวินิจฉัยของแพทย์
          </p>
          <p className="mt-3">© 2026 Zest-Med Co., Ltd.</p>
        </div>
      </footer>

      {/* ===== ปุ่ม LINE ลอยบนมือถือ ===== */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </main>
  );
}
