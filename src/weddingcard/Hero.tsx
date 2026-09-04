// //import { weddingData } from "../../data/weddingData";

// import { weddingData } from "./weddingData";

// export function Hero() {
//  return (
//  <section
//  id="home"
//  className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden bg-[#f8f0df] px-5 pb-16 pt-28 sm:px-8"
//  >
//  <div className="absolute left-0 top-24 h-52 w-52 rounded-full bg-[#ead4ae]/50 blur-3xl" />
//  <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#8a2437]/10 blur-3xl" />

//  <div className="relative mx-auto max-w-4xl text-center">
//  <div className="mb-4 text-4xl text-[#c49a45]">❦</div>

//  <h1 className="font-display text-5xl leading-tight text-[#741d31] sm:text-7xl">
//  {weddingData.brideName}
//  </h1>

//  <p className="my-3 font-display text-4xl text-[#c49a45] sm:text-5xl">❤️</p>


//  <h1 className="font-display text-5xl leading-tight text-[#741d31] sm:text-7xl">
//  {weddingData.groomName}
//  </h1>

//  <p className="mx-auto mt-8 max-w-xl text-lg leading-7 text-[#5a1526] sm:text-xl">
//  Two hearts, one beautiful journey
//  </p>

//  <p className="mt-4 inline-block rotate-[-2deg] border-b-2 border-dashed border-[#c49a45] px-2 font-display text-2xl tracking-wide text-[#9a2a3f] shadow-sm">
//  {weddingData.weddingDateLabel}
// </p>


//  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8a2437]">
//  {weddingData.locationLabel}
//  </p>

//  <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />
//  </div>
//  </section>
//  );
// }

//===========================================================================================
// import { weddingData } from "../../data/weddingData";

// import { weddingData } from "./weddingData";

// export function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden bg-[#f8f0df] px-5 pb-16 pt-28 sm:px-8"
//     >
//       {/* ================= BACKGROUND IMAGE ================= */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
//         style={{
//           backgroundImage: "url('/images/varmala.jpg')",
//         }}
//       />

//       {/* Soft overlay - keeps the text readable */}
//       <div className="absolute inset-0 bg-[#f8f0df]/75" />

//       {/* Warm golden glow */}
//       <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-[#ead4ae]/30 blur-3xl" />

//       <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8a2437]/10 blur-3xl" />

//       {/* ================= DECORATIVE GARLAND EFFECT ================= */}
//       <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-br-full border-b-2 border-r-2 border-[#c49a45]/30" />

//       <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full border-b-2 border-l-2 border-[#c49a45]/30" />

//       {/* ================= MAIN CONTENT ================= */}
//       <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

//         {/* Small decorative symbol */}
//         <div className="mb-5 text-3xl text-[#c49a45] opacity-90">
//           ❦
//         </div>

//         {/* Top elegant line */}
//         <div className="mx-auto mb-7 flex w-64 items-center justify-center gap-3">
//           <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c49a45]" />

//           <span className="text-lg text-[#c49a45]">✦</span>

//           <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c49a45]" />
//         </div>

//         {/* Bride */}
//         <h1
//           className="
//             font-display
//             text-5xl
//             leading-tight
//             tracking-wide
//             text-[#741d31]
//             drop-shadow-sm
//             sm:text-7xl
//           "
//         >
//           {weddingData.brideName}
//         </h1>

//         {/* Heart / floral separator */}
//         <div className="my-4 flex items-center justify-center gap-4">
//           <span className="h-px w-14 bg-[#c49a45]/60" />

//           <span className="text-2xl text-[#9a2a3f]">♥</span>

//           <span className="h-px w-14 bg-[#c49a45]/60" />
//         </div>

//         {/* Groom */}
//         <h1
//           className="
//             font-display
//             text-5xl
//             leading-tight
//             tracking-wide
//             text-[#741d31]
//             drop-shadow-sm
//             sm:text-7xl
//           "
//         >
//           {weddingData.groomName}
//         </h1>

