"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import deviceBadge from "@/public/images/device-badge.webp";

const LINE_URL = "https://line.me/R/ti/p/@zestmed";
const SEEN_KEY = "liverscan-popup-seen";

const specs = [
  "ไร้สาย พกพาสะดวก",
  "ตรวจเสร็จในประมาณ 1 นาที",
  "แบตเตอรี่ใช้งานได้ ≥ 4 ชั่วโมง",
  "US FDA 510(k) Clearance",
];

export default function DevicePopup() {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => ref.current?.showModal();

    // เปิดอัตโนมัติครั้งแรกที่เข้าเว็บ (ครั้งเดียวต่อการเปิดเบราว์เซอร์)
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    const timer = seen
      ? undefined
      : setTimeout(() => {
          open();
          try {
            sessionStorage.setItem(SEEN_KEY, "1");
          } catch {}
        }, 1500);

    // ปุ่มใดก็ได้ที่มี data-open-device จะเปิด pop-up นี้
    const onClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("[data-open-device]")) open();
    };
    document.addEventListener("click", onClick);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      onClick={(e) => e.target === ref.current && close()}
      className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-3xl bg-white p-0 shadow-2xl backdrop:bg-navy/60 backdrop:backdrop-blur-sm"
      aria-label="เครื่อง LIVERSCAN"
    >
      <div className="relative">
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-navy shadow"
          aria-label="ปิด"
        >
          ×
        </button>
        <Image
          src={deviceBadge}
          alt="เครื่อง LIVERSCAN หัวตรวจไร้สาย"
          className="h-auto w-full bg-white"
          sizes="(max-width: 480px) 100vw, 448px"
          priority
        />
      </div>
      <div className="px-6 pb-6">
        <p className="text-sm font-medium text-mint-dark">ทำความรู้จักเครื่อง</p>
        <h2 className="mt-1 text-xl">LIVERSCAN ประเมินตับแบบพกพา</h2>
        <ul className="mt-3 space-y-1.5 text-ink">
          {specs.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="text-mint-dark">✓</span>
              {s}
            </li>
          ))}
        </ul>
        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 flex w-full items-center justify-center rounded-full bg-line-green px-6 py-3 text-lg font-semibold text-white"
        >
          ทักไลน์เลย
        </a>
        <p className="mt-2 text-center text-sm text-muted">
          สอบถามการใช้งาน • ขอใบเสนอราคา • นัดสาธิตเครื่อง
        </p>
      </div>
    </dialog>
  );
}
