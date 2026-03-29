import "./Stats.scss"

export const Stats = () => (
  <section className="stats">
    <div className="stats__grid">
      <div className="stats__item">
        <div className="stats__value">10+</div>
        <div className="stats__label">Years Experience</div>
      </div>
      <div className="stats__item">
        <div className="stats__value">Full&#8209;Stack</div>
        <div className="stats__label">Frontend &amp; Backend</div>
      </div>
      <div className="stats__item">
        <div className="stats__value">6+</div>
        <div className="stats__label">Clients Served</div>
      </div>
      <div className="stats__item">
        <div className="stats__value">CI/CD</div>
        <div className="stats__label">Automated Delivery</div>
      </div>
    </div>
  </section>
)
