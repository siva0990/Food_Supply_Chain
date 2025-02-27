import HeroSection from "../Components/LandingPage/HeroSection";
import AboutSection from "../Components/LandingPage/AboutSection";
import ProductSection from "../Components/LandingPage/ProductSection";
import ContactUsSection from "../Components/LandingPage/ContactUsSection";
import FooterSection from "../Components/LandingPage/FooterSection";

function LandingPage(){
    return (
        <div className="overflow-x-hidden">
            <section id="home">
                <HeroSection />
            </section>
            <section id="About">
                <AboutSection />
            </section>
            <section id="Products">
                <ProductSection />
            </section>
            <section id="Contact">
                <ContactUsSection />
            </section>
            <section>
                <FooterSection />
            </section>
        </div>
    )
}
export default LandingPage;