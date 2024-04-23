import { useEffect, useState } from "react";
import ShowGrid from "../components/shows/ShowGrid";
import { SHOWS } from "../shows";
import classNames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
        return SHOWS.filter(s => s.type === "BROADWAY");
      },
    },
    {
      text: "Off-Broadway",
      filter: function () {
        return SHOWS.filter(s => s.type !== "BROADWAY");
      },
    }
  ];

  const [selectedFilter, setSelectedFilter] = useState(FILTERS[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

  const getNumBroadwayTheatres = () => {
    return Array.from(new Set(SHOWS?.filter(x => x.type === "BROADWAY").map(x => x.theatre))).length;
  }

  const getNumShowsPastYear = () => {
    let oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return SHOWS?.map(x => new Date(x.dateSeen ?? "")).filter(x => x > oneYearAgo).length;
  }

  return (
    <div className="Theatre bg-primary">
      <div className="border-b border-slate-300">
        <div className="bg-sky-500 h-72 flex flex-col gap-12 items-center justify-center">
          <h1 className="text-white text-6xl font-bold">
            Jake-Up's 👍 Picks
          </h1>
          <div className="text-white">
            <div className="underline">
              Quick Stats
            </div>
            <ul className="text-left list-disc">
              <li>
                {JSON.stringify(getNumShowsPastYear())} performances attended within the past year
              </li>
              <li>
                Been to {getNumBroadwayTheatres()}/41 Broadway Theatres
              </li>
            </ul>
          </div>
        </div>
        <div className="border flex flex-col md:flex-row items-center justify-center md:gap-8 uppercase bg-white overflow-x-auto whitespace-nowrap">
          {isMobile && (
            <button
              className={classNames("py-2 w-full flex gap-2 items-center justify-center uppercase text-sky-500 font-bold", {
                'border-b': showFilters,
              })}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filters
              {showFilters ? (<FaChevronDown className="text-sky-500" />) : (<FaChevronUp className="text-sky-500" />)}
            </button>
          )}
          {(showFilters || !isMobile) && FILTERS.map(filter => (
            <button
              key={filter.text}
              className={classNames("w-full md:w-fit md:my-2 p-2 md:p-4 hover:text-sky-500", {
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
