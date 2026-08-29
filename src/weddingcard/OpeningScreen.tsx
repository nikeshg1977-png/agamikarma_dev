//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

type OpeningScreenProps = {
 onOpen: () => void;
 isLeaving: boolean;
};

export function OpeningScreen({ onOpen, isLeaving }: OpeningScreenProps) {
 return (
 <section
 className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#3b0c19] px-5 transition-all duration-700 ${
 isLeaving ? "scale-105 opacity-0 pointer-events-none" : "opacity-100"
 }`}
 aria-label="Wedding invitation opening"
 >
 <div className="absolute inset-5 border border-[#d7b263]/40 sm:inset-8" />
 <div className="absolute inset-7 border border-[#f5ead2]/25 sm:inset-10" />

 <div className="relative max-w-2xl text-center text-[#fff8e9]">
 <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#e4c477] sm:text-sm">
 Together with their families
 </p>

 <div className="mb-5 text-[#dcb85f] text-4xl leading-none">❦</div>

 <h1 className="font-display text-5xl leading-tight sm:text-7xl">
 {weddingData.brideName}
 </h1>

 <p className="my-2 font-display text-3xl text-[#e7c979] sm:text-4xl">&</p>

 <h1 className="font-display text-5xl leading-tight sm:text-7xl">
 {weddingData.groomName}
 </h1>

 <p className="mx-auto mt-8 max-w-md text-base leading-7 text-[#f3e8d5] sm:text-lg">
 Invite you to celebrate their wedding
 </p>

 <p className="mt-4 font-display text-2xl tracking-wide text-[#e7c979]">
 {weddingData.weddingDateLabel}
 </p>

 <button
 type="button"
 onClick={onOpen}
 className="mt-10 border border-[#d8b662] bg-[#d8b662] px-7 py-3 text-xs font-semibold tracking-[0.22em] text-[#43101d] transition hover:-translate-y-1 hover:bg-[#f1d78e] focus:outline-none focus:ring-2 focus:ring-[#f1d78e] focus:ring-offset-2 focus:ring-offset-[#3b0c19]"
 >
 OPEN INVITATION
 </button>
 </div>
 </section>
 );
}
