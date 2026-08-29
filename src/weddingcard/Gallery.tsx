import { useState } from "react";
import { weddingData } from "./weddingData";
//import { weddingData } from "../../data/weddingData";

export function Gallery() {
 const [selected, setSelected] = useState<number | null>(null);

 const openLightbox = (index: number) => setSelected(index);
 const closeLightbox = () => setSelected(null);

 const nextImage = () => {
 if (selected !== null) {
 setSelected((selected + 1) % weddingData.gallery.length);
 }
 };

 const prevImage = () => {
 if (selected !== null) {
 setSelected((selected - 1 + weddingData.gallery.length) % weddingData.gallery.length);
 }
 };

 return (
 <section id="gallery" className="scroll-mt-24 bg-[#f8f0df] px-5 py-16 sm:px-8">
 <div className="mx-auto max-w-6xl">
 <div className="mb-12 text-center">
 <div className="mb-4 text-3xl text-[#c49a45]">❦</div>
 <h2 className="font-display text-3xl text-[#741d31] sm:text-4xl">Photo Gallery</h2>
 </div>

 <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
 {weddingData.gallery.map((image, index) => (
 <div
 key={image.src}
 className="group relative cursor-pointer overflow-hidden rounded-lg border border-[#d9bd79] bg-[#fff8e9] shadow-md transition hover:-translate-y-1 hover:shadow-lg"
 onClick={() => openLightbox(index)}
 >
 <img
 src={image.src}
 alt={image.alt}
 loading="lazy"
 className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-linear-to-t from-[#741d31]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
 </div>
 ))}
 </div>
 </div>

 {/* Lightbox */}
 {selected !== null && (
 <div
 className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
 onClick={closeLightbox}
 >
 <button
 className="absolute right-4 top-4 text-4xl text-white"
 onClick={closeLightbox}
 aria-label="Close lightbox"
 >
 ×
 </button>

 <button
 className="absolute left-4 text-4xl text-white"
 onClick={(e) => {
 e.stopPropagation();
 prevImage();
 }}
 aria-label="Previous image"
 >
 ‹
 </button>

 <img
 src={weddingData.gallery[selected].src}
 alt={weddingData.gallery[selected].alt}
 className="max-h-[80vh] max-w-full object-contain"
 onClick={(e) => e.stopPropagation()}
 />

 <button
 className="absolute right-4 text-4xl text-white"
 onClick={(e) => {
 e.stopPropagation();
 nextImage();
 }}
 aria-label="Next image"
 >
 ›
 </button>
 </div>
 )}
 </section>
 );
}
