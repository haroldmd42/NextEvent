import { Link } from "react-router-dom";
import AnimateLights from "../../components/AnimateLights/AnimateLights";
import "./Login.css";
import ButtonSubmit from "../../components/ButtonSubmit/ButtonSubmit";

export default function Login() {
  return (
    <section className="login-section d-flex align-items-center justify-content-center">
      
      <AnimateLights />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">

            <div className="login-card p-4 p-md-5">

              <h2 className="text-center mb-4 fw-bold">
                Iniciar Sesión
              </h2>

              <form>

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

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    required
                    placeholder="Ingresa tu contraseña"
                  />
                </div>

                <ButtonSubmit text="Iniciar Sesión" />

              </form>

              <p className="mt-4 text-center small">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="register-link">
                  Regístrate aquí
                </Link>
              </p>

            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
