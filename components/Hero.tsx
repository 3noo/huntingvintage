import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionImage from "@components/Section/SectionImage"
import BadgeGroup from "@components/BadgeGroup"
import Button, { ButtonVariant } from "@components/Button/Button"
import BadgeContext from "@components/Badge/BadgeContext"
import BadgeMessage from "@components/Badge/BadgeMessage"
import BadgeIcon from "@components/Badge/BadgeIcon"
const Hero = () => {
    const alignment = "center"

    return (
        <section className="hero-container">
            <div className="hero-content-container py-8 ">
                <SectionContent 
                    title = "Discover Unique Vintage Treasures"
                    alignment = {alignment}
                    isBigHeader = {true}
                >
                    <p>Curated vintage items that add a touch of nostalgia and style to your life.</p>
                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px" alignment={alignment}>
                    <Button 
                        text="Shop Now" 
                        link="https://www.instagram.com/huntingvintagealb/"
                        icon="ph:arrow-right-bold"
                        variant={ButtonVariant.primary}
                    />
                </ButtonGroup>
            </div>
            <SectionImage 
                src="/images/Hero.jpeg"
                alt="Hero Image used for Hero Banner"
            />
        </section>
    )
}

export default Hero