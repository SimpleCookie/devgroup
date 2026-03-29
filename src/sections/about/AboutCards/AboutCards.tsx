import { aboutCards } from "../aboutData"

export const AboutCards = () => (
  <div className="grid gap-5">
    {aboutCards.map((card) => (
      <div
        className="bg-white border border-[#e8eaed] rounded-2xl p-7 flex gap-[18px] items-start transition-all duration-[250ms] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-0.5"
        key={card.title}
      >
        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[rgba(255,107,53,0.1)] to-[rgba(255,179,71,0.1)] flex items-center justify-center text-xl shrink-0">
          {card.icon}
        </div>
        <div>
          <h4 className="font-bold text-[#0a0a0f] text-[15px] mb-[5px] tracking-[-0.01em]">{card.title}</h4>
          <p className="text-[#777] text-[13.5px] leading-[1.55]">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
)
