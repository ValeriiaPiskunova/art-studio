import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import services from "@/data/services.json";
import "./ServicesList.scss";

const ServicesList = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="services-list-container">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="service-item"
          whileHover={{ scale: 1.02 }}
        >
          <div
            className="service__title-container"
            onClick={() => toggleDescription(index)}
          >
            <h2 className="service__title">{service.title}</h2>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                className="service__description-container"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="service__description">
                  {service.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
