"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { GalleryAlbum } from "@content/types";
import { formatDateShort } from "@/lib/format";
import { cn } from "@/lib/cn";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { settings } from "@content/08-SETTINGS";

interface GalleryExplorerProps {
  albums: GalleryAlbum[];
  showFilters?: boolean;
  limit?: number;
}

export function GalleryExplorer({
  albums,
  showFilters = true,
  limit,
}: GalleryExplorerProps) {
  const allImages = useMemo(
    () =>
      albums.flatMap((album) =>
        album.images.map((image) => ({
          ...image,
          albumTitle: album.title,
          albumName: album.album,
          date: album.date,
        })),
      ),
    [albums],
  );

  const albumOptions = useMemo(
    () => ["Semua", ...Array.from(new Set(albums.map((album) => album.album)))],
    [albums],
  );

  const [filter, setFilter] = useState("Semua");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(
    () =>
      filter === "Semua"
        ? allImages
        : allImages.filter((image) => image.albumName === filter),
    [allImages, filter],
  );

  const visible = limit ? filtered.slice(0, limit) : filtered;
  const active = activeIndex !== null ? filtered[activeIndex] : null;

  useEffect(() => {
    setActiveIndex(null);
  }, [filter]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? null : (current + 1) % filtered.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + filtered.length) % filtered.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, filtered.length]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <FilterTabs
            options={albumOptions}
            value={filter}
            onChange={setFilter}
            label="Filter album galeri"
          />
          <p className="text-[12px] font-medium text-slate-500">
            {filtered.length} foto
          </p>
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-navy-200 bg-white p-8 text-center text-sm text-slate-500">
          {settings.labels.noResults}
        </p>
      ) : (
        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[190px] lg:grid-cols-4">
          {visible.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Buka foto: ${image.caption}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-navy-100 text-left ring-royal-500 transition focus-visible:ring-2",
                index === 0 && "col-span-2 row-span-2",
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 640px) 100vw, 50vw"
                    : "(max-width: 640px) 50vw, 25vw"
                }
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition group-hover:opacity-100" />

              <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-navy-950/40 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white/85 backdrop-blur">
                {image.albumName}
              </span>
              <Expand className="absolute right-3 top-3 h-4 w-4 text-white/0 transition group-hover:text-white/80" />

              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-gold-300">
                  {image.albumTitle}
                </p>
                <p className="mt-1 line-clamp-2 text-[11.5px] font-medium leading-snug text-white/85 sm:text-[12.5px]">
                  {image.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {mounted && active
        ? createPortal(
            <div
              className="fixed inset-0 z-[95] flex flex-col bg-navy-950/95 p-4 backdrop-blur-md sm:p-7"
              role="dialog"
              aria-modal="true"
              aria-label="Pratinjau foto galeri"
            >
              <div className="flex items-center justify-between gap-4 text-white/65">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-300">
                    {active.albumTitle}
                  </p>
                  <p className="mt-1 text-[11px] text-white/45">
                    {formatDateShort(active.date)} · Foto {(activeIndex ?? 0) + 1} dari{" "}
                    {filtered.length}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  aria-label="Tutup pratinjau foto"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/15 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative my-4 flex-1 overflow-hidden rounded-2xl bg-black/30">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />

                {filtered.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === null
                            ? null
                            : (current - 1 + filtered.length) % filtered.length,
                        )
                      }
                      aria-label="Foto sebelumnya"
                      className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/60 text-white/80 backdrop-blur transition hover:bg-white/15 hover:text-white sm:left-5"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex((current) =>
                          current === null ? null : (current + 1) % filtered.length,
                        )
                      }
                      aria-label="Foto berikutnya"
                      className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-navy-950/60 text-white/80 backdrop-blur transition hover:bg-white/15 hover:text-white sm:right-5"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </>
                ) : null}
              </div>

              <p className="mx-auto max-w-3xl text-center text-[13px] leading-relaxed text-white/75">
                {active.caption}
              </p>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
