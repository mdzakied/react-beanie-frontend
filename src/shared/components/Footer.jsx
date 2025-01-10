export default function Footer() {
  // Menu Item
  const menuItems1 = [
    {
      label: "HOME",
      url: "/home",
    },
    {
      label: "ABOUT",
      url: "/about",
    },
    {
      label: "SHOP",
      url: "/shop",
    },
  ];

  const menuItems2 = [
    {
      label: "SHOP SINGLE",
      url: "/shop-single",
    },
    {
      label: "BLOG",
      url: "/blog",
    },
    {
      label: "CONTACT",
      url: "/contact",
    },
  ];

  const menuItems3 = [
    {
      label: "TERMS & CONDITIONS",
      disabled: true,
    },
    {
      label: "SERVICES",
      disabled: true,
    },
    {
      label: "PRIVACY POLICY",
      disabled: true,
    },
  ];

  const menuItems4 = [
    {
      label: "ADDRESS, LOCATION 123",
      url: "/address",
    },
    {
      label: "YOURINFO@GMAIL.com",
      url: "/email",
    },
    {
      label: "111 33 44 555",
      url: "/contact",
    },
  ];

  return (
    <div className="w-screen mt-8 font-primary">
      {/* Menu */}
      <div className="grid">
        {/* Menu 1 */}
        <div className="col">
          <ul style={{ listStyle: "none", padding: "0" }}>
            {menuItems1.map((item, index) => (
              <li key={index} style={{ padding: "2px 0" }}>
                <a
                  href={item.url}
                  style={{
                    textDecoration: "none",
                    color: item.disabled ? "gray" : "black",
                    padding: "5px 10px",
                    display: "inline-block",
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                  className="hover:text-yellow-600 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu 2 */}
        <div className="col">
          <ul style={{ listStyle: "none", padding: "0" }}>
            {menuItems2.map((item, index) => (
              <li key={index} style={{ padding: "2px 0" }}>
                <a
                  href={item.url}
                  style={{
                    textDecoration: "none",
                    color: item.disabled ? "gray" : "black",
                    padding: "5px 10px",
                    display: "inline-block",
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                  className="hover:text-yellow-600 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu 3 */}
        <div className="col">
          <ul style={{ listStyle: "none", padding: "0" }}>
            {menuItems3.map((item, index) => (
              <li key={index} style={{ padding: "2px 0" }}>
                <a
                  href={item.url}
                  style={{
                    textDecoration: "none",
                    color: item.disabled ? "gray" : "black",
                    padding: "5px 10px",
                    display: "inline-block",
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                  className="hover:text-yellow-600 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Menu 4 */}
        <div className="col">
          <ul style={{ listStyle: "none", padding: "0" }}>
            {menuItems4.map((item, index) => (
              <li key={index} style={{ padding: "2px 0" }}>
                <a
                  href={item.url}
                  style={{
                    textDecoration: "none",
                    color: item.disabled ? "gray" : "black",
                    padding: "5px 10px",
                    display: "inline-block",
                    pointerEvents: item.disabled ? "none" : "auto",
                  }}
                  className="hover:text-yellow-600 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-top-1 mt-4">
        <p className="text-center text-sm mb-0">
          &copy; 2023 Beanie. Designed by{" "}
          <span>
            <a
              href="https://templatesjungle.com/"
              target="_blank"
              className="no-underline"
            >
              TemplateJungle
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}
