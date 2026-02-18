import "./Home.css";
import heroImg from "../../assets/fondo.png";
import AnimatedLights from "../../components//AnimateLights/AnimateLights";


export default function Home() {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <AnimatedLights/>

      <div className="overlay"></div>

      <div className="hero-content container">
        <h1 className="display-4 fw-bold">
          Vive la experiencia <span className="gradient-text">NexEvent</span>
        </h1>

        <p className="lead mt-3">
          Descubre, organiza y disfruta los mejores eventos en un solo lugar.
        </p>

        <div className="mt-4">
          <button className="btn btn-main btn-lg me-3 text-white">
            Explorar Eventos
          </button>

          <button className="btn  btn-lg text-dark">
            Crear Evento
          </button>
        </div>
      </div>
    </section>
  );
}
