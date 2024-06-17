import SectionContent from "@components/Section/SectionContent"
import ButtonGroup from "@components/ButtonGroup"
import SectionHighlight from "@components/Section/SectionHighlight"
import Button, { ButtonVariant } from "@components/Button/Button"

const DATA = [
    {
      title: '#1 Authentic Vintage Finds',
      content: `Each item is carefully selected for its quality and authenticity.Our meticulous attention to detail and commitment to providing only the finest merchandise ensure that our customers can trust in the value and integrity of our offerings, making each purchase a worthwhile investment.`,
      image: '/images/highlight-1.jpeg',
      imageAltTag: 'highlight-1',
      icon: 'ph:lightning',
      link: '/pricing',
      linkTitle: 'Pricing',
      reversed: false
    },
    {
      title: '#2 Sustainable Shopping',
      content: `Embrace sustainability by choosing pre-loved items.By selecting pre-loved items, you're not only making a sustainable choice that benefits the environment, but you're also contributing to a circular economy that promotes the reuse and repurposing of goods, 
      ultimately reducing waste and conserving resources for future generations.`,
      image: '/images/highlight-2.jpeg',
      imageAltTag: 'highlight-2',
      icon: 'ph:globe-hemisphere-east',
      link: 'https://www.instagram.com/huntingvintagealb/',
      linkTitle: 'Get Started',
      reversed: true
    },
    {
      title: '#3 Vintage Collectibles',
      content: `Discover our rare and unique vintage collectibles, from classic shirts to antique pieces.
       Each piece has its own story and is perfect for collectors and enthusiasts alike.`,
      image: '/images/highlight-3.jpeg',
      imageAltTag: 'highlight-3',
      icon: 'ph:thermometer',
      link: '/about',
      linkTitle: 'Learn More',
      reversed: false
    }
  ]

const Highlight = () => {
    const alignment = "left"
    return (
        <section className="highlight-container my-24">
            <div className="highlight-content mb-16">
                <SectionContent 
                    title = "Welcome to Hunting Vintage"
                    alignment = {alignment}
                    isBigHeader = {false}
                >
                  <p>Discover the charm of yesteryear with our exclusive collection of handpicked vintage clothing. We work hard to ensure each item is unique, high-quality, and tells its own story.
                     Enjoy the best in vintage fashion with our fast delivery and exceptional customer care.</p>
                </SectionContent>
              
            </div>
            <div className="highlight-image-container">
                {
                  DATA.map( (item, index)=> (
                    <SectionHighlight 
                        key = { index }
                        title = { item.title }
                        content = { item.content }
                        image = { item.image }
                        imageAlt = { item.imageAltTag }
                        linkTitle = { item.linkTitle }
                        link = { item.link }
                        icon = { item.icon }
                        isReversed = { item.reversed }
                    />
                  ))
                }
            </div>
        </section>
    )
}

export default Highlight