import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const UrlSchema = Yup.object().shape({
  urlName: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Please enter a valid URL."
    )
    .required("Please enter website URL."),
});

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
    </>
  );
};

export default Home;
