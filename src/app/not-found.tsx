import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import { notFoundPage } from "@content/09-PAGES";
import { settings } from "@content/08-SETTINGS";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden bg-navy-950 pb-20 pt-36">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-royal-600/20 blur-[130px]"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/5 text-gold-300">
          <Compass className="h-7 w-7" />
        </span>
        <p className="mt-6 font-display text-[72px] font-bold leading-none text-white/10 sm:text-[110px]">
          {notFoundPage.eyebrow}
        </p>
        <h1 className="mt-2 text-balance font-display text-3xl font-semibold text-white sm:text-4xl">
          {notFoundPage.title}
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/55">
          {notFoundPage.description}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-300"
          >
            <ArrowLeft className="h-4 w-4" />
            {settings.labels.backHome}
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
          >
            {settings.labels.contactUs}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
