import type { Metadata } from "next";
import { Images } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryExplorer } from "@/components/gallery/GalleryExplorer";
import { PageCta } from "@/components/ui/PageCta";
import { Reveal } from "@/components/ui/Reveal";
import { galleryAlbums, galleryPage } from "@content/04-GALLERY/gallery";

export const metadata: Metadata = {
  title: "Galeri",
  description: galleryPage.intro.description,
};

export default function GalleryPage() {
  const photoCount = galleryAlbums.reduce(
    (total, album) => total + album.images.length,
    0,
  );

  return (
    <>
      <PageHero intro={galleryPage.intro}>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-white/65">
            <Images className="h-3.5 w-3.5 text-gold-400" />
            {galleryAlbums.length} album
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold text-white/65">
            {photoCount} foto
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading intro={galleryPage.collection} />
          </Reveal>
          <Reveal className="mt-9" delay={80}>
            <GalleryExplorer albums={galleryAlbums} />
          </Reveal>
          <p className="mt-6 text-[11px] text-slate-400">
            Klik foto untuk membuka tampilan besar. Gunakan tombol panah untuk
            berpindah foto.
          </p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
