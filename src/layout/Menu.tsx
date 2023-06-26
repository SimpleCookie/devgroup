const menuItems = [
  { alias: "Home" },
  { alias: "About" },
]

//
/**
 * Considering a true single-page website
 * So this is currently not in use
 */
export const Menu = () => {
  return <div className="absolute">
    <nav className="fa fa-bars fa-3x hamburger" />
    <ol>
      {menuItems.map(item => <li>{item.alias}</li>)}
    </ol>
  </div>
}
