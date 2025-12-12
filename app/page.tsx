"use client";

import React, { useRef, useState, useEffect } from "react";

export default function TeamAppreciationPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null); // ✔ FIXED TYPE
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        // Autoplay blocked — user must click play
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
        "You've been a true strength for our team since the beginning of the hackathon. Your intelligence, clear thinking, and desire to innovate truly stand out.",
    },
    {
      name: "Hussain",
      text:
        "You initially came just to watch the hackathon,but now you've become one of the most important parts of our team.",
    },
    {
      name: "Sohil",
      text:
        "Your work demonstrates your courage. You exceed others' expectations and support the team.",
    },
    {
      name: "Adil",
      text:
        "From start to finish, you handled technical and non-technical responsibilities like a true all-rounder.",
    },
    {
      name: "Khushboo",
      text:
        "Your dedication was on another level. No excuses, no delays, only pure commitment.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white flex items-center justify-center">

      {/* Background Shapes */}
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

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-6 py-12">
        <div className="backdrop-blur-md bg-white/8 rounded-2xl border border-white/20 shadow-2xl p-8">

          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold">Team — Appreciation & Thanks</h1>
              <p className="mt-1 text-sm text-white/80">For the dedication and leadership shown during the hackathon.</p>
            </div>

            <button
              onClick={togglePlay}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/25"
            >
              {playing ? "Pause Music" : "Play Music"}
            </button>
          </header>

          {/* Main 2-column grid */}
          <main className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Team List */}
            <div className="space-y-4">
              {team.map((member) => (
                <article
                  key={member.name}
                  className="group p-4 rounded-xl bg-gradient-to-br from-white/6 to-white/3 border border-white/10 hover:scale-105 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/12 flex items-center justify-center text-xl font-bold">
                      {member.name.charAt(0)}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="mt-2 text-sm text-white/85">{member.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar / Photo Cards */}
            <div className="flex flex-col justify-center items-center text-center p-6">
              <div className="rounded-xl p-6 bg-gradient-to-b from-white/6 to-white/3 border border-white/10">
                <h2 className="text-2xl font-bold">To the Team</h2>
                <p className="mt-3 text-sm text-white/80">
                  Every challenge you turned into progress. Thank you for showing heart.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {team.map((m) => (
                  <div key={m.name} className="rounded-lg p-3 bg-white/6 border border-white/8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                      {m.name.charAt(0)}
                    </div>
                    <div className="mt-2 text-xs">{m.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="mt-6 text-xs text-white/70 flex justify-between">
            <div>Made with gratitude • {new Date().getFullYear()}</div>
            <div className="text-[11px]">Tip: If music doesn't autoplay, press "Play Music".</div>
          </footer>
        </div>
      </div>

      {/* Hidden Audio */}
      <audio ref={audioRef} src="/team-music.mp3" loop preload="auto" />
    </div>
  );
}

