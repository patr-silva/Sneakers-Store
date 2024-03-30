import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import NewArrivals from "./sections/NewArrivals";
import PopularProducts from "./sections/PopularProducts";
import ComingSoon from "./sections/ComingSoon";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className='relative'>
      <Nav />
      <section className='padding'>
        <Hero />
      </section>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <NewArrivals />
      </section>
      <section className='padding'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <ComingSoon />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
      </section>
      <section className='padding padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  );
}

export default App;
