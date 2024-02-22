import MainContent from "./_components/MainContent";

export default function HomeV2Page() {

  return (
    <main className="w-full h-screen relative flex items-center justify-center">
      <video src="/video/backround_heart_new.webm" autoPlay loop muted preload="auto" className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" />
      <div className="flex flex-col items-center justify-center gap-y-2 text-xl font-semibold">
        <MainContent />
      </div>
    </main>
  );
}
