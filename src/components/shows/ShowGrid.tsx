import { SHOWS } from "../../shows"
import ShowCard from "./ShowCard"

const ShowGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-2">
      {SHOWS
        .sort((x1, x2) => {
          const date1 = new Date(x1.dateSeen);
          const date2 = new Date(x2.dateSeen);
          if (date1 > date2) {
            return -1;
          }
          if (date1 < date2) {
            return 1;
          }
          return 0;
        })
        .map(show => <ShowCard key={show.name} show={show} />)}
    </div>
  )
}

export default ShowGrid