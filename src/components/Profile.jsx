import profilePic from "@/assets/profile_pic.png";
import Skills from "@/components/Skills";
import Socials from "./Socials";


export default function Profile() {
    return (
        <section className="[ center-y ][ profile ]">
            <div>
                <div className="[ flex ][ center-y gap-2 ]">
                    <img src={profilePic} alt="Headshot of Nischal Abraham" className="margin-top-2" />
                    <div>
                        <h1>Hey, I'm Nischal!</h1>
                        <p>Fullstack Web Developer</p>
                        <p>Londonderry, UK🌐</p>
                    </div>
                </div>
                <Socials showResume />

                <Skills />
            </div>
        </section>
    );
}
