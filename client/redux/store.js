import { configureStore, createSlice } from "@reduxjs/toolkit";

// Слайс для хранения данных блюд
const dishesSlice = createSlice({
  name: "dishes",
  initialState: [],
  reducers: {
    // Действие для установки данных блюд
    setDishes: (state, action) => action.payload,
    // Действие для добавления продукта в корзину
    addDish: (state, action) => {
      const updatedState = [...state, action.payload];
      // Обновляем sessionStorage
      window.sessionStorage.setItem("products", JSON.stringify(updatedState));
      return updatedState;
    },
    // Действие для инициализации данных из sessionStorage
    initializeDishesFromSessionStorage: (state) => {
      const storedDishes = JSON.parse(window.sessionStorage.getItem("products") || "[]");
      return storedDishes;
    },
  },
});

export const { setDishes, addDish, initializeDishesFromSessionStorage } = dishesSlice.actions;

// Настройка хранилища Redux
const store = configureStore({
  reducer: {
    dishes: dishesSlice.reducer,
  },
});

export default store;

