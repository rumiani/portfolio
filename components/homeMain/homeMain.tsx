import { PortfolioCarousel } from "./PortfolioCarousel/PortfolioCarousel";
import ProjectsCards from "./projectCards/projectsCards";
import AboutMe from "./aboutme/aboutme";

export default function HomeMain() {

  return (
    <div className="font-sans">
      <main className="w-full">
        <section className="">
          <PortfolioCarousel />
          <div className="px-2 my-4">
            <AboutMe/>
          </div>
          <ProjectsCards/>
        </section>
      </main>
    </div>
  );
}
