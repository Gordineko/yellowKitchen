import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeDishesFromSessionStorage,
  addDish,
} from "../../../redux/store";

const Curt = ({ isCurtOpen, setIsCurtOpen }) => {
  const dispatch = useDispatch();
  const storageData = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(initializeDishesFromSessionStorage());
  }, [dispatch]);

  const closeClick = () => {
    setIsCurtOpen(false);
  };

  if (!isCurtOpen) {
    return null;
  }

  return (
    <div
      className="modal-overlay"
      onClick={() => {
        closeClick();
      }}
    >
      <div className="modal__curt">
        <h2>Товары</h2>
        <div className="modal__curt__list">
          {storageData.length === 0 ? (
            <p>Нет доступных товаров</p>
          ) : (
            storageData.map((product, index) => (
              <div key={index} className="modal__curt__list__item">
                <h3>{product.name}</h3>
                <p>{product.price} $.</p>
              </div>
            ))
          )}
          <button>Go to pay</button>
        </div>
      </div>
    </div>
  );
};

export default Curt;
