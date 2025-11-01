import FloatingNature from "@/components/common/FloatingNature";
import Navigation from "@/components/shared/Navigation";
import CinematicHero from "@/components/common/CinematicHero";
import StorytellingTimeline from "@/components/common/StorytellingTimeline";
import TekoChatbot from "@/components/common/TekoChatbot";


export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen overflow-hidden">
      <FloatingNature />
      <div className="relative z-10">
        <CinematicHero />
        <main>
          <StorytellingTimeline />
        </main>
      </div>
      <TekoChatbot />
    </div>
  );
}
