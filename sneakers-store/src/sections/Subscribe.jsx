import { motion } from "framer-motion";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <motion.section
    initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      id='newsletter'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl text-center font-graduate text-white-500 font-bold'>
        Subscribe to our{" "}
        <span className='text-green-success font-graduate'> Newsletter </span>{" "}
        and get{" "}
        <span className='text-green-success font-graduate'>Special Offers</span>
      </h3>

      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='your email' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='subscribe' />
        </div>
      </div>
    </motion.section>
  );
};

export default Subscribe;
