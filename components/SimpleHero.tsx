

'use client';
'use client';
import React from "react";

const roles = [
  "Data Analyst",
  "Python Developer",
  "SQL Enthusiast"
];

function useTypingEffect(words: string[], speed = 120, pause = 1200) {
  const [display, setDisplay] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (index === words.length) setIndex(0);
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  React.useEffect(() => {
    setDisplay(words[index].substring(0, subIndex));
  }, [subIndex, index, words]);

  return display;
}

export default function SimpleHero() {
  const typing = useTypingEffect(roles);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {/* Animated Abstract Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="absolute left-0 top-0 animate-pulse" style={{filter:'blur(32px)'}}>
          <circle cx="20%" cy="30%" r="120" fill="#a5b4fc" fillOpacity="0.25" />
          <circle cx="80%" cy="70%" r="180" fill="#c4b5fd" fillOpacity="0.18" />
          <circle cx="60%" cy="20%" r="90" fill="#818cf8" fillOpacity="0.13" />
        </svg>
        {/* Animated floating shapes */}
        <svg className="absolute right-0 bottom-0 animate-float-slow" width="220" height="220" viewBox="0 0 220 220" fill="none">
          <ellipse cx="110" cy="110" rx="90" ry="40" fill="#818cf8" fillOpacity="0.08" />
        </svg>
      </div>
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
        {/* Profile Photo with gradient ring and hover effect */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center md:items-center md:justify-center w-full md:w-auto">
          <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-400 via-purple-400 to-indigo-400 p-1 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="/images/portfolio_img.jpg" 
                alt="Kannan M"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110"
                style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
              />
            </div>
          </div>
        </div>
        {/* Content with animation */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-6 md:space-y-8 animate-fadeInUp" style={{animationDelay:'0.2s', animationFillMode:'both'}}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight leading-tight text-center md:text-left">
            <span className="block text-gray-900 drop-shadow-lg">Hello, I’m</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 bg-clip-text text-transparent animate-gradient-x">
              Kannan M
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-1 text-gray-800 tracking-wide text-center md:text-left flex items-center gap-2 min-h-[2.5rem]">
            <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 shadow-sm font-mono">
              {typing}
              <span className="inline-block w-2 h-6 bg-blue-500 ml-1 animate-blink align-middle rounded-sm" style={{verticalAlign:'middle'}}></span>
            </span>
          </h2>
          <div className="text-lg md:text-xl text-gray-700 text-center md:text-left max-w-2xl space-y-2">
            <span className="block font-semibold mb-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 bg-clip-padding text-black rounded px-2 py-1 shadow-sm">Turning data into insights, one project at a time.</span>
            <span className="block font-semibold mb-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 bg-clip-padding text-black rounded px-2 py-1 shadow-sm">Aspiring Data Analyst focused on turning data into actionable insights and smarter business decisions.</span>
            <span className="block font-semibold mb-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 bg-clip-padding text-black rounded px-2 py-1 shadow-sm">"I love coffee, cricket, and finding stories in numbers."</span>
            <span className="block font-semibold mb-1 bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 bg-clip-padding text-black rounded px-2 py-1 shadow-sm">Dedicated to leveraging analytics for informed decision-making and business value.</span>
          </div>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-700 text-white px-10 py-3 text-lg rounded-full font-bold shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/40"
            style={{letterSpacing: '0.03em'}}
          >
            Let’s Connect
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: none; }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.1s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        .animate-float-slow {
          animation: float-slow 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}


