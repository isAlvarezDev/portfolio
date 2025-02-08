import { getImageUrl } from "../../../../utils";
import { motion } from "framer-motion";
import "./HeroImage.css";
export const HeroImage = () => {
  return (
    <motion.img
      src={getImageUrl("hero/heroImage.jpg")}
      alt="Isaac Alvarez Image"
      className="hero-image"
      initial={{ y: 0 }}
      animate={{ y: 10 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
