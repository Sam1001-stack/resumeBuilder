import type { Lang } from "./types";

export const ui = {
  nav: {
    about: { en: "About", de: "Über mich" },
    skills: { en: "Skills", de: "Fähigkeiten" },
    experience: { en: "Experience", de: "Erfahrung" },
    projects: { en: "Portfolio", de: "Portfolio" },
    certifications: { en: "Certifications", de: "Zertifikate" },
    education: { en: "Education", de: "Ausbildung" },
  },
  sections: {
    skills: { en: "Skills & Expertise", de: "Fähigkeiten & Expertise" },
    experience: { en: "Work Experience", de: "Berufserfahrung" },
    projects: { en: "Portfolio", de: "Portfolio" },
    certifications: { en: "Certifications", de: "Zertifikate" },
    education: { en: "Education", de: "Ausbildung" },
  },
  buttons: {
    demo: { en: "Demo", de: "Demo" },
    vendorDemo: { en: "Vendor Demo", de: "Vendor-Demo" },
    adminDemo: { en: "Admin Demo", de: "Admin-Demo" },
    staffDemo: { en: "Staff Demo", de: "Mitarbeiter-Demo" },
    customerDemo: { en: "Customer Demo", de: "Kunden-Demo" },
    experienceLetter: { en: "Experience Letter", de: "Arbeitszeugnis" },
    downloadResume: { en: "Download Resume (PDF)", de: "Lebenslauf herunterladen (PDF)" },
  },
  footer: {
    rights: {
      en: "All rights reserved.",
      de: "Alle Rechte vorbehalten.",
    },
  },
  language: {
    label: { en: "Language", de: "Sprache" },
    de: { en: "German", de: "Deutsch" },
    en: { en: "English", de: "Englisch" },
  },
  notFound: {
    title: { en: "404 Page Not Found", de: "404 Seite nicht gefunden" },
    body: {
      en: "Did you forget to add the page to the router?",
      de: "Haben Sie vergessen, die Seite im Router hinzuzufügen?",
    },
  },
} as const;

export type UiKey = typeof ui;

export function getUi(lang: Lang) {
  return {
    nav: {
      about: ui.nav.about[lang],
      skills: ui.nav.skills[lang],
      experience: ui.nav.experience[lang],
      projects: ui.nav.projects[lang],
      certifications: ui.nav.certifications[lang],
      education: ui.nav.education[lang],
    },
    sections: {
      skills: ui.sections.skills[lang],
      experience: ui.sections.experience[lang],
      projects: ui.sections.projects[lang],
      certifications: ui.sections.certifications[lang],
      education: ui.sections.education[lang],
    },
    buttons: {
      demo: ui.buttons.demo[lang],
      vendorDemo: ui.buttons.vendorDemo[lang],
      adminDemo: ui.buttons.adminDemo[lang],
      staffDemo: ui.buttons.staffDemo[lang],
      customerDemo: ui.buttons.customerDemo[lang],
      experienceLetter: ui.buttons.experienceLetter[lang],
      downloadResume: ui.buttons.downloadResume[lang],
    },
    footer: {
      rights: ui.footer.rights[lang],
    },
    language: {
      label: ui.language.label[lang],
      de: ui.language.de[lang],
      en: ui.language.en[lang],
    },
    notFound: {
      title: ui.notFound.title[lang],
      body: ui.notFound.body[lang],
    },
  };
}
