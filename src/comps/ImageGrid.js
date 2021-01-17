import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="imagegrid">
      {docs?.map((doc) => (
        <motion.div
          whileHover={{ opacity: 1 }}
          layout
          className="imagegrid__wrapper"
          key={doc.id}
          onClick={() => {
            setSelectedImage(doc.url);
          }}
        >
          <motion.img
            src={doc.url}
            alt="grid image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
