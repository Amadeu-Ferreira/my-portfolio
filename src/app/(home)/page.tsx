import HomeSection from "@/components/HomeSection/Index";
import EducationSection from "@/components/EducationSection/Index";
import ExperienceSection from "@/components/ExperienceSection/Index";
import ProjectsSection from "@/components/ProjectsSection/Index";
import ContactSection from "@/components/ContactSection/Index";

export default function HomePage() {
    return (
        <main className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <section
                id="home"
                className="min-h-screen flex items-center">
                <HomeSection />
            </section>

            <section
                id="projects"
                className="py-20">
                <ProjectsSection />
            </section>

            <section
                id="education"
                className="py-20">
                <EducationSection />
            </section>

            <section
                id="experience"
                className="py-20">
                <ExperienceSection />
            </section>

            <section
                id="contact"
                className="py-20">
                <ContactSection />
            </section>

        </main>
    );
}