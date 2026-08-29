const petals = [
 { left: "7%", delay: "0s", duration: "15s", size: "13px" },
 { left: "18%", delay: "5s", duration: "18s", size: "9px" },
 { left: "31%", delay: "2s", duration: "16s", size: "12px" },
 { left: "52%", delay: "9s", duration: "19s", size: "10px" },
 { left: "69%", delay: "4s", duration: "17s", size: "14px" },
 { left: "83%", delay: "11s", duration: "20s", size: "10px" },
 { left: "94%", delay: "7s", duration: "16s", size: "12px" },
];

export function Petals() {
 return (
 <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
 {petals.map((petal, index) => (
 <span
 key={`${petal.left}-${index}`}
 className="wedding-petal"
 style={{
 left: petal.left,
 animationDelay: petal.delay,
 animationDuration: petal.duration,
 width: petal.size,
 height: `calc(${petal.size} * 1.45)`,
 }}
 />
 ))}
 </div>
 );
}
