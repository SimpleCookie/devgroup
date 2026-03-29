import type { CSSProperties } from "react"
import "./SectionIntro.scss"

interface SectionIntroProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  tone?: "light" | "dark"
  marginBottom?: string
  eyebrowMarginBottom?: string
  titleSize?: string
  titleMarginBottom?: string
  titleLineHeight?: string
  subtitleMaxWidth?: string
  subtitleMarginTop?: string
}

export const SectionIntro = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  marginBottom = "72px",
  eyebrowMarginBottom = "14px",
  titleSize = "clamp(2rem, 4vw, 3rem)",
  titleMarginBottom = subtitle ? "16px" : "0",
  titleLineHeight,
  subtitleMaxWidth,
  subtitleMarginTop = "0",
}: SectionIntroProps) => {
  const vars = {
    "--intro-align": align,
    "--intro-margin-bottom": marginBottom,
    "--intro-eyebrow-margin-bottom": eyebrowMarginBottom,
    "--intro-title-size": titleSize,
    "--intro-title-color": tone === "dark" ? "#fff" : "#0a0a0f",
    "--intro-title-margin-bottom": titleMarginBottom,
    "--intro-title-line-height": titleLineHeight || "normal",
    "--intro-subtitle-color": tone === "dark" ? "rgba(255, 255, 255, 0.38)" : "#777",
    "--intro-subtitle-margin-top": subtitleMarginTop,
    "--intro-subtitle-max-width": subtitleMaxWidth || "none",
    "--intro-subtitle-side-margin": align === "center" ? "auto" : "0",
  } as CSSProperties

  return (
    <div className="section-intro" style={vars}>
      <div className="section-intro__eyebrow">{eyebrow}</div>
      <h2 className="section-intro__title">{title}</h2>
      {subtitle && (
        <p className="section-intro__subtitle">
          {subtitle}
        </p>
      )}
    </div>
  )
}
