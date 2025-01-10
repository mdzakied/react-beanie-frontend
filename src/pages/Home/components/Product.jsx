export default function Product() {
  return (
    <div className="mt-8 mb-4">
      {/* Card Product 1 */}
      <div className="grid">
        {/* Card Product */}
        <div className="col flex h-20rem px-0">
          {/* Card Image */}
          <div className="col">
            <img
              src="https://plus.unsplash.com/premium_photo-1671379523836-b3b3c4196bdf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product-img"
              className="w-full h-full"
            />
          </div>
          {/* card Content */}
          <div className="col flex ustify-content-center align-items-center">
            <div className="flex flex-column shadow-4 justify-content-center align-items-center h-full">
              <h1 className="color-tertiary text-sm">INSTANT COFFEES</h1>
              <p className="text-center text-sm mt-0 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                obcaecati.
              </p>
              <a
                href="/shop-category"
                className="font-primary text-xs text-center color-tertiary font-bold hover:text-yellow-600"
              >
                SHOP CATEGORY
              </a>
            </div>
          </div>
        </div>

        {/* Card Product */}
        <div className="col flex h-20rem px-0">
          {/* Card Image */}
          <div className="col">
            <img
              src="https://plus.unsplash.com/premium_photo-1664192424507-89e53c421ade?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q09GRUUlMjBNQUtFUlN8ZW58MHx8MHx8fDA%3D"
              alt="product-img"
              className="w-full h-full"
            />
          </div>
          {/* card Content */}
          <div className="col flex ustify-content-center align-items-center">
            <div className="flex flex-column shadow-4 justify-content-center align-items-center h-full">
              <h1 className="color-tertiary text-sm">COFFEE MAKERS</h1>
              <p className="text-center text-sm mt-0 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                obcaecati.
              </p>
              <a
                href="/shop-category"
                className="font-primary text-xs text-center color-tertiary font-bold hover:text-yellow-600"
              >
                SHOP CATEGORY
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card Product 2 */}
      <div className="grid">
        {/* Card Product */}
        <div className="col flex h-20rem px-0">
          {/* card Content */}
          <div className="col flex ustify-content-center align-items-center">
            <div className="flex flex-column shadow-4 justify-content-center align-items-center h-full">
              <h1 className="color-tertiary text-sm">COFEE ACESSORIES</h1>
              <p className="text-center text-sm mt-0 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                obcaecati.
              </p>
              <a
                href="/shop-category"
                className="font-primary text-xs text-center color-tertiary font-bold hover:text-yellow-600"
              >
                SHOP CATEGORY
              </a>
            </div>
          </div>

          {/* Card Image */}
          <div className="col">
            <img
              src="https://plus.unsplash.com/premium_photo-1664391814566-5d7f80496bb1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q09GRUUlMjBBQ0NFU1NPUklFU3xlbnwwfHwwfHx8MA%3D%3D"
              alt="product-img"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Card Product */}
        <div className="col flex h-20rem px-0">
          {/* card Content */}
          <div className="col flex ustify-content-center align-items-center">
            <div className="flex flex-column shadow-4 justify-content-center align-items-center h-full">
              <h1 className="color-tertiary text-sm">COFFEE GIFT SETS</h1>
              <p className="text-center text-sm mt-0 px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                obcaecati.
              </p>
              <a
                href="/shop-category"
                className="font-primary text-xs text-center color-tertiary font-bold hover:text-yellow-600"
              >
                SHOP CATEGORY
              </a>
            </div>
          </div>

          {/* Card Image */}
          <div className="col">
            <img
              src="https://plus.unsplash.com/premium_photo-1681302765389-c089545d6708?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fENPRkVFJTIwR0lGVCUyMFNFVHxlbnwwfHwwfHx8MA%3D%3D"
              alt="product-img"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
