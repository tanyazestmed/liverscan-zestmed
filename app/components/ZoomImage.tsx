"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";

// รูปที่กดแล้วขยายเต็มจอ
export default function ZoomImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        className={`group relative block w-full cursor-zoom-in overflow-hidden ${className}`}
        aria-label={`ขยายรูป: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          sizes={sizes}
          className="h-auto w-full transition duration-300 group-hover:scale-[1.03]"
        />
        <span className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-navy shadow">
          🔍 ขยาย
        </span>
      </button>
      <dialog
        ref={ref}
        onClick={close}
        className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-2xl bg-transparent p-0 backdrop:bg-black/80"
        aria-label={alt}
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xl text-navy"
          aria-label="ปิด"
        >
          ×
        </button>
        <Image
          src={src}
          alt={alt}
          sizes="(max-width: 800px) 100vw, 768px"
          className="mx-auto h-auto max-h-[90vh] w-auto rounded-2xl"
        />
      </dialog>
    </>
  );
}
