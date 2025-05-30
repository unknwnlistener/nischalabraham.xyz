import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <section>
                    <Skills />
                    <Experience />
                    <Projects />
                </section>
            </main>
            <Footer />
        </>
    );
}
