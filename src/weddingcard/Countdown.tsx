// import { useEffect, useState } from "react";
// import { weddingData } from "./weddingData";
// //import { weddingData } from "../../data/weddingData";

// function calculateTimeLeft(targetDate: string) {
//  const difference = +new Date(targetDate) - +new Date();
 
//  if (difference <= 0) {
//  return { days: 0, hours: 0, minutes: 0, seconds: 0, isToday: true };
//  }

//  return {
//  days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//  hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//  minutes: Math.floor((difference / 1000 / 60) % 60),
//  seconds: Math.floor((difference / 1000) % 60),
//  isToday: false,
//  };
// }

// export function Countdown() {
//  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(weddingData.weddingDate));

//  useEffect(() => {
//  const timer = setInterval(() => {
//  setTimeLeft(calculateTimeLeft(weddingData.weddingDate));
//  }, 1000);

//  return () => clearInterval(timer);
//  }, []);

//  if (timeLeft.isToday) {
//  return (
//  <section className="bg-[#f8f0df] px-5 py-16 text-center sm:px-8">
//  <div className="mx-auto max-w-2xl">
//  <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
//  <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Today is the Day!</h2>
//  <p className="mt-4 text-[#5a1526]">We can't wait to celebrate with you!</p>
//  </div>
//  </section>
//  );
//  }

//  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
//  <div className="flex flex-col items-center">
//  <div className="flex h-16 w-16 items-center justify-center border border-[#d9bd79] bg-[#fffaf0] sm:h-20 sm:w-20">
//  <span className="font-display text-2xl text-[#741d31] sm:text-3xl">
//  {String(value).padStart(2, "0")}
//  </span>
//  </div>
//  <span className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8a2437]">{label}</span>
//  </div>
//  );

//  return (
//  <section className="bg-[#f8f0df] px-5 py-16 text-center sm:px-8">
//  <div className="mx-auto max-w-2xl">
//  <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
//  <h2 className="font-display text-2xl text-[#741d31] sm:text-3xl">Counting Down to Our Big Day</h2>
 
//  <div className="mt-8 flex justify-center gap-4 sm:gap-6">
//  <TimeUnit value={timeLeft.days} label="Days" />
//  <TimeUnit value={timeLeft.hours} label="Hours" />
//  <TimeUnit value={timeLeft.minutes} label="Minutes" />
//  <TimeUnit value={timeLeft.seconds} label="Seconds" />
//  </div>
//  </div>
//  </section>
//  );
// }

//===================================================================================================
import { useEffect, useState } from "react";
import { weddingData } from "./weddingData";
// import { weddingData } from "../../data/weddingData";

function calculateTimeLeft(targetDate: string) {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isToday: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
    isToday: false,
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(weddingData.weddingDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingData.weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isToday) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff7ed] via-[#f8e7e2] to-[#ead1c5] px-5 py-20 text-center sm:px-8">
        
        {/* Decorative background */}
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#d4a373]/10 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#741d31]/10 blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <div className="mb-5 animate-bounce text-5xl text-[#c49a45]">
            ❦
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#b58a43]">
            A Beautiful Beginning
          </p>

          <h2 className="font-display text-4xl font-semibold text-[#741d31] sm:text-5xl">
            Today is the Day!
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />

          <p className="mt-6 text-base leading-relaxed text-[#5a1526] sm:text-lg">
            The moment we have been waiting for is finally here.
            <br />
            Come celebrate our beautiful beginning with us. 💕
          </p>

          <div className="mt-8 text-4xl">💍</div>
        </div>
      </section>
    );
  }

  const TimeUnit = ({
    value,
    label,
    isSeconds = false,
  }: {
    value: number;
    label: string;
    isSeconds?: boolean;
  }) => (
    <div className="group flex flex-col items-center">
      
      {/* Number Card */}
      <div
        className={`relative flex h-[72px] w-[68px] items-center justify-center overflow-hidden rounded-2xl border border-[#d9bd79]/60 bg-white/60 shadow-[0_10px_30px_rgba(116,29,49,0.12)] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(116,29,49,0.2)] sm:h-[95px] sm:w-[90px]
        ${isSeconds ? "animate-pulse" : ""}`}
      >
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#c49a45]/10" />

        {/* Top decorative line */}
        <div className="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />

        <span className="relative font-display text-2xl font-semibold text-[#741d31] sm:text-4xl">
          {String(value).padStart(2, "0")}
        </span>

        {/* Bottom shine */}
        <div className="absolute bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#c49a45]/30 transition-all duration-500 group-hover:w-12" />
      </div>

      {/* Label */}
      <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#8a2437] sm:text-xs">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fffaf3] via-[#f8eadf] to-[#ead7cc] px-4 py-20 text-center sm:px-8 sm:py-24">
      
      {/* Background decorative elements */}
      <div className="absolute left-[5%] top-[10%] text-6xl text-[#c49a45]/10">
        ❀
      </div>

      <div className="absolute right-[8%] top-[15%] text-7xl text-[#741d31]/10">
        ❦
      </div>

      <div className="absolute bottom-[10%] left-[8%] text-5xl text-[#c49a45]/10">
        ✦
      </div>

      <div className="absolute bottom-[5%] right-[5%] text-6xl text-[#741d31]/10">
        ❀
      </div>

      {/* Soft glowing circles */}
      <div className="absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-[#c49a45]/10 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#741d31]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl">

        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c49a45]" />
          
          <span className="text-3xl text-[#c49a45]">
            ❦
          </span>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c49a45]" />
        </div>

        {/* Small Title */}
        <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.4em] text-[#b58a43] sm:text-xs">
          The Celebration Begins In
        </p>

        {/* Main Heading */}
        <h2 className="mt-4 font-display text-3xl font-semibold text-[#741d31] sm:text-5xl">
          Counting Down to
          <span className="mt-1 block font-light italic text-[#a35b47]">
            Our Forever
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#6e3a42] sm:text-base">
          Every second brings us closer to the moment when two hearts
          become one beautiful story.
        </p>

        {/* Divider */}
        <div className="mx-auto mt-7 h-px w-32 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />

        {/* Countdown */}
        <div className="relative mt-10 flex flex-wrap justify-center gap-5 sm:gap-7">
          <TimeUnit
            value={timeLeft.days}
            label="Days"
          />

          <TimeUnit
            value={timeLeft.hours}
            label="Hours"
          />

          <TimeUnit
            value={timeLeft.minutes}
            label="Minutes"
          />

          <TimeUnit
            value={timeLeft.seconds}
            label="Seconds"
            isSeconds
          />
        </div>

        {/* Bottom Message */}
        <div className="mt-10 flex flex-col items-center">
          <span className="text-2xl text-[#c49a45]">❦</span>

          <p className="mt-3 font-display text-lg italic text-[#741d31]">
            A beautiful journey is about to begin
          </p>

          <div className="mt-4 flex items-center gap-2 text-[#c49a45]">
            <span>✦</span>
            <span className="text-xl">💍</span>
            <span>✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}