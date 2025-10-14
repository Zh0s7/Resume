import Image from "next/image";
import Navbar from "@/components/Navbar";
import { preospe, petrona, josefinSans } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-30">
          <h1 className={preospe.className} style={{ fontSize: "78px", lineHeight: 1.05 }}>
          Joshua Weekes
          </h1>
          <p className={josefinSans.className} style={{ fontSize: "24px", marginTop: "3px", color: "var(--font-color-sans)" }}>
            Cybersecurity Professional, Software Developer
          </p>
      </div>
    </main>
  );
}
