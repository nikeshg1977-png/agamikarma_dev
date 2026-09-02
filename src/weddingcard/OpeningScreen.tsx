// //import { weddingData } from "../../data/weddingData";

// import { weddingData } from "./weddingData";

// type OpeningScreenProps = {
//  onOpen: () => void;
//  isLeaving: boolean;
// };

// export function OpeningScreen({ onOpen, isLeaving }: OpeningScreenProps) {
//  return (
//  <section
//  className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#3b0c19] px-5 transition-all duration-700 ${
//  isLeaving ? "scale-105 opacity-0 pointer-events-none" : "opacity-100"
//  }`}
//  aria-label="Wedding invitation opening"
//  >
//  <div className="absolute inset-5 border border-[#d7b263]/40 sm:inset-8" />
//  <div className="absolute inset-7 border border-[#f5ead2]/25 sm:inset-10" />

//  <div className="relative max-w-2xl text-center text-[#fff8e9]">
//  <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#e4c477] sm:text-sm">
//  Together with their families
//  </p>

//  <div className="mb-5 text-[#dcb85f] text-4xl leading-none">❦</div>

//  <h1 className="font-display text-5xl leading-tight sm:text-7xl">
//  {weddingData.brideName}
//  </h1>

//  <p className="my-2 font-display text-3xl text-[#e7c979] sm:text-4xl">&</p>

//  <h1 className="font-display text-5xl leading-tight sm:text-7xl">
//  {weddingData.groomName}
//  </h1>

//  <p className="mx-auto mt-8 max-w-md text-base leading-7 text-[#f3e8d5] sm:text-lg">
//  Invite you to celebrate their wedding
//  </p>

//  <p className="mt-4 font-display text-2xl tracking-wide text-[#e7c979]">
//  {weddingData.weddingDateLabel}
//  </p>

//  <button
//  type="button"
//  onClick={onOpen}
//  className="mt-10 border border-[#d8b662] bg-[#d8b662] px-7 py-3 text-xs font-semibold tracking-[0.22em] text-[#43101d] transition hover:-translate-y-1 hover:bg-[#f1d78e] focus:outline-none focus:ring-2 focus:ring-[#f1d78e] focus:ring-offset-2 focus:ring-offset-[#3b0c19]"
//  >
//  OPEN INVITATION
//  </button>
//  </div>
//  </section>
//  );
// }
//==================================================================================================
// import { weddingData } from "./weddingData";

// type OpeningScreenProps = {
//   onOpen: () => void;
//   isLeaving: boolean;
// };

// export function OpeningScreen({
//   onOpen,
//   isLeaving,
// }: OpeningScreenProps) {
//   return (
//     <section
//       className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#25030d] transition-all duration-700 ${
//         isLeaving
//           ? "scale-105 pointer-events-none opacity-0"
//           : "scale-100 opacity-100"
//       }`}
//       aria-label="Wedding invitation opening"
//     >
//       {/* =========================
//           BACKGROUND IMAGE
//       ========================== */}

//       <div
//         className="
//           absolute inset-0
//           bg-contain
//           bg-center
//           bg-no-repeat
//         "
//         style={{
//           backgroundImage: "url('/images/wedding-opening-bg.png')",
//         }}
//       />

//       {/* =========================
//           OPEN INVITATION BUTTON
//       ========================== */}

//       <div className="absolute bottom-[8%] left-1/2 z-10 -translate-x-1/2">
//         <button
//           type="button"
//           onClick={onOpen}
//           className="
//             group relative
//             overflow-hidden
//             whitespace-nowrap

//             border
//             border-[#f7dc86]

//             bg-gradient-to-r
//             from-[#a96d19]
//             via-[#f5d77d]
//             to-[#a96d19]

//             px-7
//             py-3

//             text-[11px]
//             font-bold
//             tracking-[0.2em]
//             text-[#3b0b16]

//             shadow-[0_0_15px_rgba(240,190,80,0.4)]

//             transition-all
//             duration-500

//             hover:scale-105
//             hover:shadow-[0_0_35px_rgba(255,215,120,0.8)]

//             focus:outline-none

//             sm:px-10
//             sm:py-4
//             sm:text-xs
//           "
//         >
//           {/* Animated Shine */}
//           <span
//             className="
//               absolute
//               inset-0

//               -translate-x-full

//               bg-gradient-to-r
//               from-transparent
//               via-white/60
//               to-transparent

//               skew-x-[-20deg]

//               transition-transform
//               duration-1000

//               group-hover:translate-x-full
//             "
//           />

//           {/* Button Text */}
//           <span className="relative z-10">
//             OPEN INVITATION
//           </span>
//         </button>
//       </div>

//       {/* Button Glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[5%]
//           left-1/2

//           h-20
//           w-72

//           -translate-x-1/2

//           rounded-full

//           bg-[#e8bd55]/20

//           blur-3xl
//         "
//       />
//     </section>
//   );
// }

//==================================================================================================
type OpeningScreenProps = {
  onOpen: () => void;
  isLeaving: boolean;
};

