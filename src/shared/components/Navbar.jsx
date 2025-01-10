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
      src="https://static.vecteezy.com/system/resources/previews/024/035/220/non_2x/circle-coffee-bean-logo-on-transparent-background-free-png.png"
      alt="logo-img"
      className="hidden lg:block logo-navbar"
      height={100}
    />
  );

  // Menu
  const Menu = (
    <div className="card flex justify-content-center align-items-center gap-3">
      <InputText placeholder="Search here..." className="input-navbar-custom" />
      <i className="pi pi-search icon-input-navbar-custom mr-2"></i>
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
