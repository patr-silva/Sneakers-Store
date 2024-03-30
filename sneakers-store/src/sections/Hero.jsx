import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { heroLogo } from "../assets/images";

const Hero = () => {
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);
  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  useEffect(() => {
    const animation1 = animate(count1, 11, { duration: 4 });
    const animation2 = animate(count2, 50, { duration: 4 });
    const animation3 = animate(count3, 1000, { duration: 2 });

    return animation1.stop, animation2.stop, animation3.stop;
  }, [count1, count2, count3]);
  return (
    <section className='w-full flex xl:flex-col flex-col justify-center min-h-screen'>
      <motion.div
        className='relative flex flex-col justify-center items-center w-full'
        initial={{
          opacity: 0,

          y: -150,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 2,
          },
        }}
      >
        <img src={heroLogo} alt='sneakers shop' className='mt-[-20%]' />
      </motion.div>
      <motion.div className='flex justify-center items-start flex-wrap w-full gap-16 mt-16'>
        <div>
          <motion.h1 className='text-4xl font-graduate font-bold text-green-success'>
            {rounded1}
          </motion.h1>
          <p className='leading-7 text-white-400'>Brands</p>
        </div>
        <div>
          <motion.h1 className='text-4xl font-graduate font-bold text-green-success'>
            {rounded2}
          </motion.h1>
          <p className='leading-7 text-white-400'>Models</p>
        </div>
        <div>
          <motion.h1 className='text-4xl font-graduate font-bold text-green-success'>
            {rounded3}
          </motion.h1>
          <p className='leading-7 text-white-400'>Customers</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
