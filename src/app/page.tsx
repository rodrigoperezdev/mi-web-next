import { Experience } from "@/components/Experience";
import { HomeIntroduction } from "@/components/HomeIntroduction";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Technologies } from "@/components/Technologies";

export default function Home() {
  /**
 Home page layout.
 Displays the header, sections and contact
 */
  return (
    <>
      <HomeIntroduction />
      <Technologies />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
}
