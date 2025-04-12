import React,{useState} from "react";

//TourCard renders individual tour details
const TourCard = ({id, name, info, price, image}) => {
    //local state to manage the read more/less functionality
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour-card"> 
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <h5>{price}</h5>

            {/*Show full description if readMore is true*/}
            <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
            {/*Button to toggle readMore state*/}
            <button onClick={() => setReadMore(!readMore)}>
                {readMore ? "Show Less" : "Read More"}
            </button>

            {/*Button to remove the tour card*/}
            <button className="delete-btn" onClick={() =>
                console.log(`Remove tour with id: ${id}`)}>
                Not Interested
            </button>
        </article>
    )
}

//Exporting TourCard component
export default TourCard;