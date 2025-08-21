import { PortfolioCarousel } from "./PortfolioCarousel/PortfolioCarousel";
import ProjectsCards from "./projectCards/projectsCards";
import AboutMe from "./aboutme/aboutme";

export default function HomePage() {

  return (
    <div className="font-sans">
      <main className="w-full">
        <section className="h-fit flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full lg:w-2/3">
            <AboutMe />
          </div>
          <div className="hidden lg:block w-1/3">
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
