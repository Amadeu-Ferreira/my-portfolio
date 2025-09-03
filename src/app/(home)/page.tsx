import HomeSection from "@/components/HomeSection/Index";
import SocialNetworksSection from "@/components/SocialNetworksSection/Index";
import ProjectsSection from "@/components/ProjectsSection/Index";
import Experience from "@/components/Experience/Index";
import CallToActionSection from "@/components/CallToActionSection/Index";

export default function HomePage() {
    return (
        <main>
            <section
                id="home"
                className="min-h-screen flex items-center">
                <HomeSection />
            </section>

            <section
                id="social_networks">
                <SocialNetworksSection />
            </section>

            <section
                id="projects"
                className="py-10">
                <ProjectsSection />
            </section>

            <section
                id="experience"
                className="py-10">
                <Experience />
            </section>

            <section
                id="call_to_action"
                className="py-10">
                <CallToActionSection />
            </section>
        </main>
    );
}