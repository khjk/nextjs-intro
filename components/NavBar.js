import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    return (
    <nav>
        <Link href="/">
        <div className={router.pathname === "/" ? "active" : ""}>Home</div>
        </Link>
        <Link href="/about">
            <div className={router.pathname === "/about" ? "active" : ""}>About</div>
        </Link>
        <style jsx>{`
            nav {
                background-color : tomato;
            }
            a {
                text-decoration : none;
            }
            .active {
                color : yellow;
            }
        `}</style>
    </nav>
    );
}