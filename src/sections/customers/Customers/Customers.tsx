import { customersData } from "../customersData"
import { CustomersHeader } from "../CustomersHeader"
import { LogoGrid } from "../LogoGrid"

const Customers = () => (
  <section className="bg-[#0d1117] py-[120px] px-6" id="customers">
    <CustomersHeader />
    <LogoGrid logos={customersData} />
  </section>
)

export default Customers
