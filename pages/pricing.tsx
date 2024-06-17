import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import Logos from "@components/Logos"
import ButtonGroup from '@components/ButtonGroup'
import Button, {ButtonVariant} from '@components/Button/Button'

const Pricing = () => {
    const pageTitle = `Pricing & Policies | Hunting Vintage`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website! We offer a wide range of products and services designed to help you achieve your goals. Whether you're looking for information, support, or simply want to learn more, we're here to help. Explore our site to find out more."
            />
            <div className="content-container my-20 sm:my-18">
                <SectionContent title = "Pricing & Policies" alignment = "left">
                    <p>Enjoy competitive pricing on our exclusive vintage pieces, all meticulously inspected to meet our rigorous quality standards. Experience the elegance of vintage fashion with the assurance of fast and reliable delivery to your doorstep. Our dedicated team ensures every item is in top condition, ready for you to wear and love. 
                        Shop with confidence knowing we stand behind the authenticity and quality of each unique find.</p>
                </SectionContent>
                <ButtonGroup className = "wrap-sm wrap-px" alignment="left">
                    <Button text="Shop Now" link="https://www.instagram.com/huntingvintagealb/" icon="ph:arrow-right-bold" variant={ButtonVariant.primary}/>
                </ButtonGroup>
            </div>
            <SectionImage 
                className="my-24"
                src="/images/Hero5.jpeg"
                alt="Pricing Page Hero"
            />
        </div>
    )
}

export default Pricing