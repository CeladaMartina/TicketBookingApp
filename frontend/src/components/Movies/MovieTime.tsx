import React, { useState } from "react";

const MovieTime = () => {
  const [time, setTime] = useState("");

  //ver si esto esta bien
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  return (
    <div className="w-full space-y-4">
      {!time ? (
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="">
            <label htmlFor="movies" className="block mb-2 font-semibold">
              Time
            </label>
            <select
              value={time}
              name="movies"
              id="movies"
              onChange={handleTimeChange}
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 inline-block bg-neutral-200/60 dark: bg-neutral-900/60 px-3 h-11 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-900"
            >
              <option value="">Select time</option>
              <option value="04:00 AM">04:00 AM</option>
              <option value="05:00 AM">05:00 AM</option>
            </select>
          </div>
          <div className="">
          <label htmlFor="movies" className="block mb-2 font-semibold">
              Screen 1
            </label>
          </div>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="w-full flex items-center gap-x-3">
            <div className="w-fit text-base font-semibold">
              Time selected: -{" "}
              <span className="ml-1.5 font-medium">{time}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieTime;
