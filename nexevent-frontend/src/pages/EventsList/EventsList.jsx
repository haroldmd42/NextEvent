import AnimateLights from "../../components/AnimateLights/AnimateLights";
import CardEventList from "../../components/CardEventList/CardEventList";
import { useState } from "react";
import EventModal from "../../components/EventModal/EventModal";

export default function EventsList() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleOpen = (eventData) =>{
    setSelectedEvent(eventData);
  }
  const handleClose = () => {
    setSelectedEvent(null)
  }

  return (
    <section className="list-section position-relative py-5">
      <AnimateLights />
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h2 className="mb-4 fw-bold text-center">Próximos Eventos</h2>

        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardEventList
              title="Concierto de Rock"
              date="25 de diciembre de 2024"
              location="Auditorio Nacional"
              city="Cali"
              image={`${import.meta.env.BASE_URL}rock.jpg`}
              state={"Activo"}
              
              onView={() =>
                handleOpen({
                  image:`${import.meta.env.BASE_URL}rock.jpg`,
                  title: "Concierto de Rock",
                  date: "25 de diciembre de 2024",
                  location: "Auditorio Nacional",
                  city: "Cali",
                  state: "Activo",
                  artistsAndGuests: "Banda XYZ, Artista Invitado ABC",
                  ticketLink: "https://www.ticketmaster.co/",
                })
              }
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardEventList
              title="Feria de Tecnología"
              date="10 de enero de 2025"
              location="Centro de Convenciones"
              city="Cali"
              state={"Cancelado"}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardEventList
              title="Festival de Cine"
              date="5 de febrero de 2025"
              location="Cinepolis Plaza"
              city="Cali"
              state={"En Progreso"}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardEventList
              title="Festival de Cine"
              date="5 de febrero de 2025"
              location="Cinepolis Plaza"
              city="Cali"
              state={"Finalizado"}
            />
          </div>
           <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <CardEventList
              title="Festival de Cine"
              date="5 de febrero de 2025"
              location="Cinepolis Plaza"
              city="Cali"
              state={"Aplazado"}
            />
          </div>
        </div>
      </div>
      <EventModal
      isOpen={!!selectedEvent}
      onClose={handleClose}
      event={selectedEvent}
      />
    </section>
  );
}
