import { Link } from "react-router-dom";
import AnimateLights from "../AnimateLights/AnimateLights";
import "./CardEventList.css";

const stateStyles = {
  Activo: "chip chip-active",
  "En Progreso": "chip chip-progress",
  Cancelado: "chip chip-cancelled",
  Aplazado: "chip chip-postponed",
  Finalizado: "chip chip-finished",
};

export default function CardEventList({
  title,
  date,
  city,
  location,
  onView,
  image,
  badge,
  artistsAndGuests,
  state,
  ticketLink,
}) {
  return (
    <div className="event-card-modern">
      {/* HEADER */}
      <div className="event-header">
        <div className="event-avatar">
          {image ? (
            <img src={image} alt={title} />
          ) : (
            <span className="avatar-placeholder">{title?.charAt(0)}</span>
          )}
        </div>

        <div className="event-title-wrapper">
          <h5 className="event-title">
            {title}
            {badge && <span className="event-badge">{badge}</span>}
          </h5>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="event-divider" />

      {/* BODY */}
      <div className="event-body">
        <p className="event-info">
          {" "}
          <i className="fa-solid fa-calendar"></i> {date}
        </p>
        <p className="event-info">
          {" "}
          <i className="fa-solid fa-building"></i> {city}
        </p>
        <p className="event-info">
          {" "}
          <i className="fa-solid fa-location-dot"></i> {location}
        </p>
        <p className="event-artists-ticketLink">{ticketLink}</p>
        <p className="event-artists-and-guests">{artistsAndGuests}</p>
        <p className={stateStyles[state] || "chip"}>{state}</p>

        <button className="btn btn-main btn-sm mt-3 w-100" onClick={onView}>
          Ver evento
        </button>
      </div>
    </div>
  );
}
