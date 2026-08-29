import React, { Suspense } from "react";

const Loader = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="text-2xl font-semibold text-blue-600">
            Loading...
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Loader;