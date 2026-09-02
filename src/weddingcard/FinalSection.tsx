//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function FinalSection() {
 return (
 <section className="bg-[#f8f0df] px-5 py-16 text-center sm:px-8">
 <div className="mx-auto max-w-2xl">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-2xl text-[#741d31] sm:text-3xl">
 We can't wait to celebrate with you
 </h2>

 <div className="mt-8">
 <p className="font-display text-xl text-[#741d31]">
 {weddingData.brideName.split(" ")[0]} ❤️ {weddingData.groomName.split(" ")[0]}
 </p>
 <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#8a2437]">
 {weddingData.weddingDateLabel}
 </p>
 </div>

 <div className="mx-auto mt-10 h-px w-32 bg-linear-to-r from-transparent via-[#c49a45] to-transparent" />
 </div>
 </section>
 );
}
