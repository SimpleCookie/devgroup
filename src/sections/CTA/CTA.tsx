import "./CTA.scss"

export const CTA = () => (
  <section className="cta" id="contact">
    <div className="cta__content">
      <h2 className="cta__title">
        Ready to build
        <br />
        something great?
      </h2>
      <p className="cta__sub">
        Let's talk about how Devgroup can help take your idea from concept to
        production.
      </p>
      <div>
        <a className="cta__button" href="mailto:info@devgroup.se">Start a conversation →</a>
      </div>
      <div className="cta__note">Or reach us directly at info@devgroup.se</div>
    </div>
  </section>
)
