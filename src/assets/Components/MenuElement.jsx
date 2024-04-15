import Food from "./Food";

function MenuElement({ meal, handleAddToCart }) {
    return (
        <article key={meal.id} onClick={() => handleAddToCart(meal)}>
            <Food
                title={meal.title}
                description={meal.description}
                price={meal.price}
                popular={meal.popular}
            />
            {meal.picture && <img src={meal.picture} alt={meal.title} />}

        </article>
    );
}

export default MenuElement;