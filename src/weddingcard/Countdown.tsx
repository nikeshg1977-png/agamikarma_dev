import { useEffect, useState } from "react";
import { weddingData } from "./weddingData";
//import { weddingData } from "../../data/weddingData";

function calculateTimeLeft(targetDate: string) {
 const difference = +new Date(targetDate) - +new Date();
 
 if (difference <= 0) {
 return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
 }

 return {
 days: Math.floor(difference / (1000 * 60 * 60 * 24)),
 hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
 minutes: Math.floor((difference / 1000 / 60) % 60),
 seconds: Math.floor((difference / 1000) % 60),
 isToday: false,
 };
}

export function Countdown() {
 const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingData.weddingDate));

 useEffect(() => {
 const timer = setInterval(() => {
 setTimeLeft(calculateTimeLeft(weddingData.weddingDate));
 }, 1000);

 return () => clearInterval(timer);
 }, []);

 if (timeLeft.isToday) {
 return (
 <section className="bg-[#f8f0df] px-5 py-16 text-center sm:px-8">
 <div className="mx-auto max-w-2xl">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Today is the Day!</h2>
 <p className="mt-4 text-[#5a1526]">We can't wait to celebrate with you!</p>
 </div>
 </section>
 );
 }

 const TimeUnit = ({ value, label }: { value: number; label: string }) => (
 <div className="flex flex-col items-center">
 <div className="flex h-16 w-16 items-center justify-center border border-[#d9bd79] bg-[#fffaf0] sm:h-20 sm:w-20">
 <span className="font-display text-2xl text-[#741d31] sm:text-3xl">
 {String(value).padStart(2, "0")}
 </span>
 </div>
 <span className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8a2437]">{label}</span>
 </div>
 );

 return (
 <section className="bg-[#f8f0df] px-5 py-16 text-center sm:px-8">
 <div className="mx-auto max-w-2xl">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-2xl text-[#741d31] sm:text-3xl">Counting Down to Our Big Day</h2>
 
 <div className="mt-8 flex justify-center gap-4 sm:gap-6">
 <TimeUnit value={timeLeft.days} label="Days" />
 <TimeUnit value={timeLeft.hours} label="Hours" />
 <TimeUnit value={timeLeft.minutes} label="Minutes" />
 <TimeUnit value={timeLeft.seconds} label="Seconds" />
 </div>
 </div>
 </section>
 );
}
