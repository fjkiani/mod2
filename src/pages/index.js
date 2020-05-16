import React from "react"
import '../styles/styles.scss'
import Header from "../components/header"
import {Link} from 'gatsby'
import Banner from "../components/banner"
import AboutWeb from "../components/aboutWeb"
import AboutTrain from "../components/aboutTrain"
import AboutDj from "../components/aboutDj"
import Footer from "../components/footer"
import MyWork from "../components/myWork";
import LatestWork from "../components/contentComponents/LatestWork"
import SEO from "../components/seo"



const IndexPage = ({data}) => (


  <div>

    <SEO title="Home" keywords={[`fahadkiani`, `fahad`, `dj fahad`,`Freelance Web Developer in New York`, `Freelance Web Developer in New Jersey`, `Web Design`, `Get help building a website`, `Javascript Developer`, `UI UX Designer`, `Fahad Kiani`, `Fahad J Kiani`, `Fjkiani`, `Build a website`, `Hire someone to build a website`, `Software Engineer`,`ik pakistan tours`, `Hire A Product Manager`, `DJ Kiani`, `DJK`, `#Fjkiani`, `#DJK`, `Hire A DJ`]} 
    />
    <Header/>
    <Banner />
    <AboutWeb />
    <AboutTrain/>
    <AboutDj />
    <hr></hr>
     <MyWork/>
    <LatestWork/>


  <section className="items">
    <div className="center">
    <Link to="/work" className="btn" data-aos="fade-up"> View All Work </Link>
    </div>
  </section>

    <Footer/>
    

  </div>
  
)

export default IndexPage
