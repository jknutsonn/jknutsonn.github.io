import { Link, useLocation } from "react-router-dom"
import classNames from 'classnames';

const Header = () => {

  const HEADER_NAV = [
    { path: "/", label: "Home" },
    { path: "/theatre", label: "Theatre" },
    { path: "/programming", label: "Programming" },
  ];

  const location = useLocation();

  return (
    <header className="flex justify-center p-6 h-[72px] font-semibold text-lg border">
      <div className="flex gap-8">
        {HEADER_NAV.map(nav => (
          <Link
            key={nav.label}
            to={nav.path}
            className={classNames('btn', {
              'text-red-500': location.pathname + location.hash === nav.path,
            })}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header