//         {/* Elegant divider */}
//         <div className="mx-auto mt-8 flex w-72 items-center justify-center gap-3">
//           <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c49a45] to-[#c49a45]" />

//           <span className="text-xl text-[#c49a45]">❈</span>

//           <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c49a45] to-[#c49a45]" />
//         </div>

//         {/* Tagline */}
//         <p className="mx-auto mt-7 max-w-xl font-display text-xl italic leading-8 text-[#5a1526] sm:text-2xl">
//           Two hearts, one beautiful journey
//         </p>

//         {/* Wedding Date */}
//         <div className="mt-7 inline-flex items-center gap-3">
//           <span className="h-px w-8 bg-[#c49a45]/70" />

//           <p
//             className="
//               rotate-[-1deg]
//               border-b
//               border-dashed
//               border-[#c49a45]
//               px-3
//               pb-1
//               font-display
//               text-2xl
//               tracking-wide
//               text-[#9a2a3f]
//               sm:text-3xl
//             "
//           >
//             {weddingData.weddingDateLabel}
//           </p>

//           <span className="h-px w-8 bg-[#c49a45]/70" />
//         </div>

//         {/* Location */}
//         <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#8a2437] sm:text-sm">
//           {weddingData.locationLabel}
//         </p>

//         {/* Bottom ornament */}
//         <div className="mx-auto mt-9 flex items-center justify-center gap-2">
//           <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c49a45]" />
//           <span className="text-sm text-[#c49a45]">✦</span>
//           <span className="text-base text-[#9a2a3f]">❦</span>
//           <span className="text-sm text-[#c49a45]">✦</span>
//           <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c49a45]" />
//         </div>
//       </div>
//     </section>
//   );
// }


//===========================================================================================

// import { weddingData } from "./weddingData";

// const petals = [
//   { left: "3%", delay: "0s", duration: "9s", size: "18px", drift: "-40px" },
//   { left: "10%", delay: "2s", duration: "11s", size: "14px", drift: "30px" },
//   { left: "18%", delay: "5s", duration: "8s", size: "20px", drift: "-25px" },
//   { left: "27%", delay: "1s", duration: "12s", size: "15px", drift: "45px" },
//   { left: "35%", delay: "7s", duration: "10s", size: "18px", drift: "-35px" },
//   { left: "44%", delay: "3s", duration: "9s", size: "13px", drift: "25px" },
//   { left: "53%", delay: "6s", duration: "11s", size: "19px", drift: "-45px" },
//   { left: "62%", delay: "2s", duration: "8s", size: "15px", drift: "35px" },
//   { left: "70%", delay: "8s", duration: "10s", size: "17px", drift: "-30px" },
//   { left: "78%", delay: "4s", duration: "12s", size: "14px", drift: "40px" },
//   { left: "87%", delay: "1s", duration: "9s", size: "20px", drift: "-35px" },
//   { left: "95%", delay: "6s", duration: "11s", size: "16px", drift: "30px" },
// ];

// const sparkles = [
//   { left: "8%", top: "25%", delay: "1s", duration: "3s" },
//   { left: "18%", top: "70%", delay: "2s", duration: "4s" },
//   { left: "30%", top: "18%", delay: "0s", duration: "3.5s" },
//   { left: "42%", top: "75%", delay: "3s", duration: "4s" },
//   { left: "57%", top: "22%", delay: "1.5s", duration: "3s" },
//   { left: "68%", top: "65%", delay: "2.5s", duration: "4.5s" },
//   { left: "82%", top: "28%", delay: "0.5s", duration: "3.5s" },
//   { left: "92%", top: "72%", delay: "2s", duration: "4s" },
// ];

// export function Hero() {
//   return (
//     <>
//       <section
//         id="home"
//         className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden bg-[#f8f0df] px-5 pb-16 pt-28 sm:px-8"
//       >
//         {/* ================= BACKGROUND IMAGE ================= */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url("/images/wedding-hero-bg2.png")`,
//           }}
//         />

//         {/* ================= CINEMATIC OVERLAY ================= */}
//         <div className="absolute inset-0 bg-[#3d0b16]/10" />

