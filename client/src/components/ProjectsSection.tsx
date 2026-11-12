import { FaLink } from "react-icons/fa";
import { projectsData, wordpressProjectsData } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";
import { projectElementId } from "@/lib/siteSearch";

type ProjectItem = (typeof projectsData)[number] | (typeof wordpressProjectsData)[number];

function ProjectCard({
  project,
  kind,
  t,
  ui,
}: {
  project: ProjectItem;
  kind: "custom" | "wordpress";
  t: (value: { en: string; de: string } | string) => string;
  ui: ReturnType<typeof useLanguage>["ui"];
}) {
  return (
    <div
      id={projectElementId(kind, project.title)}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow scroll-mt-24"
    >
      <img
        src={project.image}
        alt={`${t(project.title)} screenshot`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{t(project.title)}</h3>
        <p className="text-gray-700 mb-4">{t(project.description)}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {project.isFeatured ? (
            <>
              {"v_demoLink" in project && project.v_demoLink ? (
                <a
                  href={project.v_demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-accent transition-colors"
                >
                  <FaLink className="inline-block mr-1" /> {ui.buttons.vendorDemo}
                </a>
              ) : null}
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors"
              >
                <FaLink className="inline-block mr-1" /> {ui.buttons.adminDemo}
              </a>
            </>
          ) : (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaLink className="inline-block mr-1" /> {ui.buttons.demo}
            </a>
          )}

          {project.isMobile && !project.isFeatured && "staffLink" in project && project.staffLink ? (
            <a
              href={project.staffLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaLink className="inline-block mr-1" /> {ui.buttons.staffDemo}
            </a>
          ) : null}

          {project.isMobile && "customerLink" in project && project.customerLink ? (
            <a
              href={project.customerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              <FaLink className="inline-block mr-1" /> {ui.buttons.customerDemo}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { t, ui } = useLanguage();

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">{ui.sections.projects}</h2>

        <div id="custom-apps" className="mb-16 scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            {ui.sections.customApps}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={`custom-${index}`}
                project={project}
                kind="custom"
                t={t}
                ui={ui}
              />
            ))}
          </div>
        </div>

        <div id="wordpress-apps" className="scroll-mt-24">
          <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
            {ui.sections.wordpressApps}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wordpressProjectsData.map((project, index) => (
              <ProjectCard
                key={`wordpress-${index}`}
                project={project}
                kind="wordpress"
                t={t}
                ui={ui}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
