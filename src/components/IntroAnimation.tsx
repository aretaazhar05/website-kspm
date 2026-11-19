"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { intro } from "@content/01-HOMEPAGE/intro";
import "./intro/intro.css";

const STORAGE_KEY = "kspm-unipi-intro-seen";
const FADE_MS = 600;

/**
 * Lapisan pembuka website.
 *
 * Komponen ini sepenuhnya independen: hanya menutupi halaman dengan
 * overlay fixed, tidak mengubah markup, ukuran, atau posisi homepage.
 */
export function IntroAnimation() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  const timers = useRef<number[]>([]);
  const skipRef = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [scene, setScene] = useState(0);
  const [logoStep, setLogoStep] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    clearTimers();

    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // sessionStorage bisa tidak tersedia pada mode privat
    }

    setLeaving(true);
    timers.current.push(
      window.setTimeout(() => {
        setActive(false);
        setLeaving(false);
      }, FADE_MS),
    );
  }, [clearTimers]);

  useEffect(() => {
    if (!intro.enabled || initialPath.current !== "/") {
      return;
    }

    let seen = false;
    try {
      seen = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen && !intro.playOnEveryLoad) {
      return;
    }

    setActive(true);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setScene(1);
      timers.current.push(window.setTimeout(finish, 1800));
      return clearTimers;
    }

    const duration = intro.duration > 0 ? intro.duration : 8000;
    const sceneOneAt = Math.round(duration * 0.175);
    const sceneTwoAt = Math.round(duration * 0.6125);
    const finishAt = duration - FADE_MS;

    timers.current.push(
      window.setTimeout(() => setScene(1), sceneOneAt),
      window.setTimeout(() => setScene(2), sceneTwoAt),
      window.setTimeout(finish, finishAt),
    );

    return clearTimers;
  }, [clearTimers, finish]);

  useEffect(() => {
    if (!active) {
      return;
    }

    skipRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        finish();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, finish]);

  if (!active) {
    return null;
  }

  const logoSrc = logoStep === 0 ? intro.logo : intro.fallbackLogo;

  const handleLogoError = () => {
    setLogoVisible(false);
    setLogoStep((step) => (step < 2 ? step + 1 : step));
  };

  return (
    <div
      className="intro-root"
      data-leaving={leaving}
      role="dialog"
      aria-modal="true"
      aria-label={`Pembuka ${intro.title}`}
    >
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-halo" aria-hidden="true" />
      <div className="intro-topline" aria-hidden="true" />

      <button
        ref={skipRef}
        type="button"
        className="intro-skip"
        onClick={finish}
      >
        {intro.skipLabel}
      </button>

      <div className="intro-stage">
        <div
          className="intro-scene"
          data-active={scene === 0}
          data-leave="up"
          aria-hidden={scene !== 0}
        >
          <div>
            <p className="intro-eyebrow">{intro.eyebrow}</p>
            <h1 className="intro-title">{intro.signature}</h1>
            <span className="intro-divider" aria-hidden="true" />
          </div>
        </div>

        <div
          className="intro-scene"
          data-active={scene === 1}
          aria-hidden={scene !== 1}
        >
          <div className="intro-logo-wrap">
            <div className="intro-logo-halo" aria-hidden="true" />
            <div className="intro-logo-tile">
              {logoStep < 2 ? (
                // Logo resmi dimuat apa adanya; fallback hanya jika file belum ada.
                <img
                  className="intro-logo"
                  src={logoSrc}
                  alt={intro.logoAlt}
                  decoding="async"
                  draggable={false}
                  data-visible={logoVisible}
                  onLoad={() => setLogoVisible(true)}
                  onError={handleLogoError}
                />
              ) : (
                <span className="intro-logo-fallback">KSPM</span>
              )}
            </div>
            <p className="intro-org">{intro.title}</p>
          </div>
        </div>

        <div
          className="intro-scene"
          data-active={scene === 2}
          aria-hidden={scene !== 2}
        >
          <div>
            <p className="intro-eyebrow">Selamat datang di</p>
            <h2 className="intro-welcome-title">
              KSPM <span>{intro.highlight}</span>
            </h2>
            <p className="intro-tagline">{intro.tagline}</p>
          </div>
        </div>
      </div>

      <div className="intro-dots" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className="intro-dot"
            data-active={scene === index}
          />
        ))}
      </div>
    </div>
  );
}
