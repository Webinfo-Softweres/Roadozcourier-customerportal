import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse px-4 md:px-20 py-10 space-y-10">

      <div className="h-64 bg-gray-200 rounded-2xl"></div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-40 bg-gray-200 rounded-xl"></div>
        <div className="h-40 bg-gray-200 rounded-xl"></div>
        <div className="h-40 bg-gray-200 rounded-xl"></div>
      </div>

      <div className="space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-6 bg-gray-200 rounded w-2/3"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>
      </div>

      <div className="h-52 bg-gray-200 rounded-2xl"></div>

    </div>
  );
};

export default Skeleton;
