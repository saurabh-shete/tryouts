import logo from "../images/LogRocket_logo.png";

const Header = () => {
  const menu = [
    {
      title: "customers",
      path: "https://logrocket.com/customers/",
    },
    {
      title: "pricing",
      path: "https://logrocket.com/pricing/",
    },
  ];

  return (
    <header>
      <div className="container header_content">
        <div className="brand">
          <a href="https://logrocket.com/" target="_blank" rel="noreferrer">
            <img src={logo} alt="" />
          </a>
        </div>
        <nav>
          <ul>
            {menu.map(({ title, path }) => (
              <li key={title}>
                <a target="_blank" rel="noreferrer" href={path}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="spacer"></div>
        <div className="switcher">{/* Language switch dropdown here */}</div>
      </div>
    </header>
  );
};

export default Header;
