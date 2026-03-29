export const CTA = () => (
  <section
    className="py-[140px] px-6 bg-[#0a0a0f] text-center relative overflow-hidden before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[700px] before:h-[350px] before:[background:radial-gradient(ellipse,rgba(255,107,53,0.14)_0%,transparent_70%)] before:animate-cta-pulse"
    id="contact"
  >
    <div className="relative z-[1]">
      <h2 className="text-[clamp(2.2rem,_5vw,_3.75rem)] font-black text-white tracking-[-0.035em] leading-[1.1] mb-5">
        Ready to build
        <br />
        something great?
      </h2>
      <p className="text-white/[0.45] text-[18px] mb-11 max-w-[460px] mx-auto leading-[1.65]">
        Let's talk about how Devgroup can help take your idea from concept to
        production.
      </p>
      <div>
        <a
          className="inline-flex items-center gap-[10px] bg-[#ff6b35] text-white py-4 px-11 rounded-lg text-[17px] font-bold no-underline transition-all duration-200 tracking-[0.01em] hover:bg-[#e05a28] hover:-translate-y-[3px] hover:shadow-[0_28px_56px_rgba(255,107,53,0.35)]"
          href="mailto:info@devgroup.se"
        >
          Start a conversation →
        </a>
      </div>
      <div className="text-white/20 text-[13px] mt-6 tracking-[0.01em]">Or reach us directly at info@devgroup.se</div>
    </div>
  </section>
)
