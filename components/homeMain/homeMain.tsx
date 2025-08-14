import Projects from "@/app/[locale]/projects/page";
import { PortfolioCarousel } from "./PortfolioCarousel/PortfolioCarousel";
import ProjectsCards from "./projectCards/projectsCards";

export default function HomeMain() {

  return (
    <div className="font-sans">
      <main className="w-full">
        <section className="">
          <PortfolioCarousel />
          <div className="px-2 my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quasi dolorem a reprehenderit, reiciendis rem nobis blanditiis maiores optio consectetur officiis, quis consequatur dolore molestiae laborum tempora. Nisi, aut aperiam.
          </div>
          <ProjectsCards/>
        </section>
      </main>
    </div>
  );
}
