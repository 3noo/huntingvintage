import SEO from '@components/SEO'
import SectionContent from '@components/Section/SectionContent'
import SectionImage from '@components/Section/SectionImage'
import SectionHighlight from '@components/Section/SectionHighlight'
import Logos from "@components/Logos"

const About = () => {
    const pageTitle = `About | Hunting Vintage`
    return (
        <div className="main-content-container wrap">
            <SEO 
                title={pageTitle}
                description="Welcome to our website!"
            />
            <SectionContent 
                title = "About Hunting Vintage"
                alignment = "left"
                hasBlockPadding = {true}
            >
                <p>At Hunting Vintage, we are dedicated to reviving the timeless appeal of vintage fashion. 
                    Our mission is to bring you a carefully curated collection of unique and high-quality vintage pieces that tell their own stories.
                     We believe in the charm of the past and the individuality that vintage clothing provides.</p>
            </SectionContent>
            <SectionImage 
                className="my-5"
                src="/images/Hero6.jpeg"
                alt="About Page Hero"
            />
            <SectionContent 
                alignment = "left"
                hasBlockPadding = {true}
            >
                <p>Our team works tirelessly to source and inspect each item, ensuring authenticity and exceptional quality. 
                    We care deeply about our customers and strive to offer outstanding service, from personalized shopping experiences to fast and reliable delivery. 
                    Join us in celebrating the beauty of vintage fashion and find your next unique treasure with Hunting Vintage.</p>
            </SectionContent>
            <SectionHighlight 
                title="Our vision"
                content="At Hunting Vintage, we are dedicated to preserving the charm of vintage fashion while promoting sustainability. 
                By reviving pre-loved garments, we offer you an eco-friendly way to enjoy high-quality, stylish clothing. 
                Join us in celebrating the beauty of Albanian vintage fashion and discover the perfect piece to add to your collection."
                image="/images/highlight-22.jpeg"
                imageAlt="Lorem ipsum dolor sit"
            />
        </div>
    )
}

export default About