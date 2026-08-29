import { useState } from "react";

const links = [
 { label: "Home", id: "home" },
 { label: "Our Story", id: "story" },
 { label: "Events", id: "events" },
 { label: "Gallery", id: "gallery" },
 { label: "Venue", id: "venue" },
 { label: "RSVP", id: "rsvp" },
];

export function StickyNav() {
 const [open, setOpen] = useState(false);

 const navigate = (id: string) => {
 document.getElementById(id)?.scrollIntoView({
 behavior: "smooth",
 block: "start",
 });
 setOpen(false);
 };

 return (
 <header className="fixed left-0 right-0 top-0 z-40 px-3 pt-3 sm:px-5">
 <nav className="mx-auto max-w-6xl border border-[#d9bd79]/60 bg-[#fffaf0]/90 px-4 py-3 shadow-lg shadow-[#4c1420]/10 backdrop-blur-md sm:px-6">
 <div className="flex items-center justify-between">
 <button
 className="font-display text-xl text-[#741d31]"
 type="button"
 onClick={() => navigate("home")}
 >
 N <span className="text-[#c8a253]">&</span> N
 </button>

 <div className="hidden items-center gap-5 lg:flex">
 {links.map((link) => (
 <button
 key={link.id}
 type="button"
 onClick={() => navigate(link.id)}
 className="text-xs font-semibold uppercase tracking-[0.13em] text-[#68172b] transition hover:text-[#c49a45]"
 >
 {link.label}
 </button>
 ))}
 </div>

 <button
 type="button"
 className="grid h-9 w-9 place-items-center border border-[#d8bd79] text-[#741d31] lg:hidden"
 aria-label="Toggle navigation menu"
 aria-expanded={open}
 onClick={() => setOpen((value) => !value)}
 >
 <span className="text-xl">{open ? "×" : "☰"}</span>
 </button>
 </div>

 {open && (
 <div className="mt-3 grid border-t border-[#e6d7b8] pt-3 lg:hidden">
 {links.map((link) => (
 <button
 key={link.id}
 type="button"
 onClick={() => navigate(link.id)}
 className="py-3 text-left text-xs font-semibold uppercase tracking-[0.16em] text-[#68172b]"
 >
 {link.label}
 </button>
 ))}
 </div>
 )}
 </nav>
 </header>
 );
}
