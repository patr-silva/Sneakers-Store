
const PopularProductCard = ({ imgURL, name, price }) => {

  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[150px]' />
      <h3 className='mt-2 text-xl leading-normal font-semibold font-graduate text-white-500'>
        {name}
      </h3>
      <p className='mt-3 font-semibold font-graduate text-green-success text-xl leading-3'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
