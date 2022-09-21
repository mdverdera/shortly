import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
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
    </>
  );
};

export default Home;
