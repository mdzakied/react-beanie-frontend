import Hero from "./components/Hero";
import Description from "./components/Description";
import BestCofee from "./components/BestCofee";
import Comment from "./components/Comment";
import Product from "./components/Product";
import NewArivalProduct from "./components/NewArivalProduct";
import BestSelling from "./components/BestSelling";
import SubscribeForm from "./components/SubscribeForm";
import ShopFeature from "./components/ShopFeature";
import Blog from "./components/Blog";
import InstagramView from "./components/InstagramView";

export default function Home() {
  return (
    <div className="card flex flex-column justify-content-center">
      {/* Hero */}
      <div className="card flex justify-content-center">
        <Hero />
      </div>
      {/* Description */}
      <div className="card flex justify-content-center">
        <Description />
      </div>
      {/* Best Cofee */}
      <div className="card flex justify-content-center">
        <BestCofee />
      </div>
      {/* Comment*/}
      <div className="card flex justify-content-center">
        <Comment />
      </div>
      {/* Product */}
      <div className="card flex justify-content-center">
        <Product />
      </div>
      {/* Category Product */}
      <div className="card flex justify-content-center grid">
        {/* Category Product New Arrival */}
        <div className="col-12 md:col-6 card flex justify-content-center md:justify-content-start">
          <NewArivalProduct />
        </div>
        {/* Category Product Best Selling */}
        <div className="col-12 md:col-6 card flex justify-content-center md:justify-content-start">
          <BestSelling />
        </div>
      </div>
      {/* Subscribe Form */}
      <div className="card flex justify-content-center">
        <SubscribeForm />
      </div>
      {/* Shop Feature */}
      <div className="card flex justify-content-center">
        <ShopFeature />
      </div>
      {/* Blog */}
      <div className="card flex justify-content-center">
        <Blog />
      </div>
      {/* Instagram View */}
      <div className="card flex justify-content-center">
        <InstagramView />
      </div>
    </div>
  );
}
