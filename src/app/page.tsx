"use client";

import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false); // still needed for mobile menu
  const links = [
    { label: "About", href: "#about" },
    { label: "Issues", href: "#issues" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight">
          Charlice Byrd <span className="text-accent-light font-extrabold text-sm ml-1" style={{ WebkitTextStroke: "1px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>&mdash; Bringing a Fringe Perspective to Cherokee County</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent-light transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg hover:text-accent-light transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary via-primary-light to-primary pt-28 md:pt-20">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10" />
        <div className="absolute bottom-12 -left-16 w-72 h-72 rounded-full bg-white/5" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          {/* Mobile video - shows above headline on small screens */}
          <div className="md:hidden flex justify-center mb-6">
            <div className="w-full max-w-md h-72 rounded-2xl overflow-hidden bg-black/20 border-2 border-white/20">
              <video
                className="w-full h-full object-cover"
                src="/videos/candidate-intro.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/images/candidate-poster.jpg"
              />
            </div>
          </div>

          <p className="text-accent-light font-extrabold tracking-widest uppercase text-lg md:text-xl mb-3 text-center md:text-left" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>
            <em>Incumbent</em>{" "}Candidate &mdash; DISTRICT 20
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-center md:text-left">
            A Reliable Voice<br />for <span className="text-accent-light" style={{ WebkitTextStroke: "3px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>the Fringe Right</span>
          </h1>
            <ul className="mt-6 text-lg text-white/80 max-w-lg leading-relaxed space-y-2 list-disc list-inside">
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Opposing</span> state budgets delivering millions in tax relief and financial support back home—ensuring a more measured approach for Cherokee taxpayers</li>
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Championing</span> local control over responsible development—thoughtfully reshaping growth and Cherokee residents&apos; quality of life</li>
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Taking High-Profile Positions</span> to drive engagement, then supporting different outcomes—backed by a questionably funded approach to governance for Cherokee constituents</li>
            </ul>
          <div className="mt-8 mb-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#issues"
              className="px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-bold text-lg transition-colors shadow-lg"
            >
              See Charlice&apos;s Stance
            </a>
          </div>
        </div>

        {/* Candidate intro video */}
        <div className="hidden md:flex justify-center">
          <div className="w-96 h-[28rem] rounded-2xl overflow-hidden bg-black/20 border-2 border-white/20">
            <video
              className="w-full h-full object-cover"
              src="/videos/candidate-intro.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/images/candidate-poster.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary mb-2">Meet the <span className="text-accent underline italic">REAL</span> Charlice</h2>
        <div className="mb-8" />
        <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
          <p>
            Charlice Byrd has built her political identity on a form of conservatism so uncompromising it often places her at odds with her own Republican caucus&mdash;demonstrating how positions taken to the farthest edge can begin to resemble those on the opposite end.
          </p>
          <p>
            That philosophy was on full display this session in her vote on the amended and regular state budgets, where <strong><em>she joined Georgia&apos;s only self-proclaimed &ldquo;Democratic Socialist&rdquo; in opposition</em></strong>&mdash;standing against legislation that delivered immediate tax relief, invested in local road infrastructure to reduce the time our community spends in traffic, and directed millions in funding, including support for Cherokee County homeless veterans living in substandard conditions. She makes her position clear&mdash;Cherokee taxpayer dollars are best redistributed throughout the rest of the state rather than brought back home.
          </p>
          <p>
            Locally in Cherokee, that approach continues to deliver a uniquely independent path forward. She has consistently stood with local government in support of high-density annexations&mdash;against the otherwise unified Cherokee State Delegation&mdash;before reversing course after public attention and constituent activism intensified, demonstrating a highly responsive approach when her decision-making enters the public eye.
          </p>
          <p>
            Her commitment to issue-based activism has been equally consistent. After relentlessly advancing calls for the impeachment of Fani Willis in support of her fundraising efforts, she later opposed the creation of a prosecutorial oversight commission designed to address those same concerns&mdash;demonstrating a disciplined ability to recalibrate as momentum evolves and donations dry up.
          </p>
          <p>
            Ultimately, the citizens of District 20 deserve an unwavering, principled conservative&mdash;one committed to go to any length in raising funds but maintaining the flexibility to adjust direction when the public attention is directed their way.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── ISSUES ─── */
const issues = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Education",
    text: "Fully fund our public schools, raise teacher pay to competitive levels, expand universal pre-K, and invest in career & technical education so every student has a path to success.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Healthcare",
    text: "Protect and expand Medicaid, lower prescription drug costs, increase access to mental health services, and ensure no family goes bankrupt from a medical emergency.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    title: "Jobs & Economy",
    text: "Support small businesses, raise the minimum wage, invest in clean energy jobs, and bring broadband internet to every corner of District 42.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Environment",
    text: "Transition to clean energy, protect our waterways, hold polluters accountable, and create green infrastructure jobs that benefit every neighborhood.",
  },
];

function Issues() {
  return (
    <section id="issues" className="py-24 bg-neutral-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary mb-2 text-center">Key Issues</h2>
        <div className="w-20 h-1 bg-accent rounded mx-auto mb-4" />
        <p className="text-center text-foreground/60 max-w-2xl mx-auto mb-14">
          Charlice is focused on the issues that matter most to families in District 42.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-neutral-mid/40"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {issue.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{issue.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{issue.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-primary text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <p className="font-bold text-lg">Charlice Byrd</p>
            <p className="text-white/60 text-sm mt-1">A Radical Right Extremist for State House &mdash; District 42</p>
          </div>
          <div />
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <p>Paid for by Charlice Byrd for State House. Not authorized by any candidate or candidate&apos;s committee.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Charlice Byrd for State House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Issues />

      <Footer />
    </>
  );
}