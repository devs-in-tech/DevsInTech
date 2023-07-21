import axios from "axios";
import Image from "next/image";
import { useState } from "react";

export default function Letter() {
  const [email, setEmail] = useState("");
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request using Axios
    axios
      .post("/api/subscribes", { email })
      .then((response) => {
        // Handle the success response here
        console.log(response.data);
        setSubscriptionSuccess(true);
      })
      .catch((error) => {
        // Handle the error here
        console.error(error);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section className="bg-black ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          {subscriptionSuccess ? (
            <div className="bg-black-500  text-white p-4 mb-4 rounded-lg flex flex-col items-center justify-center border-2 border-solid focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <div className="w-12 h-12 mb-2 animate-bounce">
                <Image
                  src="/check-markf.png"
                  alt="Success Icon"
                  width={68}
                  height={68}
                />
              </div>
              <span className="text-center text-3xl mt-2">
                We&apos;ve sent a confirmation email
                <br />
                Click on the link to complete your subscription to this
                newsletter.
              </span>
            </div>
          ) : (
            <>
              <h2 className="sm:text-3xl md:text-4xl text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-purple-400">
                Subscribe to our newsletter
              </h2>
              <p className="mx-auto mb-8 mt-4 max-w-2xl font-secondary text-white-500 md:mb-12 sm:text-xl dark:text-white">
                Read articles from DevsInTech Blogs directly inside your inbox.
                Subscribe to the newsletter, and don&apos;t miss out.
              </p>
              <form action="#" onSubmit={handleSubmit}>
                <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required=""
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-indigo-800 to-purple-500"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
