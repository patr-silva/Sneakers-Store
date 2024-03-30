import { motion } from "framer-motion";

import { shoe8 } from "../assets/images";
import Countdown from "../components/Countdown";

const ComingSoon = () => {
  return (
    <motion.section
      id='coming-soon'
      className='max-container max-sm:mt-12 pt-[10%] mb-[15%]'
      initial={{
        opacity: 0,

        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 2,
        },
      }}
    >
      <div className='relative flex flex-col justify-center items-center w-full max-xl:padding-x'>
        <h1 className='text-8xl font-bold text-white-500 font-graduate'>
          Coming <span className='text-green-success'> Soon... </span>
        </h1>
        <div className='flex flex-1 justify-center items-center mt-6'>
          <img
            src={shoe8}
            alt='product detail'
            width={270}
            height={222}
            className='object-contain'
          />
        </div>
        <Countdown />
      </div>
    </motion.section>
  );
};

export default ComingSoon;
