import Image from "next/image";
import DevicePopup from "./components/DevicePopup";
import ZoomImage from "./components/ZoomImage";
import LiverMascot from "./components/LiverMascot";
import deviceBadge from "@/public/images/device-badge.webp";
import lsmMap from "@/public/images/lsm-map.webp";
import bmode from "@/public/images/bmode.webp";
import preventive from "@/public/images/preventive-screening.webp";
import portable from "@/public/images/portable.webp";
import auroc092 from "@/public/images/auroc-092.webp";
import auroc097 from "@/public/images/auroc-097.webp";
import paired from "@/public/images/paired-fibroscan.webp";
import aiQc from "@/public/images/ai-qc.webp";
import masld from "@/public/images/masld.webp";
import glp1 from "@/public/images/glp1.webp";
import fdaLogo from "@/public/images/fda.webp";
import zestmedLogo from "@/public/images/zestmed-logo.png";

const LINE_URL = "https://line.me/R/ti/p/@zestmed";
const PHONE_DISPLAY = "02-682-9151–4";
const PHONE_TEL = "tel:026829151";
const EMAIL = "support@zest-med.com";
const FACEBOOK_URL = "https://www.facebook.com/zestmed";

const highlights = [
  {
    title: "ประเมินทั้งไขมันสะสมและความแข็งของตับ",
    body: "ให้ข้อมูลการสะสมไขมันและค่าความแข็งของเนื้อตับในการตรวจครั้งเดียว ช่วยแพทย์ประเมินภาวะไขมันพอกตับและพังผืด โดยไม่ต้องเจาะชิ้นเนื้อ",
    image: lsmMap,
    alt: "LIVERSCAN วัดค่า LSM และ MAP ในการตรวจครั้งเดียว",
  },
  {
    title: "พกพาสะดวก พร้อมภาพช่วยนำทางขณะตรวจ",
    body: "ระบบไร้สาย น้ำหนักเบา พร้อมภาพอัลตราซาวนด์ B-mode แบบเรียลไทม์ช่วยกำหนดตำแหน่งตรวจ ใช้ได้ทั้งในโรงพยาบาล คลินิก และหน่วยบริการเคลื่อนที่",
    image: bmode,
    alt: "ภาพ B-mode แบบเรียลไทม์ช่วยกำหนดตำแหน่งตรวจ",
  },
  {
    title: "ทีม Zest-Med สนับสนุนการใช้งานในไทย",
    body: "สาธิตเครื่อง อบรมบุคลากร แนะนำการประยุกต์ใช้ในบริการของท่าน และดูแลหลังการขาย เพื่อให้สถานพยาบาลเริ่มใช้งานได้จริงอย่างมั่นใจ",
    image: preventive,
    alt: "เจ้าหน้าที่ใช้ LIVERSCAN ตรวจผู้รับบริการ",
  },
];

const facts = [
  { label: "เทคโนโลยี", value: "Transient Elastography (TE)" },
  { label: "เวลาตรวจ", value: "ประมาณ 1 นาที" },
  { label: "แบตเตอรี่", value: "ใช้งานได้ ≥ 4 ชั่วโมง" },
  { label: "การรับประกัน", value: "2 ปี" },
];

const stages = [
  {
    name: "ตับปกติ",
    status: "สุขภาพดี",
    desc: "ไม่มีไขมันสะสมเกิน ไม่มีพังผืด ตับทำงานได้เต็มที่",
    measure: "",
    card: "border-mint/40 bg-mint/5",
    dot: "bg-mint",
    tag: "bg-mint/15 text-mint-dark",
  },
  {
    name: "ไขมันพอกตับ",
    status: "ระยะเริ่มต้น • ฟื้นฟูได้",
    desc: "ไขมันสะสมในเซลล์ตับ มักไม่มีอาการ ปรับพฤติกรรมแล้วกลับมาดีได้",
    measure: "LIVERSCAN วัดไขมันในตับ (MAP)",
    card: "border-[#F3BA5C]/50 bg-[#F3BA5C]/5",
    dot: "bg-[#E9A23B]",
    tag: "bg-[#F3BA5C]/20 text-[#9A6412]",
  },
  {
    name: "พังผืดในตับ",
    status: "ต้องดูแลใกล้ชิด",
    desc: "ตับอักเสบต่อเนื่องจนเกิดพังผืด ยังชะลอหรือดีขึ้นได้หากรักษาทัน",
    measure: "LIVERSCAN วัดความแข็งของตับ (LSM)",
    card: "border-[#BE6A50]/40 bg-[#BE6A50]/5",
    dot: "bg-[#BE6A50]",
    tag: "bg-[#BE6A50]/15 text-[#8A3F28]",
  },
  {
    name: "ตับแข็ง",
    status: "ระยะรุนแรง",
    desc: "พังผืดสะสมจนเนื้อตับแข็ง เสี่ยงภาวะแทรกซ้อนรุนแรง ฟื้นฟูได้ยาก",
    measure: "",
    card: "border-[#7D4636]/40 bg-[#7D4636]/5",
    dot: "bg-[#7D4636]",
    tag: "bg-[#7D4636]/15 text-[#5E3226]",
  },
];

