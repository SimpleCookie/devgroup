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
}: SectionIntroProps) => (
  <div
    className={align === "left" ? "text-left" : "text-center"}
    style={{ marginBottom }}
  >
    <div
      className="text-[#ff6b35] text-xs font-bold uppercase tracking-[0.1em]"
      style={{ marginBottom: eyebrowMarginBottom }}
    >
      {eyebrow}
    </div>
    <h2
      className={`font-extrabold tracking-[-0.025em] ${tone === "dark" ? "text-white" : "text-[#0a0a0f]"}`}
      style={{ fontSize: titleSize, marginBottom: titleMarginBottom, lineHeight: titleLineHeight || "normal" }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className={`text-[17px] leading-[1.65] ${tone === "dark" ? "text-white/[0.38]" : "text-[#777]"}`}
        style={{
          marginTop: subtitleMarginTop,
          marginLeft: align === "center" ? "auto" : 0,
          marginRight: align === "center" ? "auto" : 0,
          maxWidth: subtitleMaxWidth || "none",
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
)
