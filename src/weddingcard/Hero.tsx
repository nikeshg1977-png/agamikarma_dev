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

import { weddingData } from "./weddingData";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center justify-center overflow-hidden bg-[#f8f0df] px-5 pb-16 pt-28 sm:px-8"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
        style={{
          backgroundImage: "url('/images/varmala.jpg')",
        }}
      />

      {/* Soft overlay - keeps the text readable */}
      <div className="absolute inset-0 bg-[#f8f0df]/75" />

      {/* Warm golden glow */}
      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-[#ead4ae]/30 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8a2437]/10 blur-3xl" />

      {/* ================= DECORATIVE GARLAND EFFECT ================= */}
      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-br-full border-b-2 border-r-2 border-[#c49a45]/30" />

      <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full border-b-2 border-l-2 border-[#c49a45]/30" />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {/* Small decorative symbol */}
        <div className="mb-5 text-3xl text-[#c49a45] opacity-90">
          ❦
        </div>

        {/* Top elegant line */}
        <div className="mx-auto mb-7 flex w-64 items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c49a45]" />

          <span className="text-lg text-[#c49a45]">✦</span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c49a45]" />
        </div>

        {/* Bride */}
        <h1
          className="
            font-display
            text-5xl
            leading-tight
            tracking-wide
            text-[#741d31]
            drop-shadow-sm
            sm:text-7xl
          "
        >
          {weddingData.brideName}
        </h1>

        {/* Heart / floral separator */}
        <div className="my-4 flex items-center justify-center gap-4">
          <span className="h-px w-14 bg-[#c49a45]/60" />

          <span className="text-2xl text-[#9a2a3f]">♥</span>

          <span className="h-px w-14 bg-[#c49a45]/60" />
        </div>

        {/* Groom */}
        <h1
          className="
            font-display
            text-5xl
            leading-tight
            tracking-wide
            text-[#741d31]
            drop-shadow-sm
            sm:text-7xl
          "
        >
          {weddingData.groomName}
        </h1>

        {/* Elegant divider */}
        <div className="mx-auto mt-8 flex w-72 items-center justify-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c49a45] to-[#c49a45]" />

          <span className="text-xl text-[#c49a45]">❈</span>

          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#c49a45] to-[#c49a45]" />
        </div>

        {/* Tagline */}
        <p className="mx-auto mt-7 max-w-xl font-display text-xl italic leading-8 text-[#5a1526] sm:text-2xl">
          Two hearts, one beautiful journey
        </p>

        {/* Wedding Date */}
        <div className="mt-7 inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#c49a45]/70" />

          <p
            className="
              rotate-[-1deg]
              border-b
              border-dashed
              border-[#c49a45]
              px-3
              pb-1
              font-display
              text-2xl
              tracking-wide
              text-[#9a2a3f]
              sm:text-3xl
            "
          >
            {weddingData.weddingDateLabel}
          </p>

          <span className="h-px w-8 bg-[#c49a45]/70" />
        </div>

        {/* Location */}
        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#8a2437] sm:text-sm">
          {weddingData.locationLabel}
        </p>

        {/* Bottom ornament */}
        <div className="mx-auto mt-9 flex items-center justify-center gap-2">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#c49a45]" />
          <span className="text-sm text-[#c49a45]">✦</span>
          <span className="text-base text-[#9a2a3f]">❦</span>
          <span className="text-sm text-[#c49a45]">✦</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#c49a45]" />
        </div>
      </div>
    </section>
  );
}