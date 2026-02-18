import { Link } from "react-router-dom";
import AnimateLights from "../../components/AnimateLights/AnimateLights";
import "./Register.css";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function Register() {
  return (
    <section className="register-section d-flex align-items-center justify-content-center">
      <AnimateLights />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="register-card p-4 p-md-5">
              <h2 className="text-center mb-4 fw-bold">Crear Cuenta</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Nombres y Apellidos
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    placeholder="Ingresa tus nombres y apellidos"
                  />
                  <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    placeholder="Ingresa tu correo electrónico"
                  />
                </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Teléfono
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    required
                    placeholder="Ingresa tu número de teléfono"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    required
                    placeholder="Ingresa tu fecha de nacimiento"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    required
                    placeholder="Ingresa tu departamento o ciudad"
                  />
                </div>
                <ButtonSubmit text="Registrarse" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
