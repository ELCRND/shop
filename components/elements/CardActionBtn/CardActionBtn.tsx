import { AnimatePresence, motion } from "framer-motion";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import { ActionBtn } from "@/types/common";

const CardActionBtn = ({
  text,
  actionClass,
  callback,
  withTooltip = true,
}: ActionBtn) => {
  const [open, setOpen] = useState(false);
  const [tooltipLeft, setTooltipLeft] = useState(0);
  const showTooltip = () => setOpen(true);
  const hideTooltip = () => setOpen(false);
  const tooltipRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (open && withTooltip) {
      setTooltipLeft(tooltipRef.current.clientWidth);
    }
  }, [open, withTooltip]);
  return (
    <div className="relative">
      <button
        className={`w-8 h-8 block relative z-10 ${actionClass}`}
        onClick={callback}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      ></button>
      {withTooltip && (
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-max p-3 rounded-xl bg-[#3D4555] absolute -top-2 z-10"
              style={{ left: `-${tooltipLeft + 2}px` }}
              ref={tooltipRef}
            >
              <Tooltip text={text} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default CardActionBtn;
