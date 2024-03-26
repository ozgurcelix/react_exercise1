import { useState } from 'react'
import { tour } from "./data.js";
import './App.css';

export default function Profile() {
  const [tourList, setTourList] = useState(tour);
  const [isExpanded, setIsExpanded] = useState([]);
  

  function handleMoreClick(id) {
    setIsExpanded((prevState) => {
      const isTourExpended = prevState.includes(id);
      return isTourExpended
        ? prevState.filter((a) => a !== id)
        : [...prevState, id];
    });
  }

  const renderTourList = () => {
    return tourList.map((tour) => (
      <section className="gallery">
        <img src={tour.image} alt={tour.price} />
        <h2 className="tag-name">
          <b>{tour.name} </b>
        </h2>
        <div className="info">
          {isExpanded.includes(tour.id)
            ? tour.info
            : tour.info.substring(0, 250) + "..."}
          <a onClick={() => handleMoreClick(tour.id)}>
            {isExpanded.includes(tour.id) ? "Read less" : "Read more"}
          </a>
        </div>
        <button
          className="button button1"
          onClick={() => setTourList(tourList.filter((a) => a.id !== tour.id))}
        >
          Not İnterested
        </button>
      </section>
    ));
  };

  return (
    <section className="outbackground">
      <h1>Our Tours</h1>
      <div className="profile-content">
        <ul>{renderTourList()}</ul>
      </div>
    </section>
  );
}
