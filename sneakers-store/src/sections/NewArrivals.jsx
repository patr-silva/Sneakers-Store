import { useState } from "react";
import { motion } from "framer-motion";


import ShoeCard from "../components/ShoeCard";
import { shoes } from "../constants/index";
import { bigShoe1 } from "../assets/images";

const NewArrivals = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section className='flex xl:flex-row flex-col justify-center min-h-screen gap-5 max-container xl:mt-[-25%] pt-[5%] pb-[5%]'>
      <motion.div
        className='relative xl:w-2/5 flex flex-col justify-center items-start w-full gap-5'
        initial={{
          opacity: 0,

          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <h1 className='mt-7 text-8xl max-sm:text-[52px] max-sm:leading-[82px] font-bold relative z-10 mb-14 text-white-500 max-container'>
          <span className='text-green-success inline-block mt-3'>New</span>
          <br />
          <span className=' xl:whitespace-nowrap relative z-10 pr-10'>
            Arrivals
          </span>
        </h1>
     
      </motion.div>
      <motion.div
        className='relative flex-1 flex justify-center items-center'
        id='new-arrivals'
        initial={{
          opacity: 0,

          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 2,
          },
        }}
        viewport={{ once: true }}
      >
        <img
          src={bigShoeImg}
          alt='sneaker'
          width={510}
          height={400}
          className='object-contain relative z-5 mt-5'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[23%] max-sm:px-6'>
          {shoes.map((elem, index) => {
            return (
              <div key={index}>
                <ShoeCard
                  imgURL={elem}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImg(shoe);
                  }}
                  bigShoeImg={bigShoeImg}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default NewArrivals;
