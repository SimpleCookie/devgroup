import dayjs from "dayjs"

export const Footer = () => {
  const year = dayjs().year()
  return <footer className="background-primary">© {year} Devgroup. All rights reserved. </footer>
}
