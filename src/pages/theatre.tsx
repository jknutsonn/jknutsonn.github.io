import { useState } from "react";
import ShowGrid from "../components/shows/ShowGrid";
import { SHOWS } from "../shows";
import classNames from "classnames";

function Theatre() {
  const FILTERS = [
    {
      text: "All",
      filter: function () {
        return SHOWS;
      },
    },
    {
      text: "Recommended 👍",
      filter: function () {
        return SHOWS.filter(s => s.isRecommended);
      },
    },
    {
      text: "Broadway",
      filter: function () {
        return SHOWS.filter(s => s.isBroadway);
      },
    },
    {
      text: "Off-Broadway",
      filter: function () {
        return SHOWS.filter(s => !s.isBroadway);
      },
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);

  return (
    <div className="Theatre bg-primary">
      <div className="border-b border-slate-300">
        <div className="bg-sky-500 h-72 flex items-center justify-center ">
          <h1 className="text-white text-6xl font-bold">
            Jake-Up's 👍 Picks
          </h1>
        </div>
        <div className="border flex items-center justify-center gap-8 uppercase bg-white">
          {FILTERS.map(filter => (
            <button
              key={filter.text}
              className={classNames("my-2 p-4 hover:text-sky-500", {
                'text-sky-500': selectedFilter.text === filter.text,
              })}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter.text}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <ShowGrid shows={selectedFilter.filter()} />
      </div>
    </div>
  );
}

export default Theatre;
