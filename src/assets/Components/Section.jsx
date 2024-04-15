const Section = ({ title, description, picture }) => {

    return (

        <div className="section">
            <div className="section-text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className="section-pic">
                <img src={picture} alt="food" />
            </div>

        </div>
    )
}
export default Section;