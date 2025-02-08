import { AnimatePresence } from "framer-motion";
import "./Transition.css";
import { Stairs } from "./Stairs";

export const StairTransition = () => {
  return (
    <>
      <AnimatePresence mode="wait">
        <div className="stairs-wrapper">
          <Stairs />
        </div>
      </AnimatePresence>
    </>
  );
};
