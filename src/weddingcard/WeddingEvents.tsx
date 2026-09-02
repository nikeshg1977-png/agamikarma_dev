// //import { weddingData } from "../../data/weddingData";

// import { weddingData } from "./weddingData";

// const eventIcons: Record<string, string> = {
//  tilak: "🪔",
//  mehndi: "🌿",
//  haldi: "🌼",
//  shadi: "💒",
// };

// export function WeddingEvents() {
//  return (
//  <section id="events" className="scroll-mt-24 bg-[#fffaf0] px-5 py-16 sm:px-8">
//  <div className="mx-auto max-w-5xl">
//  <div className="mb-12 text-center">
//  <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
//  <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Our Wedding Celebrations</h2>
//  </div>

//  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//  {weddingData.events.map((event, index) => (
//  <div
//  key={event.name}
//  className="relative border border-[#d9bd79] bg-[#fff8e9] p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
//  >
//  <div className="mb-4 text-center text-4xl">{eventIcons[event.icon]}</div>
 
//  <h3 className="font-display text-xl text-[#741d31]">{event.name}</h3>
 
//  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#8a2437]">
//  {event.date}
//  </p>
 
//  {"time" in event && event.time && (
//  <p className="mt-1 text-xs text-[#5a1526]">{event.time}</p>
//  )}
 
//  <p className="mt-4 text-sm leading-6 text-[#5a1526]">{event.description}</p>
 
//  <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-[#d9bd79] bg-[#fff8e9]" />
//  </div>
//  ))}
//  </div>
//  </div>
//  </section>
//  );
// }

//===========================================================================================
import { useEffect, useRef, useState } from "react";
import { weddingData } from "./weddingData";

const eventIcons: Record<string, string> = {
  tilak: "🪔",
  mehndi: "🌿",
  haldi: "🌼",
  shadi: "💒",
};

type ScratchCardProps = {
  event: (typeof weddingData.events)[number];
};

