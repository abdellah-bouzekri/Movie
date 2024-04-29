import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 sm:hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h2 className="text-3xl font-semibold text-indigo-600 mb-4">
                About Our Movie Website
              </h2>
              <p className="text-lg text-gray-800 mb-4">
                Welcome to our movie platform! We are passionate about movies
                and dedicated to providing a unique and enjoyable experience for
                movie enthusiasts.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Our mission is to connect movie lovers with the latest releases,
                timeless classics, and hidden gems. Whether you're looking for
                recommendations, exploring different genres, or discovering new
                favorites, we've got you covered.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                Join our community today and embark on a cinematic journey like
                no other. Sit back, relax, and let the magic of movies transport
                you to new worlds and unforgettable experiences.
              </p>
              <Link
                to="/"
                className="inline-flex bg-blue-700 items-center p-3 rounded-md text-slate-100 hover:text-slate-900   duration-150 font-medium">
                Explore Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
