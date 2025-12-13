"use client";
/*
Team Appreciation Single-file React component
*/

import React, { useRef, useState, useEffect } from "react";

export default function TeamAppreciationPage() {
  // FIXED: added HTMLAudioElement type
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
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
        "You initially came just to observe the hackathon, but now you've become one of the most important parts of our team. Your ability to understand situations and handle things intelligently is rare. You didn't just participate—you encouraged everyone. We all felt it.",
    },
    {
      name: "Sohil",
      text:
        "Your work demonstrates your courage. You don't just complete your own tasks—you exceed others' expectations, support the team, and take on responsibilities beyond your role. This passion drives a team forward, and we're grateful for that.
",
    },
    {
      name: "Adil",
      text:
        "From start to finish, you handled both technical and non-technical responsibilities like a true all-rounder. Whenever the team needed something, you were there—active, involved, and ready to take on responsibility. Your versatility made a huge difference.
",
    },
    {
      name: "Khushboo",
      text:
        "The dedication you displayed was on a different level. You didn't just treat it as a team project—you worked with ownership and honesty, as if it were your personal mission. No excuses, no delays, just complete commitment. Your attitude set a strong example for all of us.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex items-center justify-center">

      {/* Background Animation */}
      <svg className="pointer-events-none absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
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

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full px-6 py-12">
        <div className="backdrop-blur-md bg-white/8 rounded-2xl border border-white/20 shadow-2xl p-8">

          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Team — Appreciation & Thanks</h1>
              <p className="mt-1 text-sm text-white/80">
                For the dedication, courage, and leadership you all showed during the hackathon.
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-sm"
            >
              {playing ? "Pause Music" : "Play Music"}
            </button>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Team List */}
            <div className="space-y-4">
              {team.map((member) => (
                <article key={member.name} className="relative group p-4 rounded-xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 hover:scale-105 transform transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 rounded-full bg-white/12 flex items-center justify-center text-xl font-bold">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="mt-2 text-sm text-white/85">{member.text}</p>
                    </div>
                  </div>
                </article>
              ))}

              {/* Shayari Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 hover:scale-105 transform transition-transform duration-300 relative group">
                <div className="flex items-start gap-4">
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
              </div>
            </div>

            {/* Right Side Content */}
            <div className="flex flex-col justify-center items-center text-center p-6">
              <div className="rounded-xl p-6 bg-gradient-to-b from-white/6 to-white/3 border border-white/10">
                <h2 className="text-2xl font-bold">To the Team</h2>
                <p className="mt-3 text-sm text-white/80">
                  Every challenge you turned into learning. Every late night into progress.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {team.map((m) => (
                  <div key={m.name} className="rounded-lg p-3 bg-white/6 border border-white/8 backdrop-blur-sm">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                      {m.name.charAt(0)}
                    </div>
                    <div className="mt-2 text-xs">{m.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          <footer className="mt-6 text-xs text-white/70 flex items-center justify-between">
            <div>Made with gratitude • {new Date().getFullYear()}</div>
            <div className="text-[11px]">Tip: If music doesn't autoplay, press "Play Music".</div>
          </footer>
        </div>
      </div>

      {/* Hidden audio */}
      <audio ref={audioRef} src="/team-music.mp3" loop preload="auto" />
    </div>
  );
}