//         <div className="absolute inset-0 bg-linear-to-b from-[#f8f0df]/25 via-[#f8f0df]/5 to-[#4d0d1b]/15" />

//         {/* Soft center background for text readability */}
//         <div className="absolute left-1/2 top-1/2 h-[70%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8ea]/30 blur-3xl" />

//         {/* Golden cinematic glow */}
//         <div className="absolute -left-25 top-[20%] h-72 w-72 rounded-full bg-[#f5c96a]/20 blur-3xl" />

//         <div className="absolute -bottom-25 -right-25 h-80 w-80 rounded-full bg-[#8a2437]/20 blur-3xl" />

//         {/* ================= FALLING PETALS ================= */}
//         <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
//           {petals.map((petal, index) => (
//             <span
//               key={index}
//               className="falling-petal absolute top-[-40px]"
//               style={
//                 {
//                   left: petal.left,
//                   animationDelay: petal.delay,
//                   animationDuration: petal.duration,
//                   width: petal.size,
//                   height: `calc(${petal.size} * 0.7)`,
//                   "--drift": petal.drift,
//                 } as React.CSSProperties
//               }
//             />
//           ))}
//         </div>

//         {/* ================= FLOATING SPARKLES ================= */}
//         <div className="pointer-events-none absolute inset-0 z-[3]">
//           {sparkles.map((sparkle, index) => (
//             <span
//               key={index}
//               className="gold-sparkle absolute"
//               style={{
//                 left: sparkle.left,
//                 top: sparkle.top,
//                 animationDelay: sparkle.delay,
//                 animationDuration: sparkle.duration,
//               }}
//             >
//               ✦
//             </span>
//           ))}
//         </div>

//         {/* ================= MAIN CONTENT ================= */}
//         <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
//           {/* Top Symbol */}
//           <div className="hero-symbol mb-4 text-4xl text-[#c49a45]">
//             ❦
//           </div>

//           {/* Decorative top line */}
//           <div className="mx-auto mb-7 flex w-64 items-center justify-center gap-3 sm:w-80">
//             <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c49a45]" />

//             <span className="text-lg text-[#c49a45]">✦</span>

//             <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c49a45]" />
//           </div>

//           {/* Bride */}
//           <h1 className="font-display font-extrabold text-5xl leading-tight tracking-wide text-[#741d31] drop-shadow-md sm:text-7xl md:text-8xl">
//             {weddingData.brideName}
//           </h1>

//           {/* Heart Separator */}
//           <div className="my-5 flex items-center justify-center gap-4">
//             <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c49a45]" />

//             <span className="heart-pulse text-2xl text-[#9a2a3f]">
//               ♥
//             </span>

//             <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c49a45]" />
//           </div>

//           {/* Groom */}
//           <h1 className="font-display text-5xl leading-tight tracking-wide text-[#741d31] drop-shadow-md sm:text-7xl md:text-8xl">
//             {weddingData.groomName}
//           </h1>

//           {/* Middle ornament */}
//           <div className="mx-auto mt-7 flex w-72 items-center justify-center gap-3 sm:w-96">
//             <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c49a45] to-[#c49a45]" />

//             <span className="text-xl text-[#c49a45]">❈</span>

//             <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c49a45] to-[#c49a45]" />
//           </div>

//           {/* Beautiful Wedding Line */}
//           <p className="mx-auto mt-7 max-w-2xl font-display text-xl italic leading-8 text-[#5a1526] drop-shadow-sm sm:text-2xl sm:leading-9">
//             “Two beautiful souls, one eternal promise,
//             <br className="hidden sm:block" />
//             and a lifetime of love begins.”
//           </p>

//           {/* Date */}
//           <div className="mt-8 inline-flex items-center gap-3">
//             <span className="h-px w-8 bg-[#c49a45]/80" />

//             <p className="rotate-[-1deg] border-b-2 border-dashed border-[#c49a45] px-3 pb-1 font-display text-2xl tracking-wide text-[#9a2a3f] sm:text-3xl">
//               {weddingData.weddingDateLabel}
//             </p>

