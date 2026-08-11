"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
};

type PhotoGalleryProps = {
  photos: readonly Photo[];
  showCaptions?: boolean;
  variant?: "grid" | "hero";
  heroClassName?: string;
};

export function PhotoGallery({ photos, showCaptions = true, variant = "grid", heroClassName = "" }: PhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const close = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
  const showNext = () => setActiveIndex((current) => current === null ? null : (current + 1) % photos.length);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
      if (event.key === "ArrowRight") setActiveIndex((current) => current === null ? null : (current + 1) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, photos.length]);

  const activePhoto = activeIndex === null ? null : photos[activeIndex];
  const heroPhoto = photos[0];

  return (
    <>
      {variant === "hero" && heroPhoto ? (
        <div className={`hero-photo ${heroClassName}`.trim()}>
          <button
            className="hero-photo-button"
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label={`Open photo: ${heroPhoto.caption}`}
          >
            <img src={heroPhoto.src} alt={heroPhoto.alt} />
          </button>
          {showCaptions && <p className="photo-caption">{heroPhoto.caption}</p>}
        </div>
      ) : (
        <div className="gallery-grid" data-photo-count={photos.length}>
          {photos.map((photo, index) => (
            <figure key={photo.src} className={photo.className}>
              <button
                className="gallery-photo-button"
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open photo: ${photo.caption}`}
              >
                <img src={photo.src} alt={photo.alt} />
              </button>
              {showCaptions && <figcaption>{photo.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      {activePhoto && activeIndex !== null && createPortal(
        <div
          className="lightbox"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-label="Expanded photograph">
            <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={close} aria-label="Close expanded photograph">×</button>
            <button className="lightbox-nav lightbox-previous" type="button" onClick={showPrevious} aria-label="Previous photograph">←</button>
            <figure className="lightbox-figure">
              <img src={activePhoto.src} alt={activePhoto.alt} />
              <figcaption>
                {showCaptions && <span>{activePhoto.caption}</span>}
                <small>{activeIndex + 1} / {photos.length}</small>
              </figcaption>
            </figure>
            <button className="lightbox-nav lightbox-next" type="button" onClick={showNext} aria-label="Next photograph">→</button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
