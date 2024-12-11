import { Experience } from "@/components/Experience";
import Header from "@/components/Header";
import { HomeIntroduction } from "@/components/HomeIntroduction";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  /**
 Home page layout.
 Displays the header, sections and contact
 */
  return (
    <>
      <Header />
      <main className="home-section pt-48">
        <HomeIntroduction />
        <Technologies />
        <Experience />
      </main>
    </>
  );
}