function ScratchCard({ event }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isDrawing = useRef(false);
  const lastPoint = useRef<{ x: number; y: number } | null>(null);

  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });

    if (!ctx) return;

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect();

      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Scratch surface
      const gradient = ctx.createLinearGradient(
        0,
        0,
        rect.width,
        rect.height
      );

      gradient.addColorStop(0, "#d9bd79");
      gradient.addColorStop(0.5, "#f0d99c");
      gradient.addColorStop(1, "#c49a45");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      // Subtle scratch texture
      for (let i = 0; i < 250; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        const size = Math.random() * 2 + 0.5;

        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.25})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Scratch card border
      ctx.strokeStyle = "rgba(116,29,49,0.25)";
      ctx.lineWidth = 1;
      ctx.strokeRect(10, 10, rect.width - 20, rect.height - 20);

      // Scratch icon
      ctx.fillStyle = "#741d31";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.font = "28px serif";
      ctx.fillText("✦", rect.width / 2, rect.height / 2 - 35);

      // Scratch text
      ctx.font = "bold 15px serif";
      ctx.fillText(
        "SCRATCH TO REVEAL",
        rect.width / 2,
        rect.height / 2
      );

      // Small instruction
      ctx.font = "11px sans-serif";
      ctx.fillStyle = "#5a1526";
      ctx.fillText(
        "Use your finger or mouse",
        rect.width / 2,
        rect.height / 2 + 28
      );
    };

    setupCanvas();

    const resizeObserver = new ResizeObserver(() => {
      if (!revealed) {
        setupCanvas();
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [revealed]);

  const getPoint = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const scratch = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx || revealed) return;

    const point = getPoint(event);

    if (!point) return;

    ctx.globalCompositeOperation = "destination-out";

    const radius = 25;

    ctx.beginPath();

    if (lastPoint.current) {
      ctx.moveTo(lastPoint.current.x, lastPoint.current.y);
      ctx.lineTo(point.x, point.y);
      ctx.lineWidth = radius * 2;
      ctx.lineCap = "round";
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();

    lastPoint.current = point;
  };

  const checkRevealPercentage = () => {
    const canvas = canvasRef.current;

    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const imageData = ctx.getImageData(
      0,
      0,
      width,
      height
    );

    let transparentPixels = 0;

    // Check every 8th pixel for performance
    for (let i = 3; i < imageData.data.length; i += 32) {
      if (imageData.data[i] === 0) {
        transparentPixels++;
      }
    }

    const totalPixels = imageData.data.length / 32;

    const percentage =
      (transparentPixels / totalPixels) * 100;

    // Reveal when 45% is scratched
    if (percentage >= 45) {
      setRevealed(true);
    }
  };

  const handlePointerDown = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (revealed) return;

    isDrawing.current = true;

    event.currentTarget.setPointerCapture(event.pointerId);

    lastPoint.current = getPoint(event);

    scratch(event);
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing.current || revealed) return;

    scratch(event);
  };

  const handlePointerUp = (
    event: React.PointerEvent<HTMLCanvasElement>
  ) => {
    if (!isDrawing.current) return;

    isDrawing.current = false;
    lastPoint.current = null;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore pointer capture errors
    }

    checkRevealPercentage();
  };

  return (
    <div
      ref={containerRef}
      className={`
        group relative
        min-h-[330px]
        overflow-hidden
        border border-[#d9bd79]
        bg-[#fff8e9]
        p-6
        shadow-[0_8px_25px_rgba(116,29,49,0.12)]
        transition-all duration-500
        hover:-translate-y-2
      `}
    >
      {/* ========================= */}
      {/* ACTUAL WEDDING CARD */}
      {/* ========================= */}

      <div
        className={`
          relative z-0
          flex h-full min-h-[278px]
          flex-col items-center
          transition-all duration-700
          ${
            revealed
              ? "scale-100 opacity-100"
              : "scale-[0.98] opacity-100"
          }
        `}
      >
        {/* Inner border */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            border border-dashed
            border-[#d9bd79]/70
          "
        />

        {/* Top ornament */}
        <div className="mb-3 text-sm text-[#c49a45]">
          ✦
        </div>

        {/* Icon */}
        <div
          className="
            mb-5
            flex h-16 w-16
            items-center justify-center
            rounded-full
            border border-[#d9bd79]
            bg-[#fffaf0]
            text-4xl
            shadow-sm
          "
        >
          {eventIcons[event.icon]}
        </div>

        {/* Event name */}
        <h3 className="text-center font-display text-xl text-[#741d31]">
          {event.name}
        </h3>

        {/* Divider */}
        <div className="my-3 flex items-center gap-2">
          <span className="h-px w-8 bg-[#d9bd79]" />

          <span className="text-xs text-[#c49a45]">
            ❦
          </span>

          <span className="h-px w-8 bg-[#d9bd79]" />
        </div>

        {/* Date */}
        <p
          className="
            text-center
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#8a2437]
          "
        >
          {event.date}
        </p>

        {/* Time */}
        {"time" in event && event.time && (
          <p className="mt-1 text-center text-xs text-[#5a1526]">
            {event.time}
          </p>
        )}

        {/* Description */}
        <p
          className="
            mt-4
            max-w-[220px]
            text-center
            text-sm
            leading-6
            text-[#5a1526]
          "
        >
          {event.description}
        </p>

        {/* Bottom ornament */}
        <div className="mt-auto pt-5 text-lg text-[#c49a45]">
          ❦
        </div>
      </div>

      {/* ========================= */}
      {/* SCRATCH OVERLAY */}
      {/* ========================= */}

      {!revealed && (
        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            z-20
            cursor-pointer
            touch-none
          "
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />
      )}

      {/* ========================= */}
      {/* REVEALED EFFECT */}
      {/* ========================= */}

      {revealed && (
        <div
          className="
            pointer-events-none
            absolute inset-0
            z-10
            animate-[fadeIn_0.8s_ease-out]
          "
        />
      )}
    </div>
  );
}

export function WeddingEvents() {
  return (
    <section
      id="events"
      className="
        scroll-mt-24
        bg-[#fffaf0]
        px-5
        py-16
        sm:px-8
      "
    >
      <div className="mx-auto max-w-5xl">

        {/* ========================= */}
        {/* SECTION TITLE */}
        {/* ========================= */}

        <div className="mb-12 text-center">
          <div className="mb-4 text-3xl text-[#c49a45]">
            ❦
          </div>

          <h2
            className="
              font-display
              text-3xl
              text-[#741d31]
              sm:text-4xl
            "
          >
            Our Wedding Celebrations
          </h2>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#d9bd79]" />

            <span className="text-sm text-[#c49a45]">
              ✦
            </span>

            <span className="h-px w-16 bg-[#d9bd79]" />
          </div>
        </div>

        {/* ========================= */}
        {/* SCRATCH CARDS */}
        {/* ========================= */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {weddingData.events.map((event) => (
            <ScratchCard
              key={event.name}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}