import { useState } from "react"
import Section from "./Section"
import { projects } from "../data/projects"
import ProjectDemo from './ProjectDemo'

function Portfolio() {
  const [selectedProjectID, setSelectedProjectID] = useState(projects[0].id)
  const selectedProject = projects.find((project) => 
    project.id === selectedProjectID
  )

  return (
    <Section id="portfolio" sectionClassName="bg-slate-100">
      <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
        Portfolio
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight">
        制作・学習プロジェクト
      </h2>

      <p className= "mt-4 leading-8 text-slate-600">
        カードをクリックすると、下に表示される詳細とデモ画面が切り替わります。
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectID

          return (
            <button
              type = "button"
              key={project.id}
              onClick = {() => setSelectedProjectID(project.id)}
              className= {`rounded-2xl p-6 text-left shadow-sm transition
                ${isSelected
                  ? 'bg-slate-900 text-white'
                  : 'bg-white hover:-translate-y-1 hover:shadow-md' }`}
            >
              <p className={`text-sm font-semibold
              ${isSelected
                ? "text-slate-300"
                : "text-slate-500"}`}
              >
                {project.number}
              </p>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className={`mt-3 leading-7 ${
                  isSelected ? 'text-slate-200' : 'text-slate-600'
                }`}
              >
                {project.description}
              </p>
            </button>
          );
        })}
      </div>

      <article className="mx-auto mt-10 rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-slate-500">
          選択中の作品：{selectedProject.number}
        </p>

        <h3 className="mt-3 text-2xl font-bold">{selectedProject.title}</h3>

        <p className="mt-4 leading-8 text-slate-600">
          {selectedProject.detail}
        </p>

        <div className="mt-8">
          <ProjectDemo projectId={selectedProject.id} />
        </div>
      </article>
      
    </Section>
  );
}
export default Portfolio;
