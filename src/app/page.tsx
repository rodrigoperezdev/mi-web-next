import Header from "@/components/Header";
import { HomeIntroduction } from "@/components/HomeIntroduction";

export default function Home() {
  return (
    <>
      <Header />
      <div className="section-1">
        <HomeIntroduction />
      </div>
    </>
  );
}
