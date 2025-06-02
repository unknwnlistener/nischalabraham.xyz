import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Profile from "@/components/Profile";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Profile />
                <section>
                    <Experience />
                    <Projects />
                </section>
            </main>
            <Footer />
        </>
    );
}
