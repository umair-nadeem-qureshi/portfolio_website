'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/data/portfolioData';
import { ExternalLink, Layers, X, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All Systems' },
  { id: 'robotics', label: 'Robotics & Kinematics' },
  { id: 'cad', label: '3D CAD & Simulation' },
  { id: 'control', label: 'Control & Hardware' },
] as const;

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Filter Bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeFilter === cat.id
                ? 'bg-cyan-500 text-slate-950'
                : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-cyan-500/50"
          >
            <div>
              <div className="mb-3 flex items-center justify-between font-mono text-xs text-cyan-400">
                <span>{project.badge}</span>
                <span className="text-slate-400">{project.specs}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {project.summary}
              </p>
            </div>

            <div className="mt-6">
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-slate-800/90 px-2.5 py-1 font-mono text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-950 py-2.5 text-xs font-semibold text-cyan-400 transition hover:border-cyan-500 hover:bg-cyan-500/10"
              >
                <Layers className="h-4 w-4" />
                Inspect Engineering Deliverables
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono text-xs text-cyan-400">
                  {selectedProject.badge} • {selectedProject.specs}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {selectedProject.summary}
            </p>

            <div className="mt-6">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                Remote Engineering Deliverables
              </h4>
              <ul className="mt-3 space-y-2">
                {selectedProject.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedProject.repoUrl && (
              <div className="mt-8 flex justify-end">
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  View CAD & Code Repository
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}