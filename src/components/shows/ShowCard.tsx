interface ShowCardProps {
  show: any;
}

const ShowCard = (props: ShowCardProps) => {
  const { show } = props;

  const imageClasses = "border-primary rounded w-full h-64 mb-2";
  const getSinceSeen = (date: string) => {
    const dateSeen = new Date(date);
    const today = new Date();

    var seconds = Math.floor((today.getTime() - dateSeen.getTime()) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
      let time = Math.floor(interval);
      return `${time} ${time === 1 ? "year" : "years"} ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      let time = Math.floor(interval);
      return `${time} ${time === 1 ? "month" : "months"} ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      let time = Math.floor(interval);
      return `${time} ${time === 1 ? "day" : "days"} ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      let time = Math.floor(interval);
      return `${time} ${time === 1 ? "hour" : "hours"} ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      let time = Math.floor(interval);
      return `${time} ${time === 1 ? "minute" : "minutes"} ago`;
    }
    return Math.floor(seconds) + " seconds ago";
  }

  return (
    <div className="border rounded p-2.5 my-4 mx-2 shadow-sm bg-white min-w-[280px]">
      <div className="flex flex-col items-start">
        {show.img ? (
          <img className={`${imageClasses} object-cover`} src={`${process.env.PUBLIC_URL}/assets/images/${show.img}`} alt="" />
        ) : (
          <div className={`${imageClasses}`}>👍</div>
        )}
        <div className="flex items-center gap-1 text-sm text-gray-600 mb-1.5">
          <div>
            {show.theatre ? (<>{show.theatre}</>) : (<></>)}
          </div>
          {show.theatre && <div>·</div>}
          {show.dateSeen && (
            <div className="">
              Seen {getSinceSeen(show.dateSeen)}
            </div>
          )}
        </div>
        <div className="font-semibold text-xl mb-2">
          {show.url ? (
            <a href={show.url} className="underline hover:no-underline">
              {show.name}
            </a>
          ) : (
            <>
              {show.name}
            </>
          )}
        </div>
        <div className="text-left text-sm line-clamp-4 mb-2">
          {/* {show.synopsis && <>{show.synopsis}</>} */}
        </div>
      </div>
    </div>
  )
}

export default ShowCard