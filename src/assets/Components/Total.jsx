function Total({ cart, deliveryFees }) {

    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const meal = cart[i];
        subTotal = subTotal + meal.price * meal.quantity;
    }
    const total = subTotal + deliveryFees;

    return (
        <div className="total">
            <span>Sous-total : {subTotal.toFixed(2)} €</span>
            <span>Frais de livraison : {deliveryFees.toFixed(2)} €</span>
            <p>Total : {total.toFixed(2)} €</p>
        </div>
    );
}

export default Total;