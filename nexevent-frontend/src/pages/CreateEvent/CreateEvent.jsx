import { Link } from "react-router-dom";
import AnimateLights from "../../components/AnimateLights/AnimateLights";
import "./CreateEvent.css";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function CreateEvent() {
  return (
    <section className="createEvent-section d-flex align-items-center justify-content-center">
      <AnimateLights />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <div className="createEvent-card p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold">Crear un evento</h2>
              <form>
                <div className="row g-3">
                  {/* Nombre */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="nameEvent" className="form-label">
                      Nombre del Evento
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nameEvent"
                      required
                      placeholder="Ingresa el nombre del evento"
                    />
                  </div>

                  {/* Tipo */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="eventType" className="form-label">
                      Tipo de Evento
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="eventType"
                      required
                      placeholder="Ingresa el tipo de evento"
                    />
                  </div>

                  {/* Ciudad */}
                  <div className="col-12 col-md-4">
                    <label htmlFor="city" className="form-label">
                      Ciudad
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      required
                      placeholder="Ingresa la ciudad"
                    />
                  </div>

                  {/* Fecha */}
                  <div className="col-12 col-md-4">
                    <label htmlFor="eventDate" className="form-label">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="eventDate"
                      required
                    />
                  </div>

                  {/* Ubicación */}
                  <div className="col-12 col-md-4">
                    <label htmlFor="location" className="form-label">
                      Ubicación
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      required
                      placeholder="Lugar del evento"
                    />
                  </div>

                  {/* Artistas (fila completa) */}
                  <div className="col-12">
                    <label htmlFor="artists" className="form-label">
                      Artistas o Invitados
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="artists"
                      required
                      placeholder="Ingresa los artistas"
                    />
                  </div>

                  {/* Botón */}
                  <div className="col-12 text-center mt-3">
                    <ButtonSubmit text="Enviar Evento" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
