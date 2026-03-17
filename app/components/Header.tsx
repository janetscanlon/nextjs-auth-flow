import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  weight: "900",
});

export default function Header() {
  return (
    <header className="flex items-center p-6 bg-white">
      <h1 className="text-4xl flex items-baseline tracking-tight text-black">
        <span className={`${playfair.className} font-black`}>j</span>
        <span className="font-sans font-medium ml-0.5">anet</span>
        <span className="ml-1 h-2.5 w-2.5 rounded-full bg-[#f9963f]" />
      </h1>
    </header>
  );
}
