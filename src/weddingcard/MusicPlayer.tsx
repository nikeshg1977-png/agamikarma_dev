import { useState, useRef } from "react";
import { weddingData } from "./weddingData";
//import { weddingData } from "../../data/weddingData";

export function MusicPlayer() {
 const [isPlaying, setIsPlaying] = useState(false);
 const audioRef = useRef<HTMLAudioElement | null>(null);

 const toggleMusic = () => {
 if (!audioRef.current) {
 audioRef.current = new Audio(weddingData.musicPath);
 audioRef.current.loop = true;
 }

 if (isPlaying) {
 audioRef.current.pause();
 } else {
 audioRef.current.play();
 }
 setIsPlaying(!isPlaying);
 };

 return (
 <button
 onClick={toggleMusic}
 className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b662] bg-[#d8b662] text-[#43101d] shadow-lg transition hover:-translate-y-1 hover:bg-[#f1d78e]"
 aria-label={isPlaying ? "Pause music" : "Play music"}
 >
 {isPlaying ? "❚❚" : "▶"}
 </button>
 );
}
