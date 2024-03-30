import PopularProductCard from "../components/PopularProductCard";
import Button from "../components/Button";
import { products } from "../constants";

import { motion } from "framer-motion";

const PopularProducts = () => {
  return (
    <motion.section
      id='products'
      className='max-container max-sm:mt-12 pt-[8%] mb-[15%]'
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
      <div className='flex flex-col justify-start gap-10'>
        <h2 className='text-4xl font-bold text-white-500 font-graduate'>
          Most <span className='text-green-success'> Wanted </span> Sneakers
        </h2>
        <Button label='Shop now' fullWidth={false} />
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((elem, index) => {
          return <PopularProductCard key={index} {...elem} />;
        })}
      </div>
    </motion.section>
  );
};

export default PopularProducts;
