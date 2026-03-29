import { AboutCards } from "../AboutCards"
import { AboutText } from "../AboutText"
import "./About.scss"

const About = () => (
  <section className="about" id="about">
    <div className="about__inner">
      <AboutText />
      <AboutCards />
    </div>
  </section>
)

export default About
