export type WeddingEvent = {
 name: string;
 date: string;
 time?: string;
 description: string;
 icon: "tilak" | "mehndi" | "haldi" | "shadi";
};

export type StoryMilestone = {
 title: string;
 description: string;
};

export type GalleryImage = {
 src: string;
 alt: string;
};

export const weddingData = {
 brideName: "Nidhi Gupta",
 groomName: "Nikesh Gupta",

 weddingDate: "2026-11-24",
 weddingDateLabel: "24 November 2026",
 locationLabel: "Vasai East, Thane",

 groomAddress:
 "Room No. 401, K-Wing, Veena Dynasty, Near Old Water Tank, Evershine Last Bus Stop, Vasai East, Thane - 401208",

 // ⚠️ FICTIONAL PLACEHOLDER - Replace with bride's actual address later
 brideAddress:
 "12, Rose Garden Residency, MG Road, Lucknow, Uttar Pradesh",

 venue:
 "Room No. 401, K-Wing, Veena Dynasty, Near Old Water Tank, Evershine Last Bus Stop, Vasai East, Thane - 401208",

 mapsUrl: "https://maps.google.com/?q=Veena+Dynasty+Vasai+East",

 brideImage: "/images/bride-placeholder.jpg",
 groomImage: "/images/groom-placeholder.jpg",
 musicPath: "/music/wedding-music.mp3",

 gallery: [
 { src: "/images/gallery/gallery-1.jpg", alt: "Wedding celebration memory" },
 { src: "/images/gallery/gallery-2.jpg", alt: "Wedding celebration memory" },
 { src: "/images/gallery/gallery-3.jpg", alt: "Wedding celebration memory" },
 { src: "/images/gallery/gallery-4.jpg", alt: "Wedding celebration memory" },
 { src: "/images/gallery/gallery-5.jpg", alt: "Wedding celebration memory" },
 { src: "/images/gallery/gallery-6.jpg", alt: "Wedding celebration memory" },
 ],

 events: [
 {
 name: "Tilak",
 date: "20 November 2026",
 description: "A graceful beginning, celebrated with blessings and family traditions.",
 icon: "tilak",
 },
 {
 name: "Mehndi",
 date: "23 November 2026",
 description: "A vibrant evening of henna, music, laughter, and joyful hands.",
 icon: "mehndi",
 },
 {
 name: "Haldi",
 date: "24 November 2026",
 time: "Morning",
 description: "A sunlit ceremony filled with love, warmth, and golden blessings.",
 icon: "haldi",
 },
 {
 name: "Shadi",
 date: "24 November 2026",
 time: "Wedding Day",
 description: "The moment two hearts and two families become one beautiful story.",
 icon: "shadi",
 },
 ],

 story: [
 {
 title: "Two Families",
 description: "A beautiful connection begins with the warmth, blessings, and love of two families.",
 },
 {
 title: "Two Hearts",
 description: "A shared smile became a meaningful bond, bringing Nidhi and Nikesh closer together.",
 },
 {
 title: "A Beautiful Beginning",
 description: "Every cherished moment led to a promise of companionship, laughter, and devotion.",
 },
 {
 title: "Forever Starts Here",
 description: "With grateful hearts, they step into a lifetime filled with love and togetherness.",
 },
 ],
} as const;
