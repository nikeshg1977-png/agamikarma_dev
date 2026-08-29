//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function Venue() {
 return (
 <section id="venue" className="scroll-mt-24 bg-[#f8f0df] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-3xl text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Wedding Venue</h2>

 <div className="mt-8 rounded-lg border border-[#d9bd79] bg-[#fff8e9] p-6 shadow-md">
 <p className="text-sm leading-7 text-[#5a1526]">{weddingData.venue}</p>

 <a
 href={weddingData.mapsUrl}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-6 inline-block border border-[#d8b662] bg-[#d8b662] px-6 py-3 text-xs font-semibold tracking-[0.15em] text-[#43101d] transition hover:-translate-y-1 hover:bg-[#f1d78e]"
 >
 GET DIRECTIONS
 </a>
 </div>
 </div>
 </section>
 );
}
