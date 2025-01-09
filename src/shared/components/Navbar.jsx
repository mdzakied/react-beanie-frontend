import { Menubar } from "primereact/menubar";

import { InputText } from "primereact/inputtext";

export default function Navbar() {
  // Menu Item
  const menuItems = [
    {
      label: "HOME",
      url: "/home",
    },
    {
      label: "SHOP",
      url: "/shop",
      disabled: true,
    },
    {
      label: "BLOG",
      url: "/blog",
      disabled: true,
    },
    {
      label: "PAGES",
      url: "/pages",
      disabled: true,
    },
  ];

  // Logo
  const logo = (
    <img
      src="https://via.placeholder.com/100x100"
      alt="Logo"
      className="hidden lg:block logo-navbar"
    />
  );

  // Menu
  const Menu = (
    <div className="card flex justify-content-center align-items-center gap-3">
      <InputText placeholder="Search here..." className="input-navbar-custom" />
      <i className="pi pi-search icon-input-navbar-custom"></i>
      <i className="pi pi-heart mx-3"></i>
      <i className="pi pi-shopping-bag">
        <span className="ml-2">(0)</span>
      </i>
    </div>
  );

  return (
    <div className="w-screen my-4 border-y-1">
      <Menubar
        className="navbar-custom"
        model={menuItems}
        start={logo}
        end={Menu}
      />
    </div>
  );
}
