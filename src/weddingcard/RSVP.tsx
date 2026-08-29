import { useState, FormEvent } from "react";

type RSVPData = {
 name: string;
 guests: string;
 attendance: string;
 message: string;
};

export function RSVP() {
 const [formData, setFormData] = useState<RSVPData>({
 name: "",
 guests: "",
 attendance: "",
 message: "",
 });
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: FormEvent) => {
 e.preventDefault();
 
 // Store in localStorage
 const existing = JSON.parse(localStorage.getItem("weddingRSVP") || "[]");
 existing.push({...formData, timestamp: new Date().toISOString() });
 localStorage.setItem("weddingRSVP", JSON.stringify(existing));

 setSubmitted(true);
 
 // Reset form after 3 seconds
 setTimeout(() => {
 setSubmitted(false);
 setFormData({ name: "", guests: "", attendance: "", message: "" });
 }, 3000);
 };

 if (submitted) {
 return (
 <section id="rsvp" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-xl text-center">
 <div className="mb-4 text-4xl text-[#c49a45]">✓</div>
 <h2 className="font-display text-2xl text-[#741d31]">Thank You!</h2>
 <p className="mt-3 text-[#5a1526]">Your response has been saved.</p>
 </div>
 </section>
 );
 }

 return (
 <section id="rsvp" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-xl">
 <div className="mb-12 text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">RSVP</h2>
 <p className="mt-3 text-[#5a1526]">Please let us know if you can make it!</p>
 </div>

 <form onSubmit={handleSubmit} className="space-y-5">
 <div>
 <label className="block text-xs font-semibold uppercase tracking-widest text-[#741d31]">
 Full Name
 </label>
 <input
 type="text"
 required
 value={formData.name}
 onChange={(e) => setFormData({...formData, name: e.target.value })}
 className="mt-2 w-full border border-[#d9bd79] bg-[#fff8e9] px-4 py-3 text-[#5a1526] focus:outline-none focus:ring-2 focus:ring-[#c49a45]"
 placeholder="Your full name"
 />
 </div>

 <div>
 <label className="block text-xs font-semibold uppercase tracking-widest text-[#741d31]">
 Number of Guests
 </label>
 <input
 type="number"
 required
 min="1"
 value={formData.guests}
 onChange={(e) => setFormData({...formData, guests: e.target.value })}
 className="mt-2 w-full border border-[#d9bd79] bg-[#fff8e9] px-4 py-3 text-[#5a1526] focus:outline-none focus:ring-2 focus:ring-[#c49a45]"
 placeholder="1"
 />
 </div>

 <div>
 <label className="block text-xs font-semibold uppercase tracking-widest text-[#741d31]">
 Will You Attend?
 </label>
 <div className="mt-2 space-y-2">
 <label className="flex items-center gap-3">
 <input
 type="radio"
 name="attendance"
 value="accept"
 required
 checked={formData.attendance === "accept"}
 onChange={(e) => setFormData({...formData, attendance: e.target.value })}
 className="h-4 w-4 text-[#c49a45]"
 />
 <span className="text-[#5a1526]">Joyfully Accept</span>
 </label>
 <label className="flex items-center gap-3">
 <input
 type="radio"
 name="attendance"
 value="decline"
 required
 checked={formData.attendance === "decline"}
 onChange={(e) => setFormData({...formData, attendance: e.target.value })}
 className="h-4 w-4 text-[#c49a45]"
 />
 <span className="text-[#5a1526]">Regretfully Decline</span>
 </label>
 </div>
 </div>

 <div>
 <label className="block text-xs font-semibold uppercase tracking-widest text-[#741d31]">
 Message
 </label>
 <textarea
 rows={4}
 value={formData.message}
 onChange={(e) => setFormData({...formData, message: e.target.value })}
 className="mt-2 w-full border border-[#d9bd79] bg-[#fff8e9] px-4 py-3 text-[#5a1526] focus:outline-none focus:ring-2 focus:ring-[#c49a45]"
 placeholder="Your message for the couple..."
 />
 </div>

 <button
 type="submit"
 className="mt-4 w-full border border-[#d8b662] bg-[#d8b662] px-6 py-3 text-xs font-semibold tracking-[0.15em] text-[#43101d] transition hover:-translate-y-1 hover:bg-[#f1d78e]"
 >
 SEND RSVP
 </button>
 </form>
 </div>
 </section>
 );
}
