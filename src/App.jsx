//IMPORT REACT//
import axios from "axios";
import { useState, useEffect } from "react";
import './App.css'

//IMPORT COMPONENTS //
import Header from "./assets/Components/Header";
import Section from "./assets/Components/Section";
import Title from "./assets/Components/Title";
import MenuElement from "./assets/Components/MenuElement";
import CartItem from "./assets/Components/CartItems";
import Total from "./assets/Components/Total";

function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://site--exo-back-end-deliveroo--l75gkv7mvq6s.code.run/");
        console.log(response.data);
        //console.log(setData);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (meal) => {
    const newCart = [...cart];
    const found = newCart.find((elem) => elem.id === meal.id);

    if (found) {
      found.quantity++;
    } else {
      newCart.push({ ...meal, quantity: 1 });
    }

    setCart(newCart);
  };

  const handleRemoveFromCart = (meal) => {
    const newCart = [...cart];
    const found = newCart.find((elem) => elem.id === meal.id);

    if (found.quantity === 1) {
      const index = newCart.indexOf(found);
      newCart.splice(index, 1);
    } else {
      found.quantity--;
    }

    setCart(newCart);
  };

  const deliveryFees = 2.5;

  return isLoading ? (
    <p>"Loading..."</p>
  ) : (

    <>

      <div className="container">
        <Header />
      </div>
      <div className="border"></div>
      <div className="container">
        <Section
          title={data.restaurant.name}
          description={data.restaurant.description}
          picture={data.restaurant.picture}
        />
        <main>
          <div className="container main-container">
            <section className="part-left">
              {data.categories.map((category, index) => {
                if (category.meals.length !== 0) {
                  return (
                    <div key={index}>
                      <Title title={category.name} />
                      <div className="articles-container">
                        {category.meals.map((meal) => (
                          <MenuElement
                            key={meal.id}
                            meal={meal}
                            handleAddToCart={handleAddToCart}
                          />
                        ))}
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </section>
            <section className="part-right">
              <aside>
                {cart.length === 0 ? (
                  <p className="cart-p">Panier vide</p>
                ) : (
                  <div>
                    {cart.map((meal) => (
                      <CartItem
                        key={meal.id}
                        meal={meal}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleAddToCart={handleAddToCart}
                      />
                    ))}
                    <Total cart={cart} deliveryFees={deliveryFees} />
                    <div className="btn-cart">
                      <button onClick={() => setCart([])}>Vider le panier</button>
                    </div>
                  </div>
                )}
              </aside>
            </section>
          </div>
        </main>

      </div>


    </>
  )
}

export default App
