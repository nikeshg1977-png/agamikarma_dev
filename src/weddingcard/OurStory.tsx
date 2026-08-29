//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function OurStory() {
 return (
 <section id="story" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-4xl">
 <div className="mb-12 text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Our Story</h2>
 </div>

 <div className="relative">
 <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d9bd79] md:left-1/2" />

 {weddingData.story.map((milestone, index) => (
 <div
 key={milestone.title}
 className={`relative mb-10 pl-12 md:pl-0 ${
 index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"
 }`}
 >
 <div
 className={`absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#d9bd79] bg-[#fff8e9] md:left-1/2 ${
 index % 2 === 0 ? "" : ""
 }`}
 />

 <div className="rounded-lg border border-[#d9bd79] bg-[#fff8e9] p-5 shadow-md">
 <h3 className="font-display text-lg text-[#741d31]">{milestone.title}</h3>
 <p className="mt-2 text-sm leading-6 text-[#5a1526]">{milestone.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
