import React from "react";

const WatchVideo = () => {
  return (
    <div>
      <h2 className="text-heading-6 font-medium">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, iure!
      </h2>
      <div className="flex items-center justify-center py-2 mt-4">
        <iframe
          width="720"
          height="480"
          src="https://www.youtube.com/embed/4KoueFpk1IY"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default WatchVideo;
