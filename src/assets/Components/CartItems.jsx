function CartItem({ meal, handleRemoveFromCart, handleAddToCart }) {
    return (
        <div className="btn" key={meal.id}>

            <button onClick={() => handleRemoveFromCart(meal)}>-</button>
            <span className="number">{meal.quantity}</span>
            <button onClick={() => handleAddToCart(meal)}>+</button>
            <div className="flex-meal">
                <span className="meal">{meal.title}</span>
                <span className="price">{(meal.price * meal.quantity).toFixed(2)} €</span>
            </div>
        </div>
    );
}

export default CartItem;