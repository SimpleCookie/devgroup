import { AboutCards } from "../AboutCards"
import { AboutText } from "../AboutText"

const About = () => (
  <section className="py-[120px] px-6 bg-[#f6f8fa]" id="about">
    <div className="max-w-[1000px] mx-auto grid grid-cols-2 gap-20 items-center max-md:grid-cols-1 max-md:gap-12">
      <AboutText />
      <AboutCards />
    </div>
  </section>
)

export default About
