import React from "react";
import Card from "../card/Card";
import "./featuredProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = (props) => {
  const { data, isLoading, error } = useFetch(
    `products?populate=*&[filters][type][$eq]=${props.type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{props.type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem et
          cumque minima. Ab enim est aut repellendus nostrum adipisci iure
          numquam, ipsa beatae voluptatum mollitia.
        </p>
      </div>
      <div className="bottom">
        {error ? "Something went wrong..." : (isLoading
          ? "Loading..."
          : data.map((item) => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
