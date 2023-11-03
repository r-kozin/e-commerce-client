import React from "react";
import "./product.scss";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Product = () => {
  const id = useParams().id;
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading, error } = useFetch(`/products/${id}?populate=*`);

  console.log(data);

  return (
    <div className="product">
      {isLoading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={`${import.meta.env.VITE_API_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`}
                alt=""
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={`${import.meta.env.VITE_API_UPLOAD_URL}${data?.attributes?.img2?.data?.attributes?.url}`}
                alt=""
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImg">
              <img src={`${import.meta.env.VITE_API_UPLOAD_URL}${data?.attributes?.[selectedImage].data?.attributes?.url}`} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>
              {data?.attributes?.desc}
            </p>
            <div className="quantity">
              <button
                className=""
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className=""
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            {data?.attributes?.available === 0 || quantity > data?.attributes?.available ? <button className="OutOfStock" disabled>OUT OF STOCK</button> : (<button className="addToCart" onClick={() => dispatch(addToCart({
              id: data.id,
              title: data.attributes.title,
              desc: data.attributes.desc,
              price: data.attributes.price,
              img: import.meta.env.VITE_API_UPLOAD_URL+data.attributes.img.data.attributes.url,
              quantity,
            }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
      )}
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Men, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
