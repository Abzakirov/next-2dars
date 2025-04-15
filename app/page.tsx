"use client";
import Sidebar from "@/components/sidebar";
import Music from "@/components/music";

export default function Home() {
  return (
    <>
      <div className="fixed h-full z-40">
        <Sidebar />
      </div>
      <main className="flex-1 ml-[80px] lg:ml-[296px] p-0">
        <div className="p-4">
          <Music />
        </div>
      </main>
    </>
  );
}
