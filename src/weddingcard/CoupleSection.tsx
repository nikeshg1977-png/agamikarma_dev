//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function CoupleSection() {
 return (
 <section className="bg-[#f8f0df] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-5xl">
 <div className="mb-12 text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">The Bride & Groom</h2>
 </div>

 <div className="grid gap-10 md:grid-cols-2">
 {/* Bride */}
 <div className="text-center">
 <div className="mx-auto mb-6 h-64 w-48 overflow-hidden border-4 border-[#d9bd79] bg-[#fff8e9] p-2 shadow-lg">
 <img
 src={weddingData.brideImage}
 alt={weddingData.brideName}
 className="h-full w-full object-cover"
 />
 </div>
 <h3 className="font-display text-2xl text-[#741d31]">{weddingData.brideName}</h3>
 <p className="mt-3 text-xs leading-6 text-[#5a1526]">{weddingData.brideAddress}</p>
 </div>

 {/* Groom */}
 <div className="text-center">
 <div className="mx-auto mb-6 h-64 w-48 overflow-hidden border-4 border-[#d9bd79] bg-[#fff8e9] p-2 shadow-lg">
 <img
 src={weddingData.groomImage}
 alt={weddingData.groomName}
 className="h-full w-full object-cover"
 />
 </div>
 <h3 className="font-display text-2xl text-[#741d31]">{weddingData.groomName}</h3>
 <p className="mt-3 text-xs leading-6 text-[#5a1526]">{weddingData.groomAddress}</p>
 </div>
 </div>
 </div>
 </section>
 );
}
