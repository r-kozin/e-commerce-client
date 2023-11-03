import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

const Success = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCart());
    }, []);

  return (
    <div className="success">
      <h1>Thank you for your order!</h1>
    </div>
  );
};

export default Success;
