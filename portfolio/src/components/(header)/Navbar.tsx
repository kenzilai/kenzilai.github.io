import Link from "next/link";

export function Navbar() {
    return (
        <nav className="container relative mx-auto py-5">
            <div className="flex items-center justify-center">
                <div className="hidden space-x-10 sm:flex">
                    <Link className="hover:text-cyan-400" href="#">
                        About
                    </Link>
                    <Link className="hover:text-cyan-400" href="#">
                        Skills
                    </Link>
                    <Link className="hover:text-cyan-400" href="#">
                        Projects
                    </Link>
                    <Link className="hover:text-cyan-400" href="#">
                        Experience
                    </Link>
                </div>
            </div>
        </nav>
    );
}
