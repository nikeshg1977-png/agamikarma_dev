//import { weddingData } from "../../data/weddingData";

import { weddingData } from "./weddingData";

const eventIcons: Record<string, string> = {
 tilak: "🪔",
 mehndi: "🌿",
 haldi: "🌼",
 shadi: "💒",
};

export function WeddingEvents() {
 return (
 <section id="events" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-5xl">
 <div className="mb-12 text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Our Wedding Celebrations</h2>
 </div>

 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
 {weddingData.events.map((event, index) => (
 <div
 key={event.name}
 className="relative border border-[#d9bd79] bg-[#fff8e9] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
 >
 <div className="mb-4 text-center text-4xl">{eventIcons[event.icon]}</div>
 
 <h3 className="font-display text-xl text-[#741d31]">{event.name}</h3>
 
 <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#8a2437]">
 {event.date}
 </p>
 
 {"time" in event && event.time && (
 <p className="mt-1 text-xs text-[#5a1526]">{event.time}</p>
 )}
 
 <p className="mt-4 text-sm leading-6 text-[#5a1526]">{event.description}</p>
 
 <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#d9bd79] bg-[#fff8e9]" />
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
