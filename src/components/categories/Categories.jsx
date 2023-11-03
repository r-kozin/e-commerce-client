import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/3905875/pexels-photo-3905875.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <Link to="/products/3" className="link">
          <button>
              Sale
          </button>
            </Link>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <Link to="/products/2" className="link">
          <button>
              Women
          </button>
            </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Men
          </button>
            </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
          <div className="row">

            {" "}
            <img
              src="https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/1" className="link">
          <button>
              Men
          </button>
            </Link>
          </div>
          </div>
          <div className="col">
          <div className="row">

            {" "}
            <img
              src="https://images.pexels.com/photos/1750776/pexels-photo-1750776.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <Link to="/products/1" className="link">
          <button>
              Men
          </button>
            </Link>
          </div>
          </div>
        </div>
        <div className="row">
          {" "}
          <img
            src="https://images.pexels.com/photos/3923106/pexels-photo-3923106.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
            <Link to="/products/1" className="link">
          <button>
              Men
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
