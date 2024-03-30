import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl text-center font-palanquin font-bold'>
        What Our <span className='text-coral-red'>Customers </span>Say?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>

      <div className='mt-24 flex justify-evenly items-center flex-1 max-lg:flex-col gap-14'>
        {reviews.map((elem, index) => {
          return <ReviewCard key={index} {...elem}/>;
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
