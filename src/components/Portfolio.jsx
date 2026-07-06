import Section from "./Section";
import { projects } from "../data/projects";

function Portfolio() {
  return (
    <Section id="portfolio" sectionClassName="bg-slate-100">
      <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
        Portfolio
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        制作・学習プロジェクト
      </h2>

      <p className="mt-4 max-w-2xl leading-8 text-slate-600">
        現時点では学習用の仮プロジェクトです。後のPhaseで、作品一覧をReactの配列データから表示する形に変更します。
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-slate-500">
                {project.number}
              </p>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {project.description}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
export default Portfolio;
