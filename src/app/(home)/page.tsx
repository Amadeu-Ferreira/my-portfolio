import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection/Index";
import EducationSection from "@/components/EducationSection/Index";
import ExperienceSection from "@/components/ExperienceSection/Index";
import ProjectsSection from "@/components/ProjectsSection/Index";
import ContactSection from "@/components/ContactSection/Index";

export default function HomePage() {
    return (
        <main>
            <HomeSection />

            <div className="relative max-w-7xl mx-auto">
                <Header />

                <section
                    id="education"
                    className="py-40">
                    <EducationSection /> {/* Education */}
                </section>

                <section
                    id="experience"
                    className="py-40">
                    <ExperienceSection /> {/* Experience */}
                </section>

                <section
                    id="projects"
                    className="py-40">
                    <ProjectsSection /> {/* Projects */}
                </section>

                <section
                    id="contact"
                    className="py-40">
                    <ContactSection /> {/* Contact */}
                </section>
            </div>
        </main>
    );
}