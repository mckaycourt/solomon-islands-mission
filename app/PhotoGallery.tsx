"use client";

import { useEffect, useRef, useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  className?: string;
};

export function PhotoGallery({ photos }: { photos: readonly Photo[] }) {
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

  return (
    <>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <figure key={photo.src}>
            <button
              className="gallery-photo-button"
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} />
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded photograph"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={close} aria-label="Close expanded photograph">×</button>
          <button className="lightbox-nav lightbox-previous" type="button" onClick={showPrevious} aria-label="Previous photograph">←</button>
          <figure className="lightbox-figure">
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption>
              <span>{activePhoto.caption}</span>
              <small>{activeIndex + 1} / {photos.length}</small>
            </figcaption>
          </figure>
          <button className="lightbox-nav lightbox-next" type="button" onClick={showNext} aria-label="Next photograph">→</button>
        </div>
      )}
    </>
  );
}
