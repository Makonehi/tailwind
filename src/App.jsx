import './App.css';
import "./index.css"
import "./output.css"
import "bootstrap/dist/css/bootstrap.min.css"
import bitman1 from "./Photo/bitman1.png"
import bitman2 from "./Photo/bitman2.png"
import bitman3 from "./Photo/bitman3.png"
import facebook from "./Photo/facebook.png"
import twiter from "./Photo/twiter.png"
import google from "./Photo/google.png"

import element_text from './Photo/element_text.png'

function App() {

  return (
      <>
          <div className="p-0 w-sizeboxx mx-auto flex flex-col justify-center items-center">
            <header className="bg-cover bg-no-repeat bg-center  w-auto h-auto bg-fon">
                <div className="w-sizeboxx d-flex justify-content-center font-medium">
                  <p className="text-white  text-size-text mt-10 ">KONSTRU
                      <img className="img w-text-header-x h-text-header-y inline-block align-middle mb-1"  src={element_text} alt=""/>
                      T
                  </p>
                </div>
                <h1 className="mt-96 text-text-h text-white text-center mb-0">PARTNER WITH KONSTUCT</h1>
                <p className="text-white text-center text-lg">An award-winning construction management firm</p>
                <p className="text-white text-center mt-56 mb-0 text-sm">SCROLL DOWN</p>
            </header>
            <main className="w-sizeboxx">
                <div className="flex h-20 w-sizeboxx pt-7">
                    <div className="ml-ml-logo font-extrabold">
                        <p className="text-black  text-size-text font-extrabold">KONSTRU
                            <img className="img w-text-header-x h-text-header-y inline-block align-middle mb-1"
                                 src={element_text} alt=""/>
                            T</p>

                    </div>
                    <div className="space-x-16 ml-ml-link">
                        <a className="mr-4 text-decoration-none font-family-OpenSans text-cl text-lg font-font-family cursor-pointer">HOME</a>
                        <a className="mr-4 text-decoration-none font-font-family cursor-pointer">ABOUT</a>
                        <a className="mr-4 text-decoration-none text-cl text-lg font-font-family cursor-pointer">SERVICES</a>
                        <a className="mr-4 text-decoration-none text-cl text-lg font-font-family cursor-pointer">WORK</a>
                        <a className="mr-4 text-decoration-none text-cl text-lg font-font-family cursor-pointer">CONTACT</a>
                    </div>
                </div>
                <hr className="w-sizeboxx"/>

                <div className="container m-w-80 mt-20">
                    <h5 className="text-center">OUR STORY</h5>
                    <hr className="w-20 bg-blue-800 border-t-2 m-auto"/>
                    <div className="flex justify-between mt-24">
                      <div className="w-96">
                          <p className="font-font-family text-xl">Founded in 2011 by John Mathew Smith,
                               <span className="text-blue-600"> Konstruct </span>
                               has become the number one construction management firm
                          </p>
                          <p className="font-font-family text-cl">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                          </p>
                      </div>
                        <div className=" flex space-x-20">
                        <h3 className="bg-icon-1 bg-cover h-customs w-custom pt-2.5 pl-2.5 pb-1rem flex flex-col items-start">
                            <span className="">WE</span>
                            <span>PLAN</span>
                        </h3>
                            <h3 className="bg-icon-2 bg-cover h-customs w-custom pt-2.5 pl-2.5 pb-1rem flex flex-col items-start">
                                <span className="">WE</span>
                                <span>MANAGE</span>
                            </h3>
                            <h3 className="bg-icon-3 bg-cover h-customs w-custom pt-2.5 pl-2.5 pb-1rem flex flex-col items-start">
                                <span className="">WE</span>
                                <span>BUILD</span>
                            </h3>
                        </div>
                    </div>
                    <div className="flex mt-36 space-x-52">
                        <div>
                          <h4 className="">OUR CAPABILITIES</h4>
                          <hr className="w-16 border-t-2 border-button"/>
                        </div>
                        <p className="w-main-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                        </p>
                        <button className="w-40 h-11 bg-button text-white">ALL SERVICES</button>
                    </div>
                    <div className="flex space-x-24 mt-20">
                        <div className="border border-neutral-800 pt-12 pl-8 w-cart-main-x h-cart-main-y">
                            <img className="h-20" src={bitman1} alt=""/>
                            <h4 className="mt-6 w-80">PROJECT AND CONSTRUCTION MANAGEMENT</h4>
                            <p className="w-72">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </div>
                        <div className="border border-neutral-800 pt-12 pl-8 w-cart-main-x h-cart-main-y">
                            <img className="h-20" src={bitman2} alt=""/>
                            <h4 className="mt-6">STRUCTURE AUDIT AND MAINTENANCE</h4>
                            <p className="w-72">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </div>
                        <div className="border border-neutral-800 pt-12 pl-8 w-cart-main-x h-cart-main-y">
                            <img className="h-20" src={bitman3} alt=""/>
                            <h4 className="mt-6 w-80">FACTORY CONSTRUCTION AND MODELING</h4>
                            <p className="w-72">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="mt-28 w-sizeboxx">

                <div className="bg-fon-footer bg-cover bg-no-repeat w-sizeboxx h-footer-h flex justify-center items-center">
                    <div className="w-footer-title h-auto">
                        <h3 className="text-center">Want to build something amazing?</h3>
                        <button className="ml-14 mt-9 w-40 h-11 bg-button text-white">GET IN TOUCH</button>
                    </div>
                </div>

                <div className="w-sizeboxx h-28 flex space-x-56 justify-center items-center bg-footer-reg">
                    <div>
                        <h4 className="text-white">Newsletter Signup</h4>
                    </div>
                    <div>
                        <input className="w-64 h-10 outline-none" type="email" placeholder="Email" min="5" max="20"/>
                        <button type="submit" className="w-custom h-10 text-white bg-button">SIGNUP</button>
                    </div>
                </div>

                <div className="w-sizeboxx h-60 flex justify-center items-center bg-footer-opis text-white space-x-28 bg-cover">
                    <div>
                        <h6>COMPANY</h6>
                        <p className="text-white  text-size-text  ">KONSTRU
                            <img className="img w-text-header-x h-text-header-y inline-block align-middle mb-1"
                                 src={element_text} alt=""/>
                            T
                        </p>
                        <p className="w-64">Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
                        </p>

                    </div>
                    <div className="flex flex-col bg-cover">
                        <p>LINKS</p>
                        <a className="text-white no-underline" href="">HOME</a>
                        <a className="text-white no-underline" href="">ABOUT</a>
                        <a className="text-white no-underline" href="">SERVICES</a>
                        <a className="text-white no-underline" href="">PROJECT</a>
                        <a className="text-white no-underline" href="">CONTACT US</a>
                    </div>
                    <div className="flex flex-col">
                        <a className="text-white no-underline" href="">FAQ</a>
                        <a className="text-white no-underline" href="">TERMS</a>
                        <a className="text-white no-underline" href="">CAREERS</a>
                    </div>
                    <div className="flex flex-col no-underline">
                        <a className="text-white no-underline" href="">BLOG</a>
                        <a className="text-white no-underline" href="">PARTNERS</a>
                        <a className="text-white no-underline" href="">NEWS</a>
                    </div>
                    <div>
                        <p>CONTACT US</p>
                        <p className="w-36">213 Baker Street Oriel City Kounty 7000 KNW, Kountry Name</p>
                        <p>+23 994 233 4022</p>
                        <a className="text-white no-underline" href="">info@konstruct.com</a>
                    </div>
                    <div className="flex space-x-5">
                        <img src={facebook} alt="facebook"/>
                        <img src={twiter} alt="twiter"/>
                        <img src={google} alt="google"/>
                    </div>
                </div>
                <div className="bg-footer-reg w-sizeboxx h-16 flex justify-center items-center">
                    <p className="text-white m-0">© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
                </div>

            </footer>
          </div>

      </>
  );
}

export default App;
