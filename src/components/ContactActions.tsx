'use client';

import { useState } from 'react';
import { Check, Copy} from 'lucide-react';
import { Linkedin } from 'lucide-brands';
import { ENGINEER_PROFILE } from '@/data/portfolioData';

export default function ContactActions() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ENGINEER_PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 cursor-pointer transition-all duration-200 ease-in-out hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30"
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span>{copied ? 'Email Copied!' : `Copy Email: ${ENGINEER_PROFILE.email}`}</span>
      </button>

      <a
        href={ENGINEER_PROFILE.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 cursor-pointer transition-all duration-200 ease-in-out hover:border-slate-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-700/30"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn Profile
      </a>
    </div>
  );
}