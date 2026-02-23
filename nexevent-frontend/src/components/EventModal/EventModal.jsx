import { Link } from "react-router-dom";
import "./EventModal.css";

export default function EventModal({ isOpen, onClose, event }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          < i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-body-wrapper">
          {/* Imagen izquierda */}
          <div className="modal-image-container">
            <img
              src={event.image}
              alt={event.title}
              className="modal-image"
            />
          </div>

          {/* Texto derecha */}
          <div className="modal-info">
            <h3>{event.title}</h3>

            <p>
              <i className="fa-solid fa-calendar"></i>
              <strong> Fecha:</strong> {event.date}
            </p>

            <p>
              <i className="fa-solid fa-building"></i>
              <strong> Ciudad:</strong> {event.city}
            </p>

            <p>
              <i className="fa-solid fa-location-dot"></i>
              <strong> Lugar:</strong> {event.location}
            </p>

            <p>
              <i className="fa-solid fa-music"></i>
              <strong> Artistas:</strong> {event.artistsAndGuests}
            </p>

            <p>
              <i className="fa-solid fa-ticket"></i>
              <strong> Entradas:</strong>{" "}
              <Link to={event.ticketLink} className="text-decoration-none">
                Comprar aquí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}