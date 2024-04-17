import Home from "./pages/home";
import Programming from "./pages/programming";
import Theatre from "./pages/theatre";

type Route = {
    path: string;
    label: string;
    element: React.ReactNode | null;
}
export const ROUTES: Route[] = [
    { path: "/", label: "Home", element: <Home /> },
    { path: "/theatre", label: "Theatre", element: <Theatre /> },
];