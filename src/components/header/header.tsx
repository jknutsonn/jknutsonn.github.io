import { Link, useLocation } from "react-router-dom"
import classNames from 'classnames';
import { ROUTES } from "../../config";

const Header = () => {

  const location = useLocation();

  return (
    <header className="flex justify-center p-6 h-[72px] font-semibold text-lg">
      <div className="flex gap-8">
        {ROUTES.map(nav => (
          <Link
            key={nav.label}
            to={nav.path}
            className={classNames('hover:underline', {
              'underline': location.pathname + location.hash === nav.path,
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