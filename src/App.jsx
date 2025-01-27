import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <section className="wrapper">
                    <Skills />
                    <Experience />
                </section>
            </main>
            <Footer />
        </>
    );
}