const evidence = [
  { value: "0.97", label: "AUROC ตรวจพบภาวะตับแข็ง (F4)", image: auroc097 },
  { value: "0.92", label: "AUROC ตรวจพบไขมันพอกตับ (≥S1)", image: auroc092 },
  { value: "1,455", label: "คู่การตรวจเทียบกับ FibroScan®", image: paired },
  { value: "> 90%", label: "อัตราตรวจสำเร็จ ด้วย AI Quality Control", image: aiQc },
];

const useCases = [
  {
    title: "ไขมันพอกตับ (MASLD)",
    body: "คัดกรองและติดตามผู้ที่มีความเสี่ยงไขมันพอกตับได้เร็วขึ้น",
    image: masld,
  },
  {
    title: "GLP-1 และการรักษาเมตาบอลิก",
    body: "ติดตามการเปลี่ยนแปลงของไขมันในตับระหว่างการควบคุมน้ำหนักและการรักษา",
    image: glp1,
  },
  {
    title: "ตรวจสุขภาพเชิงป้องกัน",
    body: "เพิ่มรายการตรวจตับในโปรแกรมตรวจสุขภาพ Wellness และ Longevity",
    image: preventive,
  },
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
            <a href="#stages" className="hover:text-navy">ตับ 4 ระยะ</a>
            <a href="#features" className="hover:text-navy">จุดเด่น</a>
            <a href="#evidence" className="hover:text-navy">งานวิจัย</a>
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
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-24">
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

          <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            <button
              type="button"
              data-open-device
              className="group block w-full cursor-pointer"
              aria-label="ดูรายละเอียดเครื่อง LIVERSCAN"
            >
              <Image
                src={deviceBadge}
                alt="เครื่อง LIVERSCAN หัวตรวจไร้สาย"
                priority
                sizes="(max-width: 768px) 90vw, 448px"
                className="h-auto w-full rounded-full shadow-2xl shadow-navy/20 transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-navy shadow-lg">
                👆 แตะเพื่อดูเครื่อง
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== Facts strip ===== */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-5 md:items-center">
          {facts.map((f) => (
            <div key={f.label}>
              <p className="text-sm text-muted">{f.label}</p>
              <p className="font-semibold text-navy">{f.value}</p>
            </div>
          ))}
          <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-sky p-3 md:col-span-1">
            <Image src={fdaLogo} alt="US FDA" className="h-11 w-11 shrink-0 rounded-lg bg-white" />
            <div className="text-sm leading-snug">
              <p className="font-semibold text-navy">FDA 510(k) Cleared</p>
              <p className="text-muted">K233401 • K242496</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Liver stages (mascots) ===== */}
      <section id="stages" className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="text-sm font-medium text-mint-dark">ตับ 4 ระยะ</p>
          <h2 className="mt-1 text-2xl md:text-3xl">ตับไม่เคยบ่น… จนวันที่สายเกินไป</h2>
          <p className="mt-3 max-w-2xl text-muted">
            ไขมันพอกตับและพังผืดระยะแรกมักไม่มีอาการ ผู้รับบริการส่วนใหญ่จึงไม่รู้ตัว
            การตรวจคัดกรองช่วยให้รู้ทันตั้งแต่ระยะที่ยังกลับมาดีได้
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stages.map((s, i) => (
              <article
                key={s.name}
                className={`relative flex flex-col rounded-3xl border p-4 md:p-5 ${s.card}`}
              >
                <span
                  className={`absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold text-white ${s.dot}`}
                >
                  {i + 1}
                </span>
                <div className={`mx-auto w-full max-w-[180px] ${i === 0 ? "motion-safe:animate-float" : ""}`}>
                  <LiverMascot stage={(i + 1) as 1 | 2 | 3 | 4} />
                </div>
                <h3 className="mt-2 text-lg">{s.name}</h3>
                <span className={`mt-1 self-start rounded-full px-2.5 py-0.5 text-xs font-semibold ${s.tag}`}>
                  {s.status}
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                {s.measure && (
                  <p className="mt-3 rounded-xl bg-sky px-3 py-2 text-xs font-medium leading-snug text-navy">
                    🔍 {s.measure}
                  </p>
                )}
              </article>
            ))}
          </div>

          {/* แถบบอกโอกาสฟื้นฟู */}
          <div className="mt-6">
            <div className="h-2.5 rounded-full bg-gradient-to-r from-mint via-[#F3BA5C] to-[#7D4636]" />
            <div className="mt-2 flex justify-between text-xs font-medium text-muted">
              <span>← ตรวจเจอเร็ว ฟื้นฟูได้</span>
              <span>ฟื้นฟูได้ยาก →</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-sky p-6 text-center md:flex-row md:p-8 md:text-left">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl">
                รู้ทันตั้งแต่ระยะที่ 2 ด้วย LIVERSCAN ในเวลาประมาณ 1 นาที
              </h3>
              <p className="mt-2 text-muted">
                วัดทั้งไขมันสะสมและความแข็งของตับในการตรวจครั้งเดียว ไม่ต้องเจาะ ไม่เจ็บ
                ช่วยแพทย์วางแผนดูแลผู้รับบริการก่อนเข้าสู่ระยะรุนแรง
              </p>
            </div>
            <LineButton className="w-full shrink-0 md:w-auto" />
          </div>
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
            <article key={h.title} className="overflow-hidden rounded-3xl border border-line bg-white shadow-sm">
              <ZoomImage
                src={h.image}
                alt={h.alt}
                className="aspect-square [&_img]:h-full [&_img]:object-cover [&_img]:object-top"
              />
              <div className="p-6">
                <h3 className="text-lg">{h.title}</h3>
                <p className="mt-2 text-muted">{h.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== Clinical evidence ===== */}
      <section id="evidence" className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <p className="text-sm font-medium text-mint">หลักฐานทางคลินิก</p>
          <h2 className="mt-1 text-2xl text-white md:text-3xl">ผลแม่นยำ ยืนยันด้วยงานวิจัย</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            ศึกษาเปรียบเทียบกับการตรวจชิ้นเนื้อตับในผู้ป่วย 138 ราย และเทียบกับเครื่อง FibroScan®
            แบบดั้งเดิม 1,455 คู่การตรวจ ตีพิมพ์ในวารสาร Liver International (2026)
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {evidence.map((e) => (
              <div key={e.label} className="overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10">
                <ZoomImage src={e.image} alt={e.label} sizes="(max-width: 768px) 50vw, 280px" />
                <div className="p-4">
                  <p className="text-2xl font-bold text-mint md:text-3xl">{e.value}</p>
                  <p className="mt-1 text-sm leading-snug text-white/80">{e.label}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-white/50">
            อ้างอิง: Huang ZH. et al. Liver International. 2026;46:e70634 • แตะรูปเพื่อขยาย
          </p>
        </div>
      </section>

      {/* ===== Use cases & audiences ===== */}
      <section className="bg-sky">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl">นำไปใช้ในบริการได้หลากหลาย</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {useCases.map((u) => (
              <article key={u.title} className="overflow-hidden rounded-3xl bg-white shadow-sm">
                <ZoomImage
                  src={u.image}
                  alt={u.title}
                  className="aspect-[4/3] [&_img]:h-full [&_img]:object-cover [&_img]:object-top"
                />
                <div className="p-6">
                  <h3 className="text-lg">{u.title}</h3>
                  <p className="mt-2 text-muted">{u.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
            <ZoomImage
              src={portable}
              alt="LIVERSCAN ออกแบบให้พกพาไปใช้ได้ทุกที่"
              className="rounded-3xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 560px"
            />
            <div>
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
              <p className="mt-6 text-muted">
                น้ำหนักเบาและไร้สาย ใช้ได้ทั้งข้างเตียงผู้ป่วย ห้องตรวจผู้ป่วยนอก
                หน่วยตรวจสุขภาพเคลื่อนที่ และงานวิจัยทางคลินิก
              </p>
              <button
                type="button"
                data-open-device
                className="mt-6 rounded-full border-2 border-navy px-6 py-2.5 font-semibold text-navy transition hover:bg-navy hover:text-white"
              >
                ดูรายละเอียดเครื่อง
              </button>
            </div>
          </div>
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
          <Image src={zestmedLogo} alt="Zest-Med" className="mb-3 h-14 w-auto" />
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

      <DevicePopup />

      {/* ===== ปุ่ม LINE ลอยบนมือถือ ===== */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
        <LineButton className="w-full" />
      </div>
    </main>
  );
}
