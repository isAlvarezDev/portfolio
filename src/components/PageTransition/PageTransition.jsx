import { AnimatePresence, motion } from "framer-motion";
import './Transition.css'

export const PageTransition = ({ children }) => {
  return (
    <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="transition"
        ></motion.div>
      {children}
    </AnimatePresence>
  );
};
