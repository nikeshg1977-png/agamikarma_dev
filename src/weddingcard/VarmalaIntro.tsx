import { useState } from "react";

type VarmalaIntroProps = {
 brideName: string;
 groomName: string;
 onEnter?: () => void;
};

export default function VarmalaIntro({
 brideName,
 groomName,
 onEnter,
}: VarmalaIntroProps) {
 const [garlanded, setGarlanded] = useState(false);

 const beginCelebration = () => {
 setGarlanded(true);
 window.setTimeout(() => onEnter?.(), 1500);
 };

 return (
 <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#fff8e9] px-5 py-12 text-center">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#f8e7b8_0%,_transparent_42%),radial-gradient(circle_at_bottom,_#f2c8b8_0%,_transparent_45%)]" />

 <div className="relative w-full max-w-3xl">
 <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#9a2a3f]">
 A celebration of love
 </p>

 <h1 className="font-display text-4xl text-[#741d31] sm:text-6xl">
 {brideName} <span className="text-[#c49a45]">&amp;</span> {groomName}
 </h1>

 <div className="relative mx-auto mt-10 h-72 max-w-xl sm:h-80">
 {/* Bride */}
 <div className="absolute bottom-0 left-[16%] h-40 w-24 rounded-t-full bg-[#9a2a3f] shadow-xl sm:left-[20%] sm:h-48 sm:w-32" />
 <div className="absolute bottom-8 left-[19%] h-16 w-16 rounded-full bg-[#dba886] sm:left-[23%]" />

 {/* Groom */}
 <div className="absolute bottom-0 right-[16%] h-40 w-24 rounded-t-full bg-[#243b5a] shadow-xl sm:right-[20%] sm:h-48 sm:w-32" />
 <div className="absolute bottom-8 right-[19%] h-16 w-16 rounded-full bg-[#dba886] sm:right-[23%]" />

 {/* Animated Varmala */}
 <div
 aria-hidden="true"
 className={`absolute left-1/2 top-3 h-44 w-64 -translate-x-1/2 rounded-[50%] border-[12px] border-[#e5b342] shadow-[0_0_0_3px_#a04a31,0_12px_22px_rgba(116,29,49,.25)] transition-all duration-[1400ms] sm:h-52 sm:w-80 ${
 garlanded
 ? "translate-y-28 rotate-0 opacity-100"
 : "-translate-y-24 -rotate-6 opacity-95 animate-[varmala-sway_2.8s_ease-in-out_infinite]"
 }`}
 >
 {Array.from({ length: 15 }).map((_, index) => (
 <span
 key={index}
 className="absolute h-5 w-5 rounded-full bg-[#c83e4d] shadow-sm"
 style={{
 left: `${8 + ((index * 19) % 82)}%`,
 top: `${10 + ((index * 31) % 76)}%`,
 }}
 />
 ))}
 </div>

 {/* Celebration petals after click */}
 {garlanded && (
 <div className="absolute inset-x-0 top-0 animate-[petal-fall_1.5s_ease-out_forwards] text-3xl">
 ✦ ✿ ✦ ✿ ✦ ✿ ✦
 </div>
 )}
 </div>

 <p className="mx-auto mt-3 max-w-md font-display text-xl italic text-[#6e4a45]">
 The varmala moment begins our forever.
 </p>

 <button
 type="button"
 onClick={beginCelebration}
 disabled={garlanded}
 className="mt-8 rounded-full bg-[#741d31] px-7 py-3 text-sm font-semibold tracking-wide text-[#fff8e9] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#9a2a3f] disabled:cursor-default disabled:opacity-80"
 >
 {garlanded ? "Shubh Aarambh" : "Begin the Varmala"}
 </button>
 </div>

 <style>{`
 @keyframes varmala-sway {
 0%, 100% {
 transform: translateX(-50%) translateY(-6rem) rotate(-6deg);
 }
 50% {
 transform: translateX(-50%) translateY(-5rem) rotate(5deg);
 }
 }

 @keyframes petal-fall {
 from {
 transform: translateY(-20px) scale(0.8);
 opacity: 0;
 }
 25% {
 opacity: 1;
 }
 to {
 transform: translateY(260px) scale(1.2);
 opacity: 0;
 }
 }

 @media (prefers-reduced-motion: reduce) {
 * {
 animation-duration: 0.01ms !important;
 animation-iteration-count: 1 !important;
 }
 }
 `}</style>
 </section>
 );
}
