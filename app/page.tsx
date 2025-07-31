import ApkClubChannel from "@/components/ApkClubChannel";
import AppComponent from "@/components/AppComponent";
import GameComponent from "@/components/GameComponent";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="bg-zinc-900">
      <Header />
      <AppComponent />
      <ApkClubChannel />
      <GameComponent />
    </div>
  );
}
