import { cn } from "@/lib/utils";
import { ROUTESMAP } from "@/router/const";
import { Link, Outlet } from "react-router-dom";


const sidebarNavItems = [
    {
        title: "Home",
        href: ROUTESMAP.HOME,
    },
    {
        title: "Detail",
        href: ROUTESMAP.DETAIL,
    },
];

// interface SettingsLayoutProps {
//     children: React.ReactNode;
// }
// { children }: SettingsLayoutProps

export default function Layout() {
    return (
        <div>
            <nav
                className={cn(
                    "flex gap-8 m-4",
                    "text-2xl text-white underline"
                )}>
                {
                    sidebarNavItems.map(route => <Link to={route.href}>{route.title}</Link>)
                }
            </nav>
            <Outlet />
        </div>
    );
}