const petals = [
  { left: "5%", delay: "0s", duration: "8s", size: 12 },
  { left: "12%", delay: "2s", duration: "10s", size: 16 },
  { left: "20%", delay: "4s", duration: "9s", size: 10 },
  { left: "28%", delay: "1s", duration: "11s", size: 14 },
  { left: "35%", delay: "5s", duration: "8s", size: 12 },
  { left: "43%", delay: "3s", duration: "12s", size: 16 },
  { left: "50%", delay: "0.5s", duration: "9s", size: 11 },
  { left: "58%", delay: "6s", duration: "10s", size: 14 },
  { left: "65%", delay: "2.5s", duration: "8s", size: 10 },
  { left: "72%", delay: "4.5s", duration: "11s", size: 15 },
  { left: "80%", delay: "1.5s", duration: "9s", size: 12 },
  { left: "88%", delay: "5.5s", duration: "10s", size: 16 },
  { left: "95%", delay: "3.5s", duration: "8s", size: 11 },
];

export function OpeningScreen({
  onOpen,
  isLeaving,
}: OpeningScreenProps) {
  return (
    <section
      className={`fixed inset-0 z-50 flex min-h-screen items-center justify-center overflow-hidden bg-[#24040c] transition-all duration-700 ${
        isLeaving
          ? "pointer-events-none scale-105 opacity-0"
          : "scale-100 opacity-100"
      }`}
      aria-label="Wedding invitation opening"
    >
      {/* ==============================
          BACKGROUND IMAGE
      ============================== */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/wedding-opening-bg.png')",
        }}
      />

      {/* Fill empty side areas */}
      <div className="absolute inset-0 -z-10 bg-[#25030d]" />

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/20" />

      {/* ==============================
          FALLING FLOWER PETALS
      ============================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((petal, index) => (
          <span
            key={index}
            className="falling-petal absolute"
            style={{
              left: petal.left,
              width: `${petal.size}px`,
              height: `${petal.size * 0.7}px`,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
            }}
          />
        ))}
      </div>

      {/* ==============================
          OPEN INVITATION BUTTON
          Placed over the button area
          already present in image
      ============================== */}
      <div className="absolute left-1/2 bottom-[9.5%] z-30 -translate-x-1/2 sm:bottom-[11%] bottom-[23%]">
        <button
          type="button"
          onClick={onOpen}
          aria-label="Open wedding invitation"
          className="open-invitation-button opacity-0 "
        >
          OPEN INVITATION
        </button>
      </div>

      {/* ==============================
          BUTTON GLOW
      ============================== */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-[7%]
          left-1/2
          z-10
          h-12
          w-40
          -translate-x-1/2
          rounded-full
          bg-[#e6b94e]/15
          blur-3xl
          sm:bottom-[2%]
        "
      />

      {/* ==============================
          ANIMATION STYLES
      ============================== */}
      <style>{`
        /* =========================================
           FALLING PETALS
        ========================================= */

        .falling-petal {
          top: -50px;
          border-radius: 70% 0 70% 0;

          background: linear-gradient(
            135deg,
            #ffd1d1 0%,
            #d64960 45%,
            #7d1125 100%
          );

          opacity: 0;

          box-shadow:
            0 0 8px rgba(255, 130, 150, 0.3);

          animation-name: fallingPetal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fallingPetal {
          0% {
            transform:
              translate3d(0, -50px, 0)
              rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.9;
          }

          25% {
            transform:
              translate3d(35px, 25vh, 0)
              rotate(120deg);
          }

          50% {
            transform:
              translate3d(-30px, 50vh, 0)
              rotate(250deg);
          }

          75% {
            transform:
              translate3d(40px, 75vh, 0)
              rotate(420deg);
          }

          90% {
            opacity: 0.8;
          }

          100% {
            transform:
              translate3d(-20px, 115vh, 0)
              rotate(600deg);
            opacity: 0;
          }
        }

        /* =========================================
           OPEN INVITATION BUTTON
        ========================================= */

        .open-invitation-button {
          position: relative;

          /*
             Small size so it fits exactly
             inside the button area of the image
          */
          width: 160px;
          height: 44px;

          border: 1px solid rgba(245, 214, 129, 0.95);
          border-radius: 3px;

          background: linear-gradient(
            90deg,
            #a9681b,
            #f6d985,
            #a9681b
          );

          color: #3d1017;

          font-family: Georgia, serif;
          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.18em;

          cursor: pointer;

          display: flex;
          align-items: center;
          justify-content: center;

          white-space: nowrap;

          box-shadow:
            0 0 10px rgba(240, 193, 84, 0.35),
            0 0 22px rgba(240, 193, 84, 0.12);

          animation: buttonFloat 2.8s ease-in-out infinite;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        /* Shine */
        .open-invitation-button::before {
          content: "";

          position: absolute;
          inset: 0;

          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255,255,255,0.55) 50%,
            transparent 80%
          );

          transform: translateX(-120%);

          animation: buttonShine 3.5s ease-in-out infinite;

          pointer-events: none;
        }

        .open-invitation-button:hover {
          transform: scale(1.05);

          box-shadow:
            0 0 18px rgba(255, 220, 120, 0.75),
            0 0 35px rgba(240, 193, 84, 0.3);
        }

        .open-invitation-button:active {
          transform: scale(0.96);
        }

        @keyframes buttonFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes buttonShine {
          0% {
            transform: translateX(-120%);
          }

          35%,
          100% {
            transform: translateX(120%);
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {
          .open-invitation-button {
            width: 139px;
            height: 33px;

            font-size: 8px;
            letter-spacing: 0.15em;
          }
        }
      `}</style>
    </section>
  );
}