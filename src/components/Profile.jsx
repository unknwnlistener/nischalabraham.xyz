import profilePic from "@/assets/profile_pic.png";
import Skills from "@/components/Skills";
import Socials from "./Socials";
import MapPin from "../assets/MapPin";


export default function Profile() {
    return (
        <section id="about" className="[ center-y margin-top-4 ][ profile ]">
            <div>
                <div className="[ flex ][ center-y gap-s ]">
                    <img src={profilePic} alt="Headshot of Nischal Abraham" className="margin-top-2" />
                    <div className="[ bg-chat point-left padding-s ]">
                        <p>Hey, I&apos;m Nischal!</p>
                        <h1>Fullstack Web Developer</h1>
                        <p className="center-y gap-3xs"><MapPin /> Londonderry, UK</p>
                    </div>
                </div>
                <Socials showResume />

                <Skills />
            </div>
        </section>
    );
}
