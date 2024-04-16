function Total({ cart, deliveryFees }) {

    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const meal = cart[i];
        subTotal = subTotal + meal.price * meal.quantity;
    }
    const total = subTotal + deliveryFees;

    return (
        <div className="total">
            <div className="flex-total">
                <p>Sous-total : </p> <span>{subTotal.toFixed(2)} €</span>
            </div>
            <div className="flex-total">
                <p>Frais de livraison : </p><span>{deliveryFees.toFixed(2)} €</span>
            </div>
            <div className="flex-total">
                <p>Total : </p><span>{total.toFixed(2)} €</span>
            </div>
        </div >
    );
}

export default Total;