import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaCloud,
  FaPaintBrush,
  FaCogs,
  FaDatabase,
  FaRobot,
} from "react-icons/fa";
import { skillsData } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SkillsSection() {
  const { t, ui } = useLanguage();

  const getIconForSkill = (id: string) => {
    switch (id) {
      case "frontend":
        return <FaCode className="text-primary text-3xl mb-4" />;
      case "backend":
        return <FaServer className="text-primary text-3xl mb-4" />;
      case "mobile":
        return <FaMobileAlt className="text-primary text-3xl mb-4" />;
      case "database":
        return <FaDatabase className="text-primary text-3xl mb-4" />;
      case "api":
        return <FaCloud className="text-primary text-3xl mb-4" />;
      case "devops":
        return <FaCogs className="text-primary text-3xl mb-4" />;
      case "software":
        return <FaPaintBrush className="text-primary text-3xl mb-4" />;
      case "ai":
        return <FaRobot className="text-primary text-3xl mb-4" />;
      default:
        return <FaCode className="text-primary text-3xl mb-4" />;
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">{ui.sections.skills}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="bg-secondary rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {getIconForSkill(skill.id)}
              <h3 className="text-xl font-bold mb-2">{t(skill.title)}</h3>
              <p className="text-gray-700">{t(skill.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