//             <span className="h-px w-8 bg-[#c49a45]/80" />
//           </div>

//           {/* Location */}
//           <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#741d31] drop-shadow-sm sm:text-sm">
//             {weddingData.locationLabel}
//           </p>

//           {/* Bottom Decoration */}
//           <div className="mx-auto mt-9 flex items-center justify-center gap-3">
//             <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c49a45]" />

//             <span className="text-sm text-[#c49a45]">✦</span>

//             <span className="text-lg text-[#8a2437]">❦</span>

//             <span className="text-sm text-[#c49a45]">✦</span>

//             <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c49a45]" />
//           </div>
//         </div>

//         {/* Cinematic vignette */}
//         <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(54,8,19,0.12)_100%)]" />
//       </section>

//       {/* ================= ANIMATIONS ================= */}
//       <style>{`
//         .falling-petal {
//           background: linear-gradient(
//             135deg,
//             #9a1730,
//             #d44b62,
//             #f2a0a8
//           );
//           border-radius: 100% 0 100% 0;
//           opacity: 0;
//           filter: drop-shadow(0 3px 3px rgba(80, 0, 10, 0.2));
//           animation-name: fallPetal;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }

//         @keyframes fallPetal {
//           0% {
//             transform: translate3d(0, -50px, 0) rotate(0deg);
//             opacity: 0;
//           }

//           10% {
//             opacity: 0.9;
//           }

//           50% {
//             transform:
//               translate3d(var(--drift), 50vh, 0)
//               rotate(180deg);
//           }

//           90% {
//             opacity: 0.8;
//           }

//           100% {
//             transform:
//               translate3d(calc(var(--drift) * -1), 110vh, 0)
//               rotate(360deg);
//             opacity: 0;
//           }
//         }

//         .gold-sparkle {
//           color: #d8a83d;
//           font-size: 14px;
//           text-shadow: 0 0 12px rgba(255, 215, 120, 0.9);
//           animation-name: sparkle;
//           animation-timing-function: ease-in-out;
//           animation-iteration-count: infinite;
//         }

//         @keyframes sparkle {
//           0%,
//           100% {
//             opacity: 0.2;
//             transform: scale(0.7);
//           }

//           50% {
//             opacity: 1;
//             transform: scale(1.5);
//           }
//         }

//         .heart-pulse {
//           display: inline-block;
//           animation: heartPulse 2.5s ease-in-out infinite;
//         }

//         @keyframes heartPulse {
//           0%,
//           100% {
//             transform: scale(1);
//           }

//           50% {
//             transform: scale(1.18);
//           }
//         }

//         .hero-symbol {
//           animation: gentleFloat 3s ease-in-out infinite;
//         }

//         @keyframes gentleFloat {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-8px);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .falling-petal,
//           .gold-sparkle,
//           .heart-pulse,
//           .hero-symbol {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

//===========================================================================================
import { weddingData } from "./weddingData";

const petals = [
  { left: "3%", delay: "0s", duration: "9s", size: "18px", drift: "-40px" },
  { left: "10%", delay: "2s", duration: "11s", size: "14px", drift: "30px" },
  { left: "18%", delay: "5s", duration: "8s", size: "20px", drift: "-25px" },
  { left: "27%", delay: "1s", duration: "12s", size: "15px", drift: "45px" },
  { left: "35%", delay: "7s", duration: "10s", size: "18px", drift: "-35px" },
  { left: "44%", delay: "3s", duration: "9s", size: "13px", drift: "25px" },
  { left: "53%", delay: "6s", duration: "11s", size: "19px", drift: "-45px" },
  { left: "62%", delay: "2s", duration: "8s", size: "15px", drift: "35px" },
  { left: "70%", delay: "8s", duration: "10s", size: "17px", drift: "-30px" },
  { left: "78%", delay: "4s", duration: "12s", size: "14px", drift: "40px" },
  { left: "87%", delay: "1s", duration: "9s", size: "20px", drift: "-35px" },
  { left: "95%", delay: "6s", duration: "11s", size: "16px", drift: "30px" },
];

