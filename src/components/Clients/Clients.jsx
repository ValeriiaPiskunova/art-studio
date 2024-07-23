import React from "react";
import clientsData from "../../data/clients.json";
import "./Clients.scss";

const Clients = () => {
  return (
    <div className="clients-container">
      {clientsData.map((client, index) => (
        <div key={index} className="client-card">
          <img
            src={client.image}
            alt={client.alt}
            className="client-card__image"
            loading="lazy"
          />
          <h3 className="client-card__name">{client.name}</h3>
          <p className="client-card__city">{client.city}</p>
          <p className="client-card__text">{client.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Clients;
