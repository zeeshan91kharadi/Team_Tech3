"use client";
/*
Team Appreciation Single-file React component
- Tailwind CSS is used for styling. (Make sure Tailwind is configured in your project.)
- Place a music file at /public/team-music.mp3 or change the src in the <audio> tag.
- This is a single React component you can drop into a Next.js or Create React App page.
- It uses no external images; all visuals are CSS + SVG.
*/

import React, { useRef, useState, useEffect } from "react";

export default function TeamAppreciationPage() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

const audioRef = useRef<HTMLAudioElement | null>(null);

useEffect(() => {
  const audio = audioRef.current;
  if (!audio) return;

  const tryAutoplay = async () => {
    try {
      await audio.play();
      setPlaying(true);
    } catch (e) {
      // autoplay blocked
    }
  };

  tryAutoplay();
}, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const team = [
    {
      name: "Sara",
      text:
        "You've been a true strength for our team since the beginning of the hackathon. Your intelligence, clear thinking, and desire to innovate truly stand out. Your decisions are always quick and reliable. And despite your IELTS exam, the way you've remained committed and contributed to the project is truly inspiring. Thank you for being such a strong force.",
    },
    {
      name: "Hussain",
      text:
        "You initially came just to watch the hackathon,but now you've become one of the most important parts of our team. Your ability to understand situations and handle things intelligently is rare. You didn't just participate—you encouraged everyone. We all felt it.",
    },
    {
      name: "Sohil",
      text:
        "Your work demonstrates your courage. You don't just complete your own tasks—you exceed others' expectations, support the team, and take on responsibilities beyond your role. This passion drives a team forward, and we're grateful for that.",
    },
    {
      name: "Adil",
      text:
        "From start to finish, you handled both technical and non-technical responsibilities like a true all-rounder. Whenever the team needed something, you were there—active, involved, and ready to take on responsibility. Your versatility made a huge difference.",
    },
    {
      name: "Khushboo",
      text:
        "The dedication you showed was on another level. You didn’t treat this as just a team project—you worked with the ownership and sincerity as if it was your personal mission. No excuses, no delays, only pure commitment. Your attitude set a strong example for all of us.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex items-center justify-center">
      {/* Animated soft blurs (background shapes) */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffecd2" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#fcb69f" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <g>
          <ellipse cx="120" cy="80" rx="220" ry="120" fill="url(#g1)">
            <animate attributeName="cx" dur="18s" values="120;700;120" repeatCount="indefinite" />
            <animate attributeName="cy" dur="16s" values="80;480;80" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="680" cy="420" rx="260" ry="160" fill="#9be7ff" opacity="0.12">
            <animate attributeName="cx" dur="20s" values="680;200;680" repeatCount="indefinite" />
            <animate attributeName="cy" dur="22s" values="420;120;420" repeatCount="indefinite" />
          </ellipse>
        </g>
      </svg>

      {/* Content container */}
      <div className="relative z-10 max-w-5xl w-full px-6 py-12">
        <div className="backdrop-blur-md bg-white/8 rounded-2xl border border-white/20 shadow-2xl p-8">
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Team — Appreciation & Thanks</h1>
              <p className="mt-1 text-sm text-white/80">For the dedication, courage, and leadership you all showed during the hackathon.</p>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={togglePlay} className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm">
                {playing ? 'Pause Music' : 'Play Music'}
              </button>
            </div>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Team list with floating cards */}
            <div className="space-y-4">
              {team.map((member, idx) => (
                <article key={member.name} className="relative group p-4 rounded-xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 hover:scale-105 transform transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 rounded-full bg-white/12 flex items-center justify-center text-xl font-bold">{member.name.charAt(0)}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="mt-2 text-sm text-white/85">{member.text}</p>
                    </div>
                  </div>
                  {/* floating heart */}
                  <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21s-7.5-4.5-9.5-7.5S3 7.5 7.5 6 12 9 12 9s2.5-3 4.5-3C18.5 6 21 7.5 20 10.5S12 21 12 21z" fill="url(#hgrad)" fillOpacity="0.95" />
                      <defs>
                        <linearGradient id="hgrad" x1="0" x2="1">
                          <stop offset="0%" stopColor="#ff7eb3" />
                          <stop offset="100%" stopColor="#ff65a3" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </article>
              ))}
            </div>
 <div className="max-w-md  mx-auto p-4 rounded-xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 hover:scale-105 transform transition-transform duration-300 relative group">
  <div className="flex items-start gap-4">
    {/* Optional initial/emoji/avatar */}
    <div className="flex-none w-12 h-12 rounded-full bg-white/12 flex items-center justify-center text-xl font-bold">S</div>
    
    <div>
      <h3 className="font-semibold text-lg">Meri Shayari</h3>
      <p className="mt-2 text-sm text-white/85">
        bikhar jata hu me kyu ki koi sambhal ne vala nahi he,<br />
        baras jata hu me kyu ki koi kehne vala nahi he,<br />
        samjlo mera hal kyu ki ye hal bya karne k liye koi alfaz nahi he<br />
        karna mujhe maf is qadar jese dil me koi gila ya siqWa nahi he<br />
                                                                         ~zeeshan_Shaikh
      </p>
    </div>
  </div>

  {/* floating heart */}
  <div className="absolute -right-4 -top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-7.5-4.5-9.5-7.5S3 7.5 7.5 6 12 9 12 9s2.5-3 4.5-3C18.5 6 21 7.5 20 10.5S12 21 12 21z" fill="url(#hgrad)" fillOpacity="0.95" />
      <defs>
        <linearGradient id="hgrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff7eb3" />
          <stop offset="100%" stopColor="#ff65a3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</div>

            {/* Right: Big marquee + team photo mockup */}
            <div className="flex flex-col justify-center items-center text-center p-6">
              <div className="mb-4 w-full">
                <div className="rounded-xl p-6 bg-gradient-to-b from-white/6 to-white/3 border border-white/10">
                  <h2 className="text-2xl font-bold">To the Team</h2>
                  <p className="mt-3 text-sm text-white/80">Every challenge you turned into a learning. Every late night you turned into progress. This is a small note of gratitude for the huge heart you all showed.</p>

                  <div className="mt-4">
                    <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/6 border border-white/10">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      <span className="text-sm">You made it happen — together.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full">
                {/* Mock team photo cards */}
                <div className="grid grid-cols-3 gap-3">
                  {team.map((m, i) => (
                    <div key={m.name} className="rounded-lg p-3 bg-white/6 border border-white/8 backdrop-blur-sm">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">{m.name.charAt(0)}</div>
                      <div className="mt-2 text-xs">{m.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>

          <footer className="mt-6 text-xs text-white/70 flex items-center justify-between">
            <div>Made with gratitude • {new Date().getFullYear()}</div>
            <div className="text-[11px]">Tip: If music doesn't autoplay, press "Play Music".</div>
          </footer>
        </div>
      </div>
      



      {/* Decorative animated bubbles bottom-right */}
      <div className="pointer-events-none absolute right-8 bottom-8 opacity-40">
        <svg width="180" height="180" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="20">
            <animate attributeName="cy" dur="6s" values="30;60;30" repeatCount="indefinite" />
          </circle>
          <circle cx="90" cy="70" r="12">
            <animate attributeName="cy" dur="8s" values="70;30;70" repeatCount="indefinite" />
          </circle>
          <circle cx="150" cy="120" r="18">
            <animate attributeName="cy" dur="10s" values="120;90;120" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      {/* Hidden audio element */}
      <audio ref={audioRef} src="/team-music.mp3" loop preload="auto" />
    </div>
  );
}
