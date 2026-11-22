import { ENGINEER_PROFILE, SKILL_GROUPS } from '@/data/portfolioData';
import ProjectGrid from '@/components/ProjectGrid';
import ContactActions from '@/components/ContactActions';
import { ArrowRight, Cpu, Wrench } from 'lucide-react';
import { Github } from 'lucide-brands';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500 selection:text-slate-950 pt-20">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md transition-all duration-300 ease-in-out">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold text-cyan-400">
            <Cpu className="h-6 w-6" />
            <span>MECHATRONICS.DEV</span>
          </a>
          <nav className="hidden space-x-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#projects" className="relative group hover:text-cyan-400 transition-colors duration-200 ease-in-out">
              Projects
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"></span>
            </a>
            <a href="#skills" className="relative group hover:text-cyan-400 transition-colors duration-200 ease-in-out">
              Tech Stack
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"></span>
            </a>
            <a href="#workflow" className="relative group hover:text-cyan-400 transition-colors duration-200 ease-in-out">
              Remote Workflow
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"></span>
            </a>
            <a href="#contact" className="relative group hover:text-cyan-400 transition-colors duration-200 ease-in-out">
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left"></span>
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition-all duration-200 ease-in-out hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Hire Remote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-slate-800 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-xs text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            {ENGINEER_PROFILE.availability}
          </div>
          <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            {ENGINEER_PROFILE.role} — <span className="text-cyan-400">Robotics & CAD</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {ENGINEER_PROFILE.bio}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-all duration-200 ease-in-out hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={ENGINEER_PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 transition-all duration-200 ease-in-out hover:border-slate-500 hover:bg-slate-800"
            >
              <Github className="h-4 w-4" /> GitHub & CAD Repos
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Engineering Case Studies</h2>
            <p className="mt-2 text-slate-400">
              Filter by domain or click any build to inspect CAD, kinematics, and control deliverables.
            </p>
          </div>
          <ProjectGrid />
        </div>
      </section>

      {/* Tech Stack */}
      <section id="skills" className="border-b border-slate-800 bg-slate-900/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-3xl font-bold text-white">Core Engineering Stack</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="rounded-xl border border-slate-800 bg-slate-950 p-6">
                <Wrench className="mb-4 h-7 w-7 text-cyan-400" />
                <h3 className="font-bold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Workflow */}
      <section id="workflow" className="border-b border-slate-800 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/70 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Remote Hardware & Robotics Delivery Workflow
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <span className="font-mono text-xs text-cyan-400">01 // DIGITAL TWINS</span>
                <h3 className="mt-1 font-semibold text-white">Validated CAD & Kinematics</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Parametric assemblies delivered in neutral STEP formats with collision and reach verification prior to machining.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400">02 // VERSION CONTROL</span>
                <h3 className="mt-1 font-semibold text-white">Structured Git & BOMs</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Clean Git repositories containing source CAD, wiring schematics, firmware, and vendor-ready Bills of Materials.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs text-cyan-400">03 // ASYNC REPORTING</span>
                <h3 className="mt-1 font-semibold text-white">Simulation Walkthroughs</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Screen-recorded kinematics simulations and concise engineering logs to keep global teams aligned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">Let&apos;s Build Together Remotely</h2>
          <p className="mt-4 text-slate-400">
            Open to remote roles in Robotics Engineering, 3D CAD Design, and Industrial Automation.
          </p>
          <ContactActions />
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        Built with Next.js, TypeScript & Tailwind CSS
      </footer>
    </div>
  );
}