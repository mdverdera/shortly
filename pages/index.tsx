import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const UrlSchema = Yup.object().shape({
  urlName: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please enter a valid URL."
    )
    .required("Please enter website URL."),
});

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

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

          {/* Hamburger Button Menu */}
          <button
            type="button"
            className={`${
              isOpen && "open"
            } z-40 block hamburger lg:hidden focus:outline-none`}
            onClick={toggleMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute ${
            isOpen ? "flex" : "hidden"
          } p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100 lg:hidden`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <Link href="#">
              <a className="w-full text-center">Features</a>
            </Link>
            <Link href="#">
              <a className="w-full text-center">Pricing</a>
            </Link>

            <Link href="#">
              <a className="w-full text-center">Resources</a>
            </Link>

            <Link href="#">
              <a className="w-full pt-6 border-t border-gray-400 text-center">
                Login
              </a>
            </Link>

            <Link href="#">
              <a className="w-full py-3 text-center rounded-full bg-cyan">
                Sign Up
              </a>
            </Link>
          </div>
        </div>
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

      {/* Shorten Section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* Shorten Container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Form - todo convert to Formik*/}
          <Formik
            initialValues={{
              urlName: "",
            }}
            validateOnChange={false}
            validateOnBlur={false}
            validationSchema={UrlSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
                <Field
                  name="urlName"
                  type="text"
                  className={`flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none  ${
                    errors.urlName && touched.urlName && "border-red"
                  }`}
                  placeholder="Shorten a link here"
                />

                <button
                  type="submit"
                  className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
                >
                  Shorten It!
                </button>

                {/* Error Message */}

                {errors.urlName && touched.urlName ? (
                  <div className="absolute left-7 bottom-3 text-red text-sm italic">
                    {errors.urlName}
                  </div>
                ) : null}
              </Form>
            )}
          </Formik>

          {/* Link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://frontendmentor.io
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/k4IKyk</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://twitter.com/frontendmentor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gxOXp9</div>
              <button className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* Link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://linkedin.com/frontend-mentor
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">https://rel.ink/gob3X9</div>
              <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>

          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </section>

      {/* Feature Box Section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* Horizontal Line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          {/* Vertical Line */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

          {/* Box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background and Center*/}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <picture>
                  <img
                    src="/img/icon-brand-recognition.svg"
                    alt="brand recognition"
                  />
                </picture>
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* Box 2 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background and Center*/}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <picture>
                  <img
                    src="/img/icon-detailed-records.svg"
                    alt="detailed records"
                  />
                </picture>
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* Box 3 */}
          <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3">
            {/* Image Positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* Image Container for Background and Center*/}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <picture>
                  <img
                    src="/img/icon-fully-customizable.svg"
                    alt="fully customizable"
                  />
                </picture>
              </div>
            </div>

            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>

            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-y-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold text-center text-white">
            Boost your links today
          </h5>
          <button className="px-10 py-5 mx-auto text-2xl font-bold text-white rounded-full bg-cyan hover:bg-cyanLight md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          {/* Logo */}
          <picture>
            <img src="/img/logo.svg" alt="logo" />
          </picture>

          {/* Menus Container  */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* Menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className=" mb-5 font-bold text-white capitalize">
                Features
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Link Shortening
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Branded Links
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Analytics
                  </a>
                </Link>
              </div>
            </div>

            {/* Menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className=" mb-5 font-bold text-white capitalize">
                Resources
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Blog
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Developers
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Support
                  </a>
                </Link>
              </div>
            </div>

            {/* Menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className=" mb-5 font-bold text-white capitalize">
                Company
              </div>

              <div className="flex flex-col items-center space-y-3 md:items-start">
                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    About
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Our Team
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Careers
                  </a>
                </Link>

                <Link href="#">
                  <a className="capitalize text-grayishViolet hover:text-cyan">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Social Container */}

          <div className="flex space-x-6">
            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-facebook.svg"
                  alt="facebook"
                  className="ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-twitter.svg"
                  alt="twitter"
                  className="ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-pinterest.svg"
                  alt="pinterest"
                  className="ficon"
                />
              </picture>
            </Link>

            <Link href="#" passHref>
              <picture>
                <img
                  src="/img/icon-instagram.svg"
                  alt="instagram"
                  className="ficon"
                />
              </picture>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
