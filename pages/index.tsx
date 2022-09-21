import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shortly</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="/img/favicon-32x32.png"
        />
      </Head>
      {/* Nav Container */}
      <nav className="relative container mx-auto p-6">
        {/* Flex container for all items */}
        <div className="flex items-center justify-between">
          {/* Flex container for Logo/ Menu */}
          <div className="flex items-center space-x-20">
            {/* Logo */}

            <picture>
              <img src="/img/logo.svg" alt="logo" />
            </picture>

            {/* Left Menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <Link href="#">
                <a className="text-grayishViolet hover:text-veryDarkBlue">
                  Features
                </a>
              </Link>
              <Link href="#">
                <a className="text-grayishViolet hover:text-veryDarkBlue">
                  Pricing
                </a>
              </Link>

              <Link href="#">
                <a className="text-grayishViolet hover:text-veryDarkBlue">
                  Resources
                </a>
              </Link>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="hidden items-center space-x-6 font-bold text-grayishViolet lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>

            <Link href="#">
              <a className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
                Sign Up
              </a>
            </Link>
          </div>

          {/* Hamburger Menu */}
        </div>

        {/* Mobile Menu */}
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/* Hero Container */}
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* Content Container */}
          <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <Link href="#">
                <a className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70">
                  Get Started
                </a>
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
            <picture>
              <img src="/img/illustration-working.svg" alt="working" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
