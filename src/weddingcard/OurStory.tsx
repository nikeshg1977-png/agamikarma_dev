// //import { weddingData } from "../../data/weddingData";

// import { weddingData } from "./weddingData";

// export function OurStory() {
//  return (
//  <section id="story" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
//  <div className="mx-auto max-w-4xl">
//  <div className="mb-12 text-center">
//  <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
//  <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Our Story</h2>
//  </div>

//  <div className="relative">
//  <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d9bd79] md:left-1/2" />

//  {weddingData.story.map((milestone, index) => (
//  <div
//  key={milestone.title}
//  className={`relative mb-10 pl-12 md:pl-0 ${
//  index % 2 === 0 ? "md:text-right md:pr-12" : "md:ml-auto md:pl-12"
//  }`}
//  >
//  <div
//  className={`absolute left-4 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#d9bd79] bg-[#fff8e9] md:left-1/2 ${
//  index % 2 === 0 ? "" : ""
//  }`}
//  />

//  <div className="rounded-lg border border-[#d9bd79] bg-[#fff8e9] p-5 shadow-md">
//  <h3 className="font-display text-lg text-[#741d31]">{milestone.title}</h3>
//  <p className="mt-2 text-sm leading-6 text-[#5a1526]">{milestone.description}</p>
//  </div>
//  </div>
//  ))}
//  </div>
//  </div>
//  </section>
//  );
// }

//===================================================================================================

import { useEffect, useRef, useState } from "react";
import { weddingData } from "./weddingData";

export function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Keep the animation visible after it has appeared
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative scroll-mt-24 overflow-hidden bg-[#fffaf0] px-5 py-20 sm:px-8"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute left-[-30px] top-[15%] text-7xl text-[#c49a45]/10">
        ❀
      </div>

      <div className="pointer-events-none absolute right-[-20px] top-[40%] text-8xl text-[#741d31]/10">
        ❦
      </div>

      <div className="pointer-events-none absolute bottom-[10%] left-[5%] text-5xl text-[#c49a45]/10">
        ✦
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Section Heading */}
        <div
          className={`mb-16 text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c49a45]" />

            <span className="text-3xl text-[#c49a45]">❦</span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c49a45]" />
          </div>

          <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-[#b58a43] sm:text-xs">
            A Journey of Two Hearts
          </p>

          <h2 className="font-display text-3xl text-[#741d31] sm:text-5xl">
            Our Beautiful Story
          </h2>

          <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#c49a45] to-transparent" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className={`absolute bottom-0 left-4 top-0 w-px origin-top bg-linear-to-b from-[#c49a45] via-[#d9bd79] to-[#c49a45] transition-transform duration-[1800ms] ease-out md:left-1/2 ${
              isVisible ? "scale-y-100" : "scale-y-0"
            }`}
          />

          {weddingData.story.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.title}
                className={`relative mb-12 pl-12 md:mb-16 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? "md:mr-auto md:pr-14 md:text-right"
                    : "md:ml-auto md:pl-14"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-4 top-6 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#c49a45] bg-[#fffaf0] shadow-[0_0_0_5px_rgba(196,154,69,0.12)] transition-all duration-700 md:left-1/2 ${
                    isVisible
                      ? "scale-100 opacity-100"
                      : "scale-0 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 250 + 300}ms`,
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#741d31]" />
                </div>

                {/* Story Card */}
                <div
                  className={`relative overflow-hidden rounded-2xl border border-[#d9bd79]/70 bg-white/60 p-6 shadow-[0_12px_35px_rgba(116,29,49,0.10)] backdrop-blur-sm transition-all duration-1000 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(116,29,49,0.18)] ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : isLeft
                      ? "-translate-x-24 opacity-0"
                      : "translate-x-24 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${index * 250}ms`,
                  }}
                >
                  {/* Card Glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-[#c49a45]/10" />

                  {/* Decorative corner */}
                  <div
                    className={`absolute top-0 h-1 w-16 bg-gradient-to-r from-[#741d31] to-[#c49a45] ${
                      isLeft ? "right-0" : "left-0"
                    }`}
                  />

                  <div className="relative">
                    <div
                      className={`mb-3 flex items-center gap-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-xl text-[#c49a45]">❦</span>

                      <h3 className="font-display text-xl text-[#741d31] sm:text-2xl">
                        {milestone.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-7 text-[#5a1526] sm:text-base">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Decoration */}
        <div
          className={`mt-4 flex flex-col items-center transition-all delay-700 duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-3xl text-[#c49a45]">❦</span>

          <div className="mt-2 flex items-center gap-3 text-[#c49a45]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#c49a45]" />
            <span>✦</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#c49a45]" />
          </div>
        </div>
      </div>
    </section>
  );
}