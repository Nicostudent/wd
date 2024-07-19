type CardProps = {
  listItems: string[];
  title: string;
};

const Card = ({ listItems, title}: CardProps) => {
  return (
    <div className="border-4 rounded-lg p-4 ">
      <span className="flex justify-center py-2 font-cormorant text-2xl">{title}</span>
      <ul className="list-disc pl-2 font-Font-1 text-lg">
        {listItems &&
          listItems.map((name: string, i: number) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  );
};

export const Cards = ({row}:{row?: boolean}) => {
  return (
    <div className={`flex gap-2 ${row ? "flex-row" : "flex-col"}`}>
      <Card
        title="Plan Basico"
        listItems={[
          "Precio: $50/mes",
          "Diseño Personalizado",
          "Gestión de Invitados",
          "Galería de Fotos",
          "Agenda del Evento",
          "Mapa de Ubicación",
        ]}
      />
      <Card
        title="Plan Estándar"
        listItems={[
          "Precio: $75/mes",
          "Todo el plan básico",
          "Dominio Personalizado",
          "Registro de Regalos",
          "Soporte por Email",
          "Plantillas Exclusivas",
        ]}
      />
      <Card
        title="Plan Premium"
        listItems={[
          "Precio: $100/mes",
          "Todo el plan Estándar",
          "Soporte Prioritario 24/7",
          "Diseño Personalizado Avanzado",
          "Integración con Redes Sociales",
          "Optimización SEO",
        ]}
      />
    </div>
  );
};