const sparkles = [
  { left: "8%", top: "25%", delay: "1s", duration: "3s" },
  { left: "18%", top: "70%", delay: "2s", duration: "4s" },
  { left: "30%", top: "18%", delay: "0s", duration: "3.5s" },
  { left: "42%", top: "75%", delay: "3s", duration: "4s" },
  { left: "57%", top: "22%", delay: "1.5s", duration: "3s" },
  { left: "68%", top: "65%", delay: "2.5s", duration: "4.5s" },
  { left: "82%", top: "28%", delay: "0.5s", duration: "3.5s" },
  { left: "92%", top: "72%", delay: "2s", duration: "4s" },
];

export function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden bg-[#f8f0df] px-4 pb-16 pt-28 sm:px-8"
      >
        {/* ================= BACKGROUND IMAGE ================= */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/wedding-hero-bg2.png")`,
          }}
        />

        {/* ================= CINEMATIC DARK OVERLAY ================= */}
        <div className="absolute inset-0 bg-[#2f0812]/15" />

        {/* Soft cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fff7e8]/15 via-transparent to-[#3d0715]/20" />

        {/* ================= TEXT READABILITY AREA ================= */}
        <div className="absolute left-1/2 top-1/2 h-[72%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#fff8ec]/35 blur-3xl sm:w-[75%]" />

        {/* Golden glow */}
        <div className="absolute -left-24 top-[15%] h-72 w-72 rounded-full bg-[#f5c96a]/25 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[#8a2437]/20 blur-3xl" />

        {/* ================= FALLING PETALS ================= */}
        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          {petals.map((petal, index) => (
            <span
              key={index}
              className="falling-petal absolute top-[-40px]"
              style={
                {
                  left: petal.left,
                  animationDelay: petal.delay,
                  animationDuration: petal.duration,
                  width: petal.size,
                  height: `calc(${petal.size} * 0.7)`,
                  "--drift": petal.drift,
                } as React.CSSProperties
              }
            />
          ))}
        </div>

        {/* ================= GOLDEN SPARKLES ================= */}
        <div className="pointer-events-none absolute inset-0 z-[3]">
          {sparkles.map((sparkle, index) => (
            <span
              key={index}
              className="gold-sparkle absolute"
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDelay: sparkle.delay,
                animationDuration: sparkle.duration,
              }}
            >
              ✦
            </span>
          ))}
        </div>

        {/* ================= MAIN CONTENT ================= */}
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          {/* Top decoration */}
          <div className="hero-symbol mb-3 text-4xl text-[#b8862e]">
            ❦
          </div>

          {/* Top decorative line */}
          <div className="mx-auto mb-6 flex w-64 items-center justify-center gap-3 sm:w-80">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b8862e]" />

            <span className="text-lg text-[#b8862e]">✦</span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b8862e]" />
          </div>

          {/* ================= BRIDE NAME ================= */}
          <h1
            className="
              wedding-name
              text-5xl
              leading-tight
              sm:text-7xl
              md:text-8xl
            "
          >
            {weddingData.brideName}
          </h1>

          {/* Heart separator */}
          <div className="my-4 flex items-center justify-center gap-4 sm:my-5">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#b8862e]" />

            <span className="heart-pulse text-2xl text-[#8a2437] sm:text-3xl">
              ♥
            </span>

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#b8862e]" />
          </div>

          {/* ================= GROOM NAME ================= */}
          <h1
            className="
              wedding-name
              text-5xl
              leading-tight
              sm:text-7xl
              md:text-8xl
            "
          >
            {weddingData.groomName}
          </h1>

          {/* Middle ornament */}
          <div className="mx-auto mt-6 flex w-72 items-center justify-center gap-3 sm:mt-8 sm:w-96">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b8862e] to-[#b8862e]" />

            <span className="text-xl text-[#b8862e]">❈</span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#b8862e] to-[#b8862e]" />
          </div>

          {/* Beautiful wedding line */}
          <p className="wedding-quote mx-auto mt-6 max-w-2xl text-lg italic leading-8 sm:mt-7 sm:text-2xl sm:leading-9">
            “Two beautiful souls, one eternal promise,
            <br className="hidden sm:block" />
            and a lifetime of love begins.”
          </p>

          {/* Wedding Date */}
          <div className="mt-7 inline-flex items-center gap-3 sm:mt-8">
            <span className="h-px w-8 bg-[#b8862e]/80" />

            <p className="wedding-date rotate-[-1deg] border-b-2 border-dashed border-[#b8862e] px-3 pb-1 text-xl tracking-wide sm:text-3xl">
              {weddingData.weddingDateLabel}
            </p>

            <span className="h-px w-8 bg-[#b8862e]/80" />
          </div>

          {/* Location */}
          <p className="wedding-location mt-4 text-xs uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.25em]">
            {weddingData.locationLabel}
          </p>

          {/* Bottom decoration */}
          <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-9">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b8862e] sm:w-20" />

            <span className="text-sm text-[#b8862e]">✦</span>

            <span className="text-lg text-[#8a2437]">❦</span>

            <span className="text-sm text-[#b8862e]">✦</span>

            <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b8862e] sm:w-20" />
          </div>
        </div>

        {/* Cinematic vignette */}
        <div className="pointer-events-none absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(54,8,19,0.18)_100%)]" />
      </section>

      {/* ================= CUSTOM STYLES ================= */}
      <style>{`
        .wedding-name {
          position: relative;
          z-index: 20;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #68142a;
          text-shadow:
            0 1px 0 rgba(255, 245, 220, 0.95),
            0 3px 8px rgba(255, 245, 220, 0.9),
            0 6px 18px rgba(60, 5, 18, 0.25);
        }

        .wedding-quote {
          position: relative;
          z-index: 20;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 700;
          color: #571020;
          text-shadow:
            0 2px 6px rgba(255, 250, 235, 0.95);
        }

        .wedding-date {
          position: relative;
          z-index: 20;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 900;
          color: #7a1d32;
          text-shadow:
            0 2px 6px rgba(255, 250, 235, 0.9);
        }

        .wedding-location {
          position: relative;
          z-index: 20;
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 800;
          color: #641329;
          text-shadow:
            0 2px 6px rgba(255, 250, 235, 0.95);
        }

        .falling-petal {
          background: linear-gradient(
            135deg,
            #8b1029,
            #c93650,
            #f09aa4
          );
          border-radius: 100% 0 100% 0;
          opacity: 0;
          filter: drop-shadow(0 3px 3px rgba(80, 0, 10, 0.25));
          animation-name: fallPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fallPetal {
          0% {
            transform: translate3d(0, -50px, 0) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.9;
          }

          50% {
            transform:
              translate3d(var(--drift), 50vh, 0)
              rotate(180deg);
          }

          90% {
            opacity: 0.8;
          }

          100% {
            transform:
              translate3d(calc(var(--drift) * -1), 110vh, 0)
              rotate(360deg);
            opacity: 0;
          }
        }

        .gold-sparkle {
          color: #d8a83d;
          font-size: 14px;
          text-shadow: 0 0 12px rgba(255, 215, 120, 0.95);
          animation-name: sparkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes sparkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(0.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .heart-pulse {
          display: inline-block;
          filter: drop-shadow(0 2px 5px rgba(90, 0, 20, 0.25));
          animation: heartPulse 2.5s ease-in-out infinite;
        }

        @keyframes heartPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.18);
          }
        }

        .hero-symbol {
          filter: drop-shadow(0 2px 5px rgba(255, 235, 180, 0.8));
          animation: gentleFloat 3s ease-in-out infinite;
        }

        @keyframes gentleFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        @media (max-width: 640px) {
          .wedding-name {
            letter-spacing: 0.02em;
            text-shadow:
              0 1px 0 rgba(255, 245, 220, 1),
              0 2px 6px rgba(255, 245, 220, 0.9),
              0 4px 12px rgba(60, 5, 18, 0.25);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .falling-petal,
          .gold-sparkle,
          .heart-pulse,
          .hero-symbol {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}