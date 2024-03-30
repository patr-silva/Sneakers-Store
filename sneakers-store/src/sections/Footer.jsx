import { heroLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex items-start justify-between gap-20 flex-wrap mx-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img src={heroLogo} alt='logo' width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-graduate text-white-400 sm:max-w-sm'>
            {" "}
            Follow our social media to check our new arrivals.
          </p>
          <div className='flex items-center gap-5 mt-4'>
            {socialMedia.map((elem, index) => {
              return (
                <div
                  className='flex justify-center items-center w-12 h-12'
                  key={index}
                >
                  <img src={elem.src} alt={elem.alt} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-1 justify-evenly lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((elem, index) => {
            return (
              <div key={index}>
                <h4 className='font-graduate text-2xl leading-normal font-medium mb-6 text-green-success'>
                  {elem.title}
                </h4>
                <ul>
                  {elem.links.map((link, index) => {
                    return (
                      <li
                        key={index}
                        className='mt-3 text-white-400 hover:text-slate-gray'
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-graduate cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
