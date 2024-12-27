import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeDishesFromSessionStorage,
  addDish,
} from "../../../redux/store";

const ProdItem = ({ dish, navigate }) => {
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addDish(product));
  };

  return (
    <li
      className="product__item"
      onClick={() => {
        navigate({ link: `dishes/${dish.name}` });
      }}
    >
      <Image
        className="product__item__img"
        src={dish.image}
        alt="404"
        width={296}
        height={184}
      />
      <p className="product__item__name">{dish.name}</p>
      <p className="product__item__price">{dish.price} $</p>
      <p className="product__item__description">{dish.description}</p>
      <button
        className="product__item__buy"
        onClick={(e) => {
          e.stopPropagation();
          addProduct(dish);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default ProdItem;
