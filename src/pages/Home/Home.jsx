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
      <div id="hero" className="card flex justify-content-center">
        <Hero />
      </div>
      {/* Description */}
      <div id="description" className="card flex justify-content-center">
        <Description />
      </div>
      {/* Best Cofee */}
      <div id="best-cofee" className="card flex justify-content-center">
        <BestCofee />
      </div>
      {/* Comment*/}
      <div id="comment" className="card flex justify-content-center">
        <Comment />
      </div>
      {/* Product */}
      <div id="product" className="card flex justify-content-center">
        <Product />
      </div>
      {/* Category Product */}
      <div
        id="category-product"
        className="card flex justify-content-center grid"
      >
        {/* Category Product New Arrival */}
        <div
          id="new-arrival-product"
          className="col-12 md:col-6 card flex justify-content-center md:justify-content-start"
        >
          <NewArivalProduct />
        </div>
        {/* Category Product Best Selling */}
        <div
          id="best-selling"
          className="col-12 md:col-6 card flex justify-content-center md:justify-content-start"
        >
          <BestSelling />
        </div>
      </div>
      {/* Subscribe Form */}
      <div id="subscribe-form" className="card flex justify-content-center">
        <SubscribeForm />
      </div>
      {/* Shop Feature */}
      <div id="shop-feature" className="card flex justify-content-center">
        <ShopFeature />
      </div>
      {/* Blog */}
      <div id="blog" className="card flex justify-content-center">
        <Blog />
      </div>
      {/* Instagram View */}
      <div id="instagram-view">
        <InstagramView />
      </div>
    </div>
  );
}
