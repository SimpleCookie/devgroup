import { Stats } from "../sections/Stats"
import { Services } from "../sections/Services"
import { TechStack } from "../sections/TechStack"
import { About } from "../sections"
import { Customers } from "../sections"
import { CTA } from "../sections/CTA"

export const Home = () => (
  <main>
    <Stats />
    <TechStack />
    <Services />
    <About />
    <Customers />
    <CTA />
  </main>
)
