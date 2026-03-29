import { SectionIntro } from "../../shared/SectionIntro"
import { aboutBodyParagraphs, aboutSkills, aboutTitle } from "../aboutData"
import "./AboutText.scss"

export const AboutText = () => (
  <div>
    <SectionIntro
      eyebrow="Who we are"
      title={aboutTitle}
      align="left"
      marginBottom="20px"
      eyebrowMarginBottom="16px"
      titleSize="clamp(1.75rem, 3.5vw, 2.6rem)"
      titleLineHeight="1.2"
      titleMarginBottom="0"
    />
    {aboutBodyParagraphs.map((paragraph) => (
      <p className="about-text__body" key={paragraph}>{paragraph}</p>
    ))}
    <ul className="about-text__features">
      {aboutSkills.map((skill) => (
        <li className="about-text__feature" key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
)
