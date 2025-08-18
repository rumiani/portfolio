import { PortfolioCarousel } from "./PortfolioCarousel/PortfolioCarousel";
import ProjectsCards from "./projectCards/projectsCards";
import AboutMe from "./aboutme/aboutme";

export default function HomePage() {

  return (
    <div className="font-sans">
      <main className="w-full">
        <section className="flex flex-col md:flex-row justify-between gap-4">
          <div className="md:w-7/12">
            <AboutMe />
          </div>
          <div className="w-full md:w-5/12">
            <PortfolioCarousel />
          </div>
        </section>
        <section>
          <ProjectsCards />

        </section>
      </main>
    </div>
  );
}
