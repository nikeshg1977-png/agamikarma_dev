//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function Hero() {
 return (
 <section
 id="home"
 className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-[#f8f0df] px-5 pb-16 pt-28 sm:px-8"
 >
 <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-[#ead4ae]/50 blur-3xl" />
 <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#8a2437]/10 blur-3xl" />

 <div className="relative mx-auto max-w-4xl text-center">
 <div className="mb-4 text-4xl text-[#c49a45]">❦</div>

 <h1 className="font-display text-5xl leading-tight text-[#741d31] sm:text-7xl">
 {weddingData.brideName}
 </h1>

 <p className="my-3 font-display text-4xl text-[#c49a45] sm:text-5xl">&</p>

 <h1 className="font-display text-5xl leading-tight text-[#741d31] sm:text-7xl">
 {weddingData.groomName}
 </h1>

 <p className="mx-auto mt-8 max-w-xl text-lg leading-7 text-[#5a1526] sm:text-xl">
 Two hearts, one beautiful journey
 </p>

 <p className="mt-4 inline-block rotate-[-2deg] border-b-2 border-dashed border-[#c49a45] px-2 font-display text-2xl tracking-wide text-[#9a2a3f] shadow-sm">
 {weddingData.weddingDateLabel}
</p>


 <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8a2437]">
 {weddingData.locationLabel}
 </p>

 <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />
 </div>
 </section>
 );
}
