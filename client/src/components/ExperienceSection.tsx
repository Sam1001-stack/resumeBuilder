import { FaBriefcase } from "react-icons/fa";
import { experienceData } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ExperienceSection() {
  const { t, ui } = useLanguage();

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">{ui.sections.experience}</h2>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <FaBriefcase className="text-primary text-xl mr-2" />
                    <h3 className="text-xl font-bold">{t(exp.title)}</h3>
                  </div>
                  <p className="text-lg mt-1">
                    {t(exp.company)} • {t(exp.location)}
                  </p>
                </div>
                <span className="text-primary font-medium mt-2 md:mt-0">
                  {t(exp.duration)}
                </span>
              </div>
              <p className="text-gray-700">{t(exp.description)}</p>
              {exp.experienceLetter ? (
                <p
                  className="text-gray-700 mt-4 cursor-pointer hover:text-primary underline"
                  onClick={() => window.open(exp.experienceLetter, "_blank")}
                >
                  {ui.buttons.experienceLetter}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
