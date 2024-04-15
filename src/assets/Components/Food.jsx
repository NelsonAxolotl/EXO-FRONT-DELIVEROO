function Food({ title, description, price, popular, picture }) {
    return (
        <div className="food">
            <h3>{title}</h3>
            <p className="description">{description}</p>
            <div className="spany">
                <span>{price} €</span>
                {popular && <span className="orange">Populaire</span>}
            </div>
            {picture && <img src={picture} alt={title} />}
        </div>
    );
}

export default Food;