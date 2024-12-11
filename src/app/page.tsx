import Header from "@/components/Header";
import { HomeIntroduction } from "@/components/HomeIntroduction";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  return (
    <>
      <Header />
      <div className="section-1 pt-48">
        <HomeIntroduction />
        <Technologies />
      </div>
    </>
  );
}
