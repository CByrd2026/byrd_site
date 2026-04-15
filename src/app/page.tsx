"use client";

import { useState } from "react";

/* ─── NAV ─── */
function Navbar() {
  const [open, setOpen] = useState(false); // still needed for mobile menu
  const links = [
    { label: "About", href: "#about" },
    { label: "Key \"No\" Votes", href: "#issues" },
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
            <div className="w-full max-w-lg h-72 rounded-2xl overflow-hidden bg-black/20 border-2 border-white/20">
              <video
                className="w-full h-full object-cover"
                src="/videos/Byrd_No_Video.mp4"
                controls
                playsInline
                preload="metadata"
                poster="/images/byrd_no_video_poster.jpg"
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
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Opposing</span> state budgets delivering millions in tax relief and financial support back home—ensuring Cherokee taxpayers money is equitably redistributed throughout Georgia</li>
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Championing</span> local control over responsible development—thoughtfully reshaping growth and Cherokee residents quality of life while ensuring high density developers maintain a healthy bottom line; </li>
              <li className="text-white font-bold"><span className="text-accent-light font-extrabold text-xl" style={{ WebkitTextStroke: "2px var(--primary)", paintOrder: "stroke fill", textShadow: "0 0 8px rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.4)" }}>Taking High-Profile Positions</span> to drive engagement, then supporting different outcomes—she was the outlier fighting for Donald Trump when the fundraising opportunity was there, then stood squarely with the Democrats to protect Fani Willis proving she is willing to reach across the isle. </li>
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
        <div className="hidden md:flex justify-center items-start" style={{ marginTop: "-400px" }}>
          <div className="w-full h-[28rem] rounded-2xl overflow-hidden bg-black/20 border-2 border-white/20">
            <video
              className="w-full h-full object-cover"
              src="/videos/Byrd_No_Video.mp4"
              controls
              playsInline
              preload="metadata"
              poster="/images/byrd_no_video_poster.jpg"
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
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary mb-8 text-center">Meet the <span className="text-accent underline italic">REAL</span> Charlice</h2>

        <div className="grid md:grid-cols-[1fr_40px_2px_20px_1fr] gap-y-8 items-start">
          {/* Left column — evidence */}
          <div className="space-y-8">
            {/* Video */}
            <div>
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black/10 border-2 border-neutral-mid">
                <video
                  className="w-full h-full object-cover"
                  src="/videos/CB_RINO_Wrangler.mp4"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <p className="text-center text-sm font-bold text-primary mt-3 tracking-wide uppercase">Actual Footage</p>
              <p className="text-center text-foreground/70 mt-2">When the people of House District 20 needed a leader to stand up to Fani Willis, Charlice stepped forward—centering her efforts on the fundraising opportunity, using a now defunct organization to create high-visibility video content to amplify calls for a special session and impeachment.</p>
            </div>

            {/* Fox News Article image */}
            <div>
              <a href="https://www.foxnews.com/politics/georgia-house-votes-to-revive-prosecutor-oversight-panel-that-could-oust-fani-willis" target="_blank" rel="noopener noreferrer" className="block">
                <div className="w-full h-48 aspect-video rounded-2xl overflow-hidden border-2 border-neutral-mid hover:opacity-90 transition-opacity">
                  <img
                    src="/images/foxnews_poc_sb92.png"
                    alt="Fox News Article about POC"
                    className="w-full h-full object-contain"
                  />
                </div>
              </a>
              <p className="text-center text-foreground/70 mt-2">After demanding accountability, Charlice opposed the oversight commission designed to deliver it—demonstrating a willingness to reach across the isle and address unresolved concerns.</p>
            </div>

            {/* Vote Records - Two Column */}
            <div className="grid grid-cols-2 gap-6">

              {/* HB 881 Vote */}
              <a href="https://www.legis.ga.gov/legislation/65965" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-mid bg-white">
                  <img
                    src="/images/AI_Deepfakes_Vote_HB881.png"
                    alt="HB 881 House Vote Record"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <p className="text-center text-sm font-bold text-primary mt-3 tracking-wide uppercase underline">HB 881</p>
              </a>

              {/* SB 92 Vote */}
              <a href="https://www.legis.ga.gov/legislation/64008" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-2 border-neutral-mid bg-white">
                  <img
                    src="/images/poc_house_vote_for_passage.png"
                    alt="SB 92 House Vote Record"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <p className="text-center text-sm font-bold text-primary mt-3 tracking-wide uppercase underline">SB 92</p>
              </a>
            </div>
            <p className="text-center text-foreground/70 mt-4">In two separate opportunities—SB 92 and HB 881—Charlice stood as the lone Republican to oppose the measure, she's a balanced leader who knows how keep favor with the Democrats and Fani Willis while continuing to prioritize disinformation to her base in support of her fundraising interests.</p>
           </div>


          {/* Spacer */}
          <div className="hidden md:block" />
          {/* Red divider */}
          <div className="hidden md:block bg-accent rounded-full self-stretch" />
          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Right column — text */}
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80 text-right">
            <p>
              Charlice Byrd has built her political identity on a form of "conservatism" so uncompromising it often places her at odds with her own Republican caucus&mdash;demonstrating how positions taken to the farthest edge can begin to resemble those on the opposite end.
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
              Ultimately, the citizens of District 20 deserve a principled but pragmatic conservative&mdash;Not one committed to go to any length in raising funds then flip-flopping when the public attention is directed their way.
            </p>
          </div>
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
    text: "",
    bills: [
      {
        name: "Grants for Education",
        bill: "SB 515",
        date: "3/31/2026",
        flipFlop: false,
        featured: true,
        tags: ["Teacher Bill"],
        description: "Expands the teacher recruitment and retention tax credit program to increase the number of teachers eligible to participate. Vote #794.",
      },
      {
        name: "Georgia Early Literacy Act 2026",
        bill: "HB 1193",
        date: "2/24/2026",
        flipFlop: true,
        featured: true,
        tags: ["Education Bill"],
        description: "The largest education investment since HOPE \u2014 funding literacy coaches in every public school so all students read at grade level by 3rd grade. Charlice voted NO, then flip-flopped to YES on 3/31 \u2014 but voted NO on HB 974, the bill that actually funds the coaches.",
      },
      {
        name: "DREAM Scholarship Act",
        bill: "HB 1413",
        date: "3/6/2026",
        flipFlop: false,
        tags: ["Education Bill"],
        description: "Georgia\u2019s first needs-based scholarship program for students at eligible public and private postsecondary institutions.",
      },
      {
        name: "Education Omnibus",
        bill: "SB 556",
        date: "4/2/2026",
        flipFlop: false,
        tags: ["Education Bill", "Healthcare Bill"],
        description: "Incorporates the DREAM Scholarship Act, allows advanced fine arts to count toward HOPE, and provides scholarships for medical school students. Vote #842.",
      },
      {
        name: "Education Omnibus",
        bill: "HB 1396",
        date: "4/2/2026",
        flipFlop: false,
        tags: ["Child Safety Bill"],
        description: "Cursive writing, age-appropriate digital literacy, financial literacy for high schoolers, weapons detection in schools, and clean-up language for Ricky and Alyssa\u2019s Law mobile panic alert system. Vote #851.",
      },
      {
        name: "Vision & Hearing Screening",
        bill: "HB 1402",
        date: "3/4/2026",
        flipFlop: false,
        tags: ["Child Healthcare Bill"],
        description: "Vision and hearing screenings for all public school students in pre-K through 3rd grade to identify problems early so students can learn effectively. Includes parent notification and an opt-out option. Charlice was the only NO vote.",
      },
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Healthcare",
    text: "",
    emphasis: "HB 96",
    bills: [
      {
        name: "Surprise Medical Billing",
        bill: "HB 96",
        date: "3/6/2025",
        flipFlop: false,
        featured: true,
        tags: ["Consumer Protections Bill"],
        description: "The Surprise Billing Consumer Protection Act \u2014 insurance coverage for out-of-network ambulance transportation. Moved into HB 506 for final passage, where she voted NO again on 4/2/2026.",
      },
      {
        name: "Foster Care & Autism Screenings",
        bill: "HB 943",
        date: "2/18/2026",
        flipFlop: true,
        tags: ["Child Healthcare Bill"],
        description: "Pilot program to screen all foster children for autism, provide necessary treatments, and ensure proper placement. Incorporated into SB 402. She flip-flopped to YES on 3/31/2026.",
      },
      {
        name: "Nursing Workforce Grants",
        bill: "HB 541",
        date: "2/18/2026",
        flipFlop: false,
        featured: true,
        tags: ["Healthcare Workforce Bill"],
        description: "Expands approved nursing program schools eligible for tuition equalization grants to address Georgia\u2019s nursing shortage. She was the only NO vote.",
      },
      {
        name: "Mental Health Community Service Boards",
        bill: "HB 1368",
        date: "3/4/2026",
        flipFlop: false,
        tags: ["Mental Health Bill"],
        description: "Establishes community service boards for public mental health, developmental disabilities, and addictive diseases.",
      },
      {
        name: "PA Licensure Compact",
        bill: "HB 1295",
        date: "3/4/2026",
        flipFlop: false,
        tags: ["Healthcare Workforce Bill"],
        description: "Allows physician assistants to enter an interstate compact for easier licensing across states, helping address PA shortages.",
      },
      {
        name: "Increasing Access to Contraceptives Act",
        bill: "HB 1138",
        date: "3/4/2026",
        flipFlop: false,
        tags: ["Women\u2019s Health Bill"],
        description: "Allows pharmacists to dispense hormonal contraceptives in up to 12-month supplies, joining 30 other states. Critical for rural areas \u2014 60 Georgia counties lack an OBGYN. She voted NO again on final passage 4/2/2026, vote #874.",
      },
      {
        name: "Discharge Plans",
        bill: "HB 1238",
        date: "4/2/2026",
        flipFlop: false,
        featured: true,
        tags: ["Abandoned Children Bill"],
        description: "Addresses children abandoned at hospitals and mental facilities by engaging the MATCH program to connect with family, guardians, and service providers to meet children\u2019s needs. Vote #852.",
      },
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Finances",
    text: "",
    bills: [
      {
        name: "Amended FY 26 Budget",
        bill: "HB 973",
        date: "2/5/2026",
        flipFlop: false,
        featured: true,
        tags: ["Tax Relief Bill", "Veterans Bill"],
        description: "Includes $850 million in homeowner tax relief grants to reduce property taxes and $5.5 million for Veteran Homelessness Support Programs.",
      },
      {
        name: "General Appropriations Bill",
        bill: "HB 974",
        date: "3/10/2026",
        flipFlop: false,
        featured: true,
        tags: ["Infrastructure Bill", "Cherokee County Bill"],
        description: "Millions in infrastructure and grants for counties and cities statewide. Her NO vote means other representatives and senators must work harder to secure necessary funds for Cherokee County. Vote #694.",
      },
      {
        name: "Preventing Financial Exploitation of the Elderly & Disabled",
        bill: "HB 945",
        date: "2/6/2026",
        flipFlop: false,
        tags: ["Elder Protection Bill"],
        description: "Establishes holds on accounts of eligible adults suspected of financial exploitation, includes training to recognize exploitation, and permits contact with a trusted individual.",
      },
      {
        name: "Insurance Affordability & Claims Act",
        bill: "HB 1344",
        date: "2/26/2026",
        flipFlop: false,
        tags: ["Consumer Protections Bill"],
        description: "Strengthens enforcement against insurance fraud, enforces uninsured motorist laws, and implements the Fortified Homes Program to protect homes against storm damage. She voted NO again on final passage 4/2/2026, vote #860.",
      },
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Public Safety",
    text: "",
    bills: [
      {
        name: "Tort Reform",
        bill: "HB 1114",
        date: "2026",
        flipFlop: false,
        featured: true,
        tags: ["Legal Reform Bill"],
        description: "Governor Kemp\u2019s signature legislation to reform tort litigation, level the playing field in Georgia\u2019s courtrooms, increase insurance market competition, and protect civil liability. Vote #534.",
      },
      {
        name: "Setting of Bonds & Schedules of Bail",
        bill: "SB 63",
        date: "2026",
        flipFlop: false,
        tags: ["Public Safety Bill"],
        description: "Makes it harder for criminals to get out of jail by requiring a bond for violent criminals. Vote #429.",
      },
      {
        name: "Prosecuting Attorneys Oversight Commission",
        bill: "SB 92",
        date: "2026",
        flipFlop: false,
        featured: true,
        tags: ["Accountability Bill"],
        description: "Creates a prosecuting attorney\u2019s oversight commission to ensure prosecutors don\u2019t ignore laws they don\u2019t like \u2014 i.e., Fani Willis. Vote #308.",
      },
      {
        name: "Street Gang Terrorism Prevention Act",
        bill: "SB 44",
        date: "2026",
        flipFlop: false,
        tags: ["Public Safety Bill"],
        description: "Provides mandatory minimum penalties for violations of the Street Gang Terrorism Prevention Act. Vote #258.",
      },
      {
        name: "AI-Generated Obscene Material Depicting a Child",
        bill: "HB 1361",
        date: "2026",
        flipFlop: true,
        featured: true,
        tags: ["Child Safety Bill"],
        description: "Provides penalties for distributing AI-generated obscene material depicting children. Vote #645.",
      },
    ],
  },
];

function Issues() {
  return (
    <section id="issues" className="py-24 bg-neutral-light">
      <div className="max-w-[94rem] mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-primary mb-2 text-center">Key <span className="text-accent">&ldquo;NO&rdquo;</span> Votes</h2>
        <div className="w-20 h-1 bg-accent rounded mx-auto mb-4" />
        <p className="text-center text-foreground/60 max-w-2xl mx-auto mb-14">
          Charlice is focused on voting against the issues that matter most to families in District 20 and Cherokee County.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {issues.map((issue: any) => (
            <div
              key={issue.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-neutral-mid/40"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                {issue.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{issue.title}</h3>
              {issue.text && <p className="text-foreground/70 leading-relaxed">{issue.text}</p>}
              {issue.bills && (
                <div className="space-y-4 mt-2">
                  {issue.bills.map((b: any) => (
                    <div key={b.bill} className={`border-l-4 pl-4 flex gap-3 ${b.featured ? "border-primary bg-primary/5 rounded-r-xl py-3 pr-3 -ml-0" : "border-accent"}`}>
                      <div className="shrink-0 flex items-center">
                        <span className="bg-accent text-white font-extrabold text-[10px] leading-tight px-2 py-1 rounded text-center w-14">Charlice Voted No</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className={`font-bold text-primary ${b.featured ? "text-base" : "text-sm"}`}>{b.name}</p>
                          {b.flipFlop && (
                            <span className="text-[10px] md:text-[10px] font-bold uppercase tracking-wide bg-accent text-white px-3 py-1 md:px-2 md:py-0.5 rounded-full whitespace-nowrap">Flip-Flop</span>
                          )}
                          <span className="flex-1" />
                          {b.tags && b.tags.map((tag: string) => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wide bg-primary-light/20 text-primary px-2 py-0.5 rounded-full border border-primary/20">{tag}</span>
                          ))}
                        </div>
                        <p className="text-xs text-foreground/50 mt-0.5">{b.bill} &bull; NO Vote on {b.date}</p>
                        <p className={`text-foreground/70 mt-1 leading-relaxed ${b.featured ? "text-sm font-medium" : "text-sm"}`}>{b.description}</p>
                      </div>
                    </div>
                  ))}
                  {issue.bills.some((b: any) => b.flipFlop) && (
                    <div className="mt-4 pt-3 border-t border-neutral-mid/30 flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wide bg-accent text-white px-2 py-0.5 rounded-full">Flip-Flop</span>
                      <span className="text-xs text-foreground/50">Voted NO initially, then voted YES on a subsequent vote</span>
                    </div>
                  )}
                </div>
              )}
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
            <p className="text-white/60 text-sm mt-1">A Radical Right Extremist for State House &mdash; District 20</p>
          </div>
          <div />
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          <p>Paid for by Cherokee Citizens supporting the truth. Not authorized by any candidate or candidate&apos;s committee.</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── AI DISCLOSURE BANNER ─── */
function AiBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white backdrop-blur text-primary px-6 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] border-t border-neutral-mid">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm md:text-base text-primary">
            Artificial Intelligence systems have been used to create some of the content on this page.
          </p>
          <p className="text-primary/60 text-xs md:text-sm mt-1">
            Of course, we really shouldn&apos;t be concerned&mdash;after all, Charlice voted against measures that would have made the use of AI-generated deepfakes of elected officials in campaign materials illegal.
          </p>
        </div>
        <a
          href="/images/AI_Deepfakes_Vote.png"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
          aria-label="View AI Deepfakes Vote"
        >
          <img
            src="/images/AI_Deepfakes_Vote.png"
            alt="AI Deepfakes Vote Record"
            className="w-16 h-16 md:w-20 md:h-20 rounded-lg border border-neutral-mid object-cover hover:opacity-80 transition-opacity"
          />
        </a>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 w-8 h-8 rounded-full bg-primary/10 hover:bg-accent hover:text-white transition-colors flex items-center justify-center text-primary"
          aria-label="Dismiss banner"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
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
      <AiBanner />
    </>
  );
}