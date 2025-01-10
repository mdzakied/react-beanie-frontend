import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function SubscribeForm() {
  return (
    <div className="flex flex-column justify-content-center align-items-center h-full my-4">
      {/* Subscribe Title */}
      <h1 className="mb-0 color-tertiary">SUBSCRIBE US</h1>
      <p className="text-center font-secondary">
        Subscribe to our newsletterfor discount codes and updates
      </p>
      {/* Subscribe Form */}
      <div className="my-3 flex">
        <InputText
          placeholder="Write your email address here..."
          className="input-subs-custom mx-auto"
        />
        <Button
          className="btn-subs-custom color-tertiary font-primary text-sm border-2"
          label="ORDER NOW"
          rounded
          outlined
        />
      </div>
      {/* Social Media */}
      <div className="flex justify-content-center gap-3 my-3">
        <i className="pi pi-facebook hover:text-yellow-600 cursor-pointer"></i>
        <i className="pi pi-instagram hover:text-yellow-600 cursor-pointer"></i>
        <i className="pi pi-twitter hover:text-yellow-600 cursor-pointer"></i>
        <i className="pi pi-linkedin hover:text-yellow-600 cursor-pointer"></i>
        <i className="pi pi-youtube hover:text-yellow-600 cursor-pointer"></i>
      </div>
    </div>
  );
}
