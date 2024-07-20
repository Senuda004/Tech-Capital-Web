"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-30 md:pt-50 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:flex-row xl:flex-row md:flex-row lg:gap-8 xl:gap-30 flex-col">
            <div className=" md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Solid - A Complete SaaS Web Template
              </h4> */}
              <div className="flex gap-3">
                {/* <img src="/images/logo/logo-2.svg" alt="LOGO" className="w-[22vh] relative bottom-6"/> */}
                <h1 className="mb-5 pr text-3xl font-bold text-black dark:text-white xl:text-hero tracking-wide text-center mt-5">
                  Tech Capital Managed Services {"   "}
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    (Pvt) Ltd
                  </span>
                </h1>
              </div>
                
              <p className=" text-justify leading-8 px-3">
                Tech Capital Managed Services (Pvt) Ltd provides an extensive array of managed 
                services encompassing IT infrastructure management, maintenance and monitoring, 
                support for systems and applications, call center services, and resource 
                augmentation. <br /><br />Serving clients in both Sri Lanka and the UK, Tech Capital is 
                dedicated to delivering top-notch services to meet the needs of our valued clients.
              </p>

              <div className="mt-20">
                {/* <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Hi
                    </button>
                  </div>
                </form> */}

                {/* <p className="mt-5 text-black dark:text-white">
                  Try for free no credit card required.
                </p> */}
              </div>
            </div>

            <div className="animate_right w-full md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[200/200] w-[85%] m-auto">
                  <Image
                    className="shadow-solid-l dark:hidden rounded-2xl"
                    src="/images/hero/hero-new2.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block rounded-2xl"
                    src="/images/hero/hero-new2.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
