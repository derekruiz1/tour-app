import React,{useEffect, useState} from "react";
import TourCard from "./TourCard";

//Gallery is responsible for fetching the list of tours and rendering the list

const Gallery = ({tours, setTours, onRemove}) => {
    //local state to manage the loading state
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //Function to fetch tours from the API
    const fetchTours = async () => {
        try {
        const response = await fetch("https://course-api.com/react-tours-project");
        //Map the API to only the field we need

        const trimmed = data.results.map((tour) => ({
           id: tour.id,
           name: tour.name,
           info: tour.info,
           price: tour.price,
           image: tour.image,
        }));
        setTours(trimmed);
        setLoading(false);
} catch (error) {
        setError(true);
        setLoading(false);
        }
}
        

//run the fetchTours function when the component mounts
useEffect(() => {
    fetchTours();
}, []);

//Render the loading state
if (loading) {
    return <h2>Loading...</h2>;
};
//Render the error state
if (error) {
    return (
            <h2>Something went wrong...</h2>
    );
}

//Render if no tours are available
if (tours.length === 0) {
    return (
        <div>
            <h2>No tours available</h2>
            <button onClick={fetchTours}>Refresh</button>
        </div>
    )
}
//Render the list of tours

return (
    <div>
        <section className="gallery">
        {tours.map((tour) => (
            <TourCard 
            key={tour.id} 
            {...tour} 
            onRemove={onRemove} />
        ))}
        </section>
    </div>
);
}

export default Gallery;