import React from 'react';

const FooterLinks = [
  { title: "About Us" },
  { title: "Contact Us" },
  { title: "Privacy Policy" },
  { title: "Terms of Service" },
  { title: "FAQ" }
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className='py-8 px-4'>
            <a 
              href='#' 
              className='text-primary font-semibold tracking-wider text-2xl uppercase sm:text-3xl'
            >
              SHOP_D
            </a>
            <p className='text-gray-500 mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa non itaque quos tenetur numquam fugiat dolores at. Eveniet vero ad asperiores, illum suscipit voluptas autem assumenda harum aspernatur facere at?
            </p>
            <p className='text-gray-500 mt-4'>Made with ❤️ by Doummar Alzahabiii</p>
            <a 
              href='#' 
              target='_blank' 
              rel='noopener noreferrer' 
              className='inline-block bg-primary text-white py-2 px-4 mt-4 text-sm rounded-full'
            >
              Like This?
            </a>
          </div>

          {/* Right Column */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3  md:pl-10 gap-4'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left  mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map((link, index) => (
                  <li key={index} className='py-1 text-sm text-gray-500 hover:text-primary duration-300'>
                    <a href='#'>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          
        
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left  mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {FooterLinks.map((link, index) => (
                  <li key={index} className='py-1 text-sm text-gray-500 hover:text-primary duration-300'>
                    <a href='#'>{link.title}</a>
                  </li>
                ))}
              </ul>
      
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
