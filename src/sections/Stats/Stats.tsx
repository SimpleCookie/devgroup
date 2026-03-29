const valueClass =
  "inline-block text-[clamp(1.6rem,_3vw,_2.8rem)] font-black bg-gradient-to-br from-[#ff6b35] to-[#ffb347] bg-clip-text text-transparent tracking-[-0.04em] leading-none whitespace-nowrap"
const labelClass = "text-white/40 text-xs font-semibold mt-2 tracking-[0.06em] uppercase"

export const Stats = () => (
  <section className="bg-[#0d1117] border-t border-b border-white/[0.06] py-16 px-6">
    <div className="max-w-[860px] mx-auto grid grid-cols-4 max-sm:grid-cols-2 max-sm:gap-y-12">
      <div className="text-center px-6 border-r border-white/[0.07]">
        <div className={valueClass}>10+</div>
        <div className={labelClass}>Years Experience</div>
      </div>
      <div className="text-center px-6 border-r border-white/[0.07] max-sm:border-r-0">
        <div className={valueClass}>Full&#8209;Stack</div>
        <div className={labelClass}>Frontend &amp; Backend</div>
      </div>
      <div className="text-center px-6 border-r border-white/[0.07]">
        <div className={valueClass}>6+</div>
        <div className={labelClass}>Clients Served</div>
      </div>
      <div className="text-center px-6">
        <div className={valueClass}>CI/CD</div>
        <div className={labelClass}>Automated Delivery</div>
      </div>
    </div>
  </section>
)
