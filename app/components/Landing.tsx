import { Playfair_Display } from "next/font/google";
import { logout } from "../login/actions";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "900",
});

export default function Landing() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center bg-white">
      {/* 1. The "Selected for..." Badge Style */}
      <div className="flex items-center gap-2 mb-8 animate-fade-in">
        <span className="h-[4px] w-6 bg-blue-600 rounded-full" />
        <p className="text-sm font-semibold tracking-tight text-gray-900">
          Next.js Full-Stack Implementation
        </p>
      </div>

      {/* 2. The High-Impact Headline */}
      <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1]">
        The digital identity layer <br />
        <span className="text-gray-900/90">for the internet</span>
      </h1>

      {/* 3. The Project Description */}
      <p className="max-w-2xl text-lg md:text-xl text-gray-500 font-medium mb-12 leading-relaxed">
        This is an end-to-end login system utilizing Next.js in order to
        illustrate{" "}
        <span className={`${playfair.className} italic text-black`}>j</span>
        <span className="text-black font-sans font-medium ml-0.5">
          anet's
        </span>{" "}
        technical skill and commitment to{" "}
        <span className={`${playfair.className} italic text-black`}>h</span>
        <span className="text-black font-sans font-medium -ml-0.5">opae</span>
        <span className="text-[#f9963f] font-bold not-italic">.</span>
      </p>

      {/* 4. Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-8 py-4 bg-[#2e5bff] text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
          View The Repository
        </button>
        <button
          onClick={() => {
            logout();
          }}
          className="px-8 py-4 bg-[#f0f0f0] text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors"
        >
          Logout
        </button>
      </div>
    </section>
  );
}
