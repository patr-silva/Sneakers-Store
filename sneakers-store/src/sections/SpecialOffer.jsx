import { motion } from "framer-motion";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section
      className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container pt-[8%] mb-[15%]'
      id='special-offers'
    >
      <motion.div
        className='flex-1'
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
      >
        <img
          src={offer}
          alt='special offer'
          width={473}
          height={387}
          className='object-contain'
        />
      </motion.div>

      <motion.div
        className='flex flex-1 flex-col'
        initial={{
          opacity: 0,
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <h2 className='font-graduate capitalize text-4xl lg:max-w-lg font-bold text-white-500'>
          <span className='text-green-success'> Special </span>
          Offers
        </h2>

        <p className='mt-6 lg:max-w-lg font-palanquint text-white-400'>
          To have access to our special offers, please subscribe to our
          newsletter.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <a href='#newsletter'>
            <Button label='Subscribe' />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffer;
