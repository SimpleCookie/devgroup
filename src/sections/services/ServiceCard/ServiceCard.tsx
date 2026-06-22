import { ServiceItem } from "../servicesData"

interface Props {
  service: ServiceItem
}

export const ServiceCard = ({ service }: Props) => (
  <div className="bg-white border border-[#e8eaed] rounded-2xl py-9 px-8 transition-all duration-300 hover:border-[rgba(255,107,53,0.35)] hover:shadow-[0_20px_48px_rgba(255,107,53,0.07)] hover:-translate-y-1">
    <div className="w-[52px] h-[52px] bg-gradient-to-br from-[rgba(255,107,53,0.1)] to-[rgba(255,179,71,0.1)] rounded-[14px] flex items-center justify-center text-2xl mb-5">
      {service.icon}
    </div>
    <h3 className="text-[18px] font-bold text-[#0a0a0f] mb-[10px] tracking-[-0.01em]">{service.title}</h3>
    <p className="text-[15px] text-[#666] leading-[1.7]">{service.text}</p>
  </div>
)
