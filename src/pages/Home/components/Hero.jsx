import { Button } from "primereact/button";

export default function Hero() {
  return (
    <div className="w-screen grid flex justify-content-center mb-8 mt-4">
      {/* Hero Image */}
      <div className="col p-0">
        <img src="https://plus.unsplash.com/premium_photo-1726776097289-af24f553c74d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFwZXIlMjBiYWd8ZW58MHx8MHx8fDA%3D" alt="hero-img" className="border-round w-full h-full" />
      </div>
      {/* Hero Content */}
      <div className="col border-round p-0" style={{ backgroundColor: "#e4e3e1" }}>
        <div className="flex flex-column justify-content-center align-items-center h-full">
          <h1 className="mb-0 color-tertiary">
            SPECIAL <span className="color-secondary">COFFEE</span>
          </h1>
          <p className="text-center px-6 font-italic">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam quas
            alias quam eveniet officiis similique odit quos, inventore sunt ab
            aspernatur omnis dolorem commodi molestias, doloribus rerum optio
            laboriosam. Autem?
          </p>
          <Button
            className="btn-hero-custom mt-2 color-tertiary font-primary text-sm hover:bg-yellow-900 hover:text-white"
            label="ORDER NOW"
            rounded
            outlined
            severity="secondary"
          />
        </div>
      </div>
    </div>
  );
}
