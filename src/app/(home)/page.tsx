import HomeSection from "@/components/sections/HomeSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
    return (
        <main className="relative space-y-30 mb-20">
            {/* Apresentação */}
            <section
                id="home"
                className="min-h-screen flex items-center">
                <HomeSection />
            </section>

            <hr className="border-dashed" />

            {/* Educação */}
            <section id="education">
                <EducationSection />
            </section>

            <hr className="border-dashed" />

            {/* Experience */}
            <section id="experience">
                <ExperienceSection />
            </section>

            <hr className="border-dashed" />

            {/* Skills */}
            <section id="skills">
                <SkillsSection />
            </section>

            <hr className="border-dashed" />

            {/* Projetos */}
            <section id="projects">
                <ProjectsSection />
            </section>

            <hr className="border-dashed" />

            {/* Contacto */}
            <section id="contact">
                <ContactSection />
            </section>
        </main>
    );
}