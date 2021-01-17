import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  const handleClose = (e) => {
    if (e.target.classList.contains("modal")) setSelectedImg(null);
  };

  return (
    <motion.div
      className="modal"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <motion.img
        src={selectedImg}
        alt="modal enlarged"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      />
    </motion.div>
  );
};

export default Modal;
