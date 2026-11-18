
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  images: string[];

  // Additional project details
  objectives?: string[];
  methodology?: string[];
  contributions?: string[];
  outcomes?: string[];
};


type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!project) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  useEffect(() => {
    setActiveImage(0);
  }, [project]);

  if (!project) return null;

  const images = project.images ?? [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    setActiveImage(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8"
      >
        
        {/* Sticky Project Header */}
        <div className="sticky -top-6 z-20 mb-6 -mx-6 -mt-6 flex items-start justify-between gap-4 rounded-t-2xl border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-md md:-top-8 md:-mx-8 md:-mt-8 md:px-8">

          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-[#2563EB]">
              {project.category}
            </p>
            <h2 className="text-2xl font-bold text-[#0F172A] md:text-3xl">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-lg border border-slate-200 px-3 py-2 text-[#475569] hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        {/* Interactive Screenshot Gallery */}
        {hasImages && (
          <div className="mb-8">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-[#E8EEF5]">
              
            {/* Screenshot Display */}
            <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-200/60 bg-[#F8FAFC] p-3 sm:h-[380px] md:h-[480px]">
            <Image
                src={images[activeImage]}
                alt={`${project.title} screenshot ${activeImage + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-contain p-3 transition-opacity duration-300"
            />
            </div>
            </div>

            {/* Clickable Screenshot Thumbnails */}
            {images.length > 1 && (
            <div className="mt-4 flex flex-wrap justify-center gap-3">
                {images.map((image, index) => (
                <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View screenshot ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 bg-[#F8FAFC] p-1 transition-all duration-200 sm:h-20 sm:w-32 ${
                    activeImage === index
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : "border-slate-200 opacity-60 hover:border-blue-500/60 hover:opacity-100"
                    }`}
                >
                    <Image
                    src={image}
                    alt={`${project.title} thumbnail ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 96px, 128px"
                    className="object-contain p-1"
                    />
                </button>
                ))}
            </div>
            )}

            {images.length > 1 && (
              <div className="mt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={previousImage}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-[#475569] hover:border-blue-500"
                >
                  ← Previous
                </button>

                <span className="text-sm text-[#64748B]">
                  {activeImage + 1} / {images.length}
                </span>

                <button
                  type="button"
                  onClick={nextImage}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-[#475569] hover:border-blue-500"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-[#0F172A]">
            Project Overview
          </h3>
          <p className="leading-8 text-[#64748B]">
            {project.description}
          </p>
        </div>

{/* Additional Project Details */}
<div className="grid gap-4 md:grid-cols-2">

  {/* Project Objectives */}
  {project.objectives && project.objectives.length > 0 && (
    <section className="rounded-xl border border-slate-200/60 bg-[#E8EEF5] p-5 transition-colors duration-300 hover:border-blue-500/30">

      <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">
        Project Objectives
      </h3>
      <ul className="space-y-3">
        {project.objectives.map((objective, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-[#64748B]"
          >
            <span className="mt-1 text-[#2563EB]">✓</span>
            <span>{objective}</span>
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Methodology */}
  {project.methodology && project.methodology.length > 0 && (
    <section className="rounded-xl border border-slate-200/60 bg-[#E8EEF5] p-5 transition-colors duration-300 hover:border-blue-500/30">
      <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">
        Methodology & Approach
      </h3>
      <ul className="space-y-3">
        {project.methodology.map((step, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-[#64748B]"
          >
            <span className="mt-1 font-semibold text-[#2563EB]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Individual Contributions */}
  {project.contributions && project.contributions.length > 0 && (
    <section className="rounded-xl border border-slate-200/60 bg-[#E8EEF5] p-5 transition-colors duration-300 hover:border-blue-500/30">

      <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">
        My Role & Contributions
      </h3>
      <ul className="space-y-3">
        {project.contributions.map((contribution, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-[#64748B]"
          >
            <span className="mt-1 text-[#2563EB]">•</span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </section>
  )}

        {/* Key Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
            
            <section className="rounded-xl border border-slate-200/60 bg-[#E8EEF5] p-5 transition-colors duration-300 hover:border-blue-500/30">

            <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">
                Key Outcomes
            </h3>
            <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-[#64748B]"
                >
                    <span className="mt-1 text-[#2563EB]">✦</span>
                    <span>{outcome}</span>
                </li>
                ))}
            </ul>
            </section>
        )}

        </div>

        {/* Technologies */}
        {/* Technologies */}
        <div className="mt-8 border-t border-slate-200/60 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-[#0F172A]">
            Technologies Used
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-200 bg-[#E8EEF5] px-3 py-2 text-xs text-[#475569]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
