// app/about.tsx (Next.js 13+ App Router structure)
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
          About Nipun
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hey there — I’m{" "}
          <span className="text-white font-semibold">Nipun Kumar</span>, a
          software engineer based in Tokyo with a knack for combining tech,
          storytelling, and aesthetic. Originally from India, I moved to Japan
          in late 2024 to grow beyond my limits — professionally, creatively,
          and personally.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          By day, I work remotely with{" "}
          <span className="text-white">Toshiba</span> (via Accenture), and by
          night, I’m either building GPT-powered tools, exploring Tokyo’s
          underground bars, or strategizing my next leap into{" "}
          <span className="text-white">marketing & branding</span>.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          I’m passionate about:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
          <li>AI automation & real-world problem solving</li>
          <li>Japanese language learning (JLPT N2 in sight!)</li>
          <li>
            Creating high-aesthetic Instagram reels (check out the{" "}
            <span className="italic">Trendsetter</span> series)
          </li>
          <li>
            Self-transformation, confidence, and leveling up — inside & out
          </li>
        </ul>
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Whether it’s building GPT-integrated apps, planning a leather import
          business, or pushing boundaries at the gym, I’m all in. I believe in
          *action over words*, and that your story is your brand.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          This Tokyo chapter? It’s about becoming someone unforgettable.
        </p>
      </div>
    </div>
  );
};

export default About;
