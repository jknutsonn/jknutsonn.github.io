import { showType } from "../../shows";
import ShowCard from "./ShowCard"

interface ShowGridProps {
  shows: showType[];
}

const ShowGrid = (props: ShowGridProps) => {
  const { shows } = props;

  return (
    <div className="grid max-w-3xl sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 2xl:max-w-fit m-2">
      {shows
        .sort((x1, x2) => {
          const date1 = new Date(x1.dateSeen ?? "");
          const date2 = new Date(x2.dateSeen ?? "");
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