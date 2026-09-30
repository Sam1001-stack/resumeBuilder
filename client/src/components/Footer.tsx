import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { profileData } from "@/data/portfolioData";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, ui } = useLanguage();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">{profileData.name}</h2>
            <p className="text-gray-300">{t(profileData.title)}</p>

            <div className="mt-4 text-gray-300">
              <div className="flex items-center my-2">
                <FaEnvelope className="mr-2" />
                <a
                  href={`mailto:${profileData.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {profileData.email}
                </a>
              </div>
              <div className="flex items-center my-2">
                <FaPhone className="mr-2" />
                <a
                  href={`tel:${profileData.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {profileData.phone}
                </a>
              </div>
              <div className="flex items-center my-2">
                <FaMapMarkerAlt className="mr-2" />
                <span>{t(profileData.location)}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-4">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <p className="text-gray-400">
              © {currentYear} {profileData.name}. {ui.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
