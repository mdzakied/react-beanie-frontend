export default function ShopFeature() {
  return (
    <div className="my-8">
      <div className="grid border-y-1 py-4">
        {/* Card Feature */}
        <div className="col w-24rem">
          <div className="flex flex-column justify-content-center align-items-center h-full">
            <i
              className="pi pi-truck color-tertiary"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <h1 className=" text-sm color-tertiary">QUICK DELIVERY</h1>
            <p className="text-center text-xs mt-0 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              obcaecati.
            </p>
          </div>
        </div>
        {/* Card Feature */}
        <div className="col w-24rem">
          <div className="flex flex-column justify-content-center align-items-center h-full">
            <i
              className="pi pi-shop color-tertiary"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <h1 className="color-teritary text-sm">PICKUP IN STORE</h1>
            <p className="text-center text-xs mt-0 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              obcaecati.
            </p>
          </div>
        </div>
        {/* Card Feature */}
        <div className="col w-24rem">
          <div className="flex flex-column justify-content-center align-items-center h-full">
            <i
              className="pi pi-dollar color-tertiary"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <h1 className="color-teritary text-sm">NO SHIPPING CHARGE</h1>
            <p className="text-center text-xs mt-0 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              obcaecati.
            </p>
          </div>
        </div>
        {/* Card Feature */}
        <div className="col w-24rem">
          <div className="flex flex-column justify-content-center align-items-center h-full">
            <i
              className="pi pi-users color-tertiary"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <h1 className="color-teritary text-sm">FRIENDLY SERVICES</h1>
            <p className="text-center text-xs mt-0 px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
