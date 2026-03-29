import { customersData } from "../customersData"
import { CustomersHeader } from "../CustomersHeader"
import { LogoGrid } from "../LogoGrid"
import "./Customers.scss"

const Customers = () => (
  <section className="customers" id="customers">
    <CustomersHeader />
    <LogoGrid logos={customersData} />
  </section>
)

export default Customers
