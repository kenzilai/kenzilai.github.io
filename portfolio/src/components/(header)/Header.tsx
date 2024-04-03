import { Avatar } from "./Avatar";
import { Navbar } from "./Navbar";
import { Typewritter } from "./Typewritter";

export function Header() {
    return (
        <header>
            <Navbar />
            <section className="flex flex-wrap-reverse items-center justify-around bg-black p-20">
                <Typewritter />
                <Avatar />
            </section>
        </header>
    );
}
