import { SectionIntro } from "../../shared/SectionIntro"
import { aboutBodyParagraphs, aboutSkills, aboutTitle } from "../aboutData"

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
      <p className="text-[#555] text-base leading-[1.8] mb-4" key={paragraph}>{paragraph}</p>
    ))}
    <ul className="list-none p-0 mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
      {aboutSkills.map((skill) => (
        <li
          className="flex items-center gap-[10px] text-sm font-medium text-[#333] before:content-[''] before:w-1.5 before:h-1.5 before:bg-[#ff6b35] before:rounded-full before:shrink-0"
          key={skill}
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
)
