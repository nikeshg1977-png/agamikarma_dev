import { useEffect, useState } from "react";
import { Petals } from "./Petals";
import { OpeningScreen } from "./OpeningScreen";
import { StickyNav } from "./StickyNav";
import { Hero } from "./Hero";
import { Countdown } from "./Countdown";
import { WeddingEvents } from "./WeddingEvents";
import { CoupleSection } from "./CoupleSection";
import { OurStory } from "./OurStory";
import { Gallery } from "./Gallery";
import { InvitationMessage } from "./InvitationMessage";
import { Footer } from "./Footer";
import { MusicPlayer } from "./MusicPlayer";
import { FinalSection } from "./FinalSection";
import { RSVP } from "./RSVP";
import { Venue } from "./Venue";
export default function WeddingInvitation() {
 const [isOpen, setIsOpen] = useState(false);
 const [isLeaving, setIsLeaving] = useState(false);

 const handleOpen = () => {
 setIsLeaving(true);
 setTimeout(() => setIsOpen(true), 700);
 };

 // Set SEO metadata
 useEffect(() => {
 document.title = "Nidhi & Nikesh | Wedding Invitation";
 
 const metaDescription = document.querySelector('meta[name="description"]');
 if (metaDescription) {
 metaDescription.setAttribute(
 "content",
 "Join Nidhi and Nikesh as they celebrate their wedding on 24 November 2026."
 );
 } else {
 const meta = document.createElement("meta");
 meta.name = "description";
 meta.content = "Join Nidhi and Nikesh as they celebrate their wedding on 24 November 2026.";
 document.head.appendChild(meta);
 }

 return () => {
 document.title = "Wedding Invitation";
 };
 }, []);

 return (
 <div className="min-h-screen bg-[#f8f0df] font-sans text-[#5a1526]">
 <Petals />

 {!isOpen && <OpeningScreen onOpen={handleOpen} isLeaving={isLeaving} />}

 {isOpen && (
 <>
 <StickyNav />
 <main>
 <Hero />
 <Countdown />
 <WeddingEvents />
 <CoupleSection />
 <OurStory />
 <InvitationMessage />
 <Gallery />
 <Venue />
 <RSVP />
 <FinalSection />
 </main>
 <Footer />
 <MusicPlayer />
 </>
 )}
 </div>
 );
}
