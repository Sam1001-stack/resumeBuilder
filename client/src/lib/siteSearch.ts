import {
  profileData,
  skillsData,
  experienceData,
  educationData,
  certificationData,
  projectsData,
  wordpressProjectsData,
} from "@/data/portfolioData";
import type { Lang, LocalizedString } from "@/i18n/types";
import { pick } from "@/i18n/types";

export type SearchItem = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  keywords: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function blob(parts: Array<string | LocalizedString>, lang: Lang) {
  return parts
    .map((part) => (typeof part === "string" ? part : pick(part, lang)))
    .join(" ")
    .toLowerCase();
}

export function projectElementId(kind: "custom" | "wordpress", title: LocalizedString | string) {
  const label = typeof title === "string" ? title : title.en;
  return `project-${kind}-${slugify(label)}`;
}

export function buildSearchIndex(
  lang: Lang,
  labels: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    customApps: string;
    wordpressApps: string;
    certifications: string;
    education: string;
  }
): SearchItem[] {
  const items: SearchItem[] = [
    {
      id: "about",
      title: labels.about,
      subtitle: pick(profileData.title, lang),
      category: labels.about,
      keywords: blob(
        [labels.about, profileData.name, profileData.title, profileData.bio, profileData.location],
        lang
      ),
    },
    {
      id: "skills",
      title: labels.skills,
      subtitle: labels.skills,
      category: labels.skills,
      keywords: blob([labels.skills], lang),
    },
    {
      id: "experience",
      title: labels.experience,
      subtitle: labels.experience,
      category: labels.experience,
      keywords: blob([labels.experience], lang),
    },
    {
      id: "projects",
      title: labels.projects,
      subtitle: labels.projects,
      category: labels.projects,
      keywords: blob([labels.projects, labels.customApps, labels.wordpressApps], lang),
    },
    {
      id: "custom-apps",
      title: labels.customApps,
      subtitle: labels.projects,
      category: labels.customApps,
      keywords: blob([labels.customApps, labels.projects], lang),
    },
    {
      id: "wordpress-apps",
      title: labels.wordpressApps,
      subtitle: labels.projects,
      category: labels.wordpressApps,
      keywords: blob([labels.wordpressApps, labels.projects, "wordpress", "woocommerce"], lang),
    },
    {
      id: "certifications",
      title: labels.certifications,
      subtitle: labels.certifications,
      category: labels.certifications,
      keywords: blob([labels.certifications], lang),
    },
    {
      id: "education",
      title: labels.education,
      subtitle: labels.education,
      category: labels.education,
      keywords: blob([labels.education], lang),
    },
  ];

  for (const skill of skillsData) {
    items.push({
      id: `skill-${skill.id}`,
      title: pick(skill.title, lang),
      subtitle: labels.skills,
      category: labels.skills,
      keywords: blob([skill.title, skill.description, skill.id, labels.skills], lang),
    });
  }

  experienceData.forEach((exp, index) => {
    items.push({
      id: `experience-${index}`,
      title: `${pick(exp.title, lang)} · ${pick(exp.company, lang)}`,
      subtitle: pick(exp.duration, lang),
      category: labels.experience,
      keywords: blob(
        [exp.title, exp.company, exp.location, exp.duration, exp.description, labels.experience],
        lang
      ),
    });
  });

  projectsData.forEach((project) => {
    items.push({
      id: projectElementId("custom", project.title),
      title: pick(project.title, lang),
      subtitle: labels.customApps,
      category: labels.customApps,
      keywords: blob(
        [
          project.title,
          project.description,
          project.technologies.join(" "),
          labels.customApps,
          labels.projects,
        ],
        lang
      ),
    });
  });

  wordpressProjectsData.forEach((project) => {
    items.push({
      id: projectElementId("wordpress", project.title),
      title: pick(project.title, lang),
      subtitle: labels.wordpressApps,
      category: labels.wordpressApps,
      keywords: blob(
        [
          project.title,
          project.description,
          project.technologies.join(" "),
          labels.wordpressApps,
          labels.projects,
          "wordpress",
        ],
        lang
      ),
    });
  });

  certificationData.forEach((cert, index) => {
    items.push({
      id: `certification-${index}`,
      title: pick(cert.degree, lang),
      subtitle: `${pick(cert.institution, lang)} · ${cert.year}`,
      category: labels.certifications,
      keywords: blob(
        [cert.degree, cert.institution, cert.year, cert.description, labels.certifications],
        lang
      ),
    });
  });

  educationData.forEach((edu, index) => {
    items.push({
      id: `education-${index}`,
      title: pick(edu.degree, lang),
      subtitle: `${pick(edu.institution, lang)} · ${edu.year}`,
      category: labels.education,
      keywords: blob(
        [edu.degree, edu.institution, edu.year, edu.description, labels.education],
        lang
      ),
    });
  });

  return items;
}

export function filterSearchItems(items: SearchItem[], query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return items.filter(
    (item) =>
      item.keywords.includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );
}

export function scrollToSearchTarget(elementId: string) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
  el.classList.add("ring-2", "ring-primary", "ring-offset-2");
  window.setTimeout(() => {
    el.classList.remove("ring-2", "ring-primary", "ring-offset-2");
  }, 1600);
}
