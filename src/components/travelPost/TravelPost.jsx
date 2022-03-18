import "./travelPostStyle.css";

export default function TravelPost({ trip }) {
  return (
    <div className="trip-post">
      <div>
        <img src={trip.imageUrl} className="border-5 mr-20"/>
      </div>
      <div className="trip-post-text">
        <p>
          <h4 className="inline mr-15 mb-8 fw-400"> <i className="fa-solid fa-location-dot red mr-5"></i> {trip.location} </h4>
          <a href="#" className="gray-text underline small-text">
            View on Google Maps{" "}
          </a>
        </p>
        <h2 className="mb-20 fw-700"> {trip.title} </h2>
        <p className="small-text fw-700 mb-8"> {trip.startDate} - {trip.endDate} </p>
        <p className="lh-150"> {trip.description} </p>
      </div>
    </div>
  );
}
