//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

export function Footer() {
 return (
 <footer className="border-t border-[#d9bd79] bg-[#fffaf0] px-5 py-8 text-center sm:px-8">
 <p className="text-xs uppercase tracking-[0.15em] text-[#8a2437]">With Love</p>
 <p className="mt-2 font-display text-lg text-[#741d31]">
 {weddingData.brideName.split(" ")[0]} & {weddingData.groomName.split(" ")[0]}
 </p>
 <p className="mt-1 text-xs text-[#5a1526]">{weddingData.weddingDateLabel}</p>
 </footer>
 );
}
