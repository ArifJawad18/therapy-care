import React from 'react';

const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 bg-gray-100 text-gray-600">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <div className="mt-7">
              <a
                rel="noopener noreferrer"
                href="/"
                className="px-5 py-3 font-semibold rounded bg-sky-600 text-gray-50"
              >
                Back to homepage
              </a>
            </div>
          </div>
        </div>
      </section>{" "}
        </div>
    );
};

export default Error;