"use client";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { MouseEventHandler, useCallback, useEffect, useRef } from "react";

const links = [
  { name: "Home", to: "#", id: "_1" },
  { name: "About", to: "#", id: "_2" },
  { name: "Blog", to: "#", id: "_3" },
  { name: "Contact", to: "#", id: "_4" },
];

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};
const settingsVariants = {
  closed: {
    rotate:0,
    transition:{delay:0,duration:1}
  },
  open: { 
    rotate:360,
    transition:{delay:0,duration:1} 
},
}


const Sidebar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const handleCycle: MouseEventHandler<HTMLButtonElement> = () => {
    cycleOpen?.();
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.aside
            className="bg-[#d6d6d6] text-text--text rounded-r-xl absolute top-0 z-50"
            initial={{ width: 0, height: 0 }}
            animate={{ width: 280, height: "100%" }}
            exit={{
              width: 48,
              height: 48,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="flex flex-col relative"
            >
              {links.map(({ name, to, id }) => (
                <motion.a key={id} href={to} variants={itemVariants}>
                  {name}
                </motion.a>
              ))}
              <motion.div className="absolute right-0" variants={settingsVariants} >
                <button className="_settings _content-center" onClick={handleCycle}></button>
              </motion.div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      
      <div className="absolute top-0 text-text--text">
        <button className="_settings" onClick={handleCycle}></button>
      </div>
      
    </>
  );
};

export default Sidebar;
