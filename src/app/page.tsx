import Hero from "@/components/HeroSection/Index";
import SocialNetworks from "@/components/SocialNetworksSection/Index";
import Projects from "@/components/ProjectsSection/Index";
import Education from "@/components/EducationSection/Index";
import Contact from "@/components/ContactSection/Index";

export default function HomePage() {
    return (
        <main>
            <section id="home" className="min-h-screen flex items-center">
                <Hero />
            </section>

            <section id="social_networks">
                <SocialNetworks />
            </section>

            <section id="projects" className="py-10">
                <Projects />
            </section>

            <section id="experience" className="py-10">
                <Education />
            </section>

            <section id="call_to_action" className="py-10">
                <Contact />
            </section>
        </main>
    );
}