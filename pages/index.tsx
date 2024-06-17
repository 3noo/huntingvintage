import Hero from "@components/Hero"
import Highlight from "@components/Highlight"
import Feature from "@components/Feature"
import SEO from '@components/SEO'


const Home = () => {
  const pageTitle = `Hunting Vintage`
  return (
    <div className="main-content-container">
        <SEO 
          title={pageTitle}
          description="Welcome to our website!"
        />
        <Hero />
        <Highlight />
        <Feature />
    </div>
  )
}

export default Home