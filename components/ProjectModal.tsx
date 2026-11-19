
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
        aria-label={`${project.title} mission briefing`}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-cyan-400/30 bg-[#131D35] p-6 text-white shadow-2xl md:p-8"
      >
        
        {/* Sticky Project Header */}
        <div className="sticky -top-6 z-20 mb-6 -mx-6 -mt-6 flex items-start justify-between gap-4 rounded-t-2xl border-b border-slate-700 bg-[#131D35]/95 px-6 py-5 backdrop-blur-md md:-top-8 md:-mx-8 md:-mt-8 md:px-8">

          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-cyan-300">
              {project.category}
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              {project.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="rounded-lg border border-slate-700 px-3 py-2 text-slate-300 hover:bg-[#24334B]"
          >
            ✕
          </button>
        </div>

        {/* Interactive Screenshot Gallery */}
        {hasImages && (
          <div className="mb-8">
            <div className="relative overflow-hidden rounded-xl bg-[#1C2B45]">
              
            {/* Screenshot Display */}
            <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-700/60 bg-[#0B1020] p-3 sm:h-[380px] md:h-[480px]">
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
                    className={`relative h-16 w-24 overflow-hidden rounded-lg border-2 bg-[#0B1020] p-1 transition-all duration-200 sm:h-20 sm:w-32 ${
                    activeImage === index
                        ? "border-cyan-400 ring-2 ring-cyan-400/20"
                        : "border-slate-700 opacity-60 hover:border-cyan-400/60 hover:opacity-100"
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
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400"
                >
                  ← Previous
                </button>

                <span className="text-sm text-slate-400">
                  {activeImage + 1} / {images.length}
                </span>

                <button
                  type="button"
                  onClick={nextImage}
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-cyan-400"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Project Description */}
        <div className="mb-8">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Project Overview
          </h3>
          <p className="leading-8 text-slate-400">
            {project.description}
          </p>
        </div>

{/* Additional Project Details */}
<div className="grid gap-4 md:grid-cols-2">

  {/* Mission Objectives */}
  {project.objectives && project.objectives.length > 0 && (
    <section className="rounded-xl border border-slate-700/60 bg-[#1C2B45] p-5 transition-colors duration-300 hover:border-cyan-400/30">

      <h3 className="mb-4 text-lg font-semibold text-white">
        Mission Objectives
      </h3>
      <ul className="space-y-3">
        {project.objectives.map((objective, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-slate-400"
          >
            <span className="mt-1 text-cyan-300">✓</span>
            <span>{objective}</span>
          </li>
        ))}
      </ul>
    </section>
  )}

  {/* Methodology */}
  {project.methodology && project.methodology.length > 0 && (
    <section className="rounded-xl border border-slate-700/60 bg-[#1C2B45] p-5 transition-colors duration-300 hover:border-cyan-400/30">
      <h3 className="mb-4 text-lg font-semibold text-white">
        Strategy & Methods
      </h3>
      <ul className="space-y-3">
        {project.methodology.map((step, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-slate-400"
          >
            <span className="mt-1 font-semibold text-cyan-300">
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
    <section className="rounded-xl border border-slate-700/60 bg-[#1C2B45] p-5 transition-colors duration-300 hover:border-cyan-400/30">

      <h3 className="mb-4 text-lg font-semibold text-white">
        Player Contributions
      </h3>
      <ul className="space-y-3">
        {project.contributions.map((contribution, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-sm leading-7 text-slate-400"
          >
            <span className="mt-1 text-cyan-300">•</span>
            <span>{contribution}</span>
          </li>
        ))}
      </ul>
    </section>
  )}

        {/* Mission Results */}
        {project.outcomes && project.outcomes.length > 0 && (
            
            <section className="rounded-xl border border-slate-700/60 bg-[#1C2B45] p-5 transition-colors duration-300 hover:border-cyan-400/30">

            <h3 className="mb-4 text-lg font-semibold text-white">
                Mission Results
            </h3>
            <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                >
                    <span className="mt-1 text-cyan-300">✦</span>
                    <span>{outcome}</span>
                </li>
                ))}
            </ul>
            </section>
        )}

        </div>

        {/* Technologies */}
        {/* Technologies */}
        <div className="mt-8 border-t border-slate-700/60 pt-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Equipment Used
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-slate-700 bg-[#1C2B45] px-3 py-2 text-xs text-slate-300"
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
