import FeatureContent from "@components/Feature/FeatureContent"

const DATA = [
    {
      title: '#1 Limited Editions',
      content: `Discover rare and exclusive vintage items that you won't find anywhere else. 
      Our limited edition pieces add a touch of uniqueness to your collection.Order your piece of history today`,
      icon: 'ph:sketch-logo',
      linkTitle: 'Pricing'
    },
    {
      title: '#2 Customer Service',
      content: `Our dedicated customer service team ensures a seamless shopping experience, from inquiry to delivery. 
      Enjoy fast shipping and support every step of the way.`,
      icon: 'ph:package',
      linkTitle: 'Get Started'
    },
    {
      title: '#3 Passionate Community',
      content: `Join a community of vintage enthusiasts who share your passion for timeless treasures. 
      Engage with fellow collectors and stay inspired by our curated content.`,
      icon: 'ph:hand-heart',
      linkTitle: 'Learn More'
    }
  ]

const Feature = () => {
    return (
        <section className="feature-container my-24 py-24 bg-badge">
            <div className="feature-content wrap wrap-px">
                <div className="feature-content-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 gap-8">
                        {
                            DATA.map( (item, index) => (
                                <FeatureContent 
                                    key={index}
                                    title={item.title}
                                    content={item.content}
                                    linkTitle={item.linkTitle}
                                    icon={item.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature