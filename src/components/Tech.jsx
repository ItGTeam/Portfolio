import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
       <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
        Technologies that I have worked with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Technologies.
        </h2>
      </motion.div>

      <div className="flex mt-32 flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
