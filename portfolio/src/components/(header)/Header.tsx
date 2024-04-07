import { Avatar } from "./Avatar";
import { Navbar } from "./Navbar";
import { Typewritter } from "./Typewritter";

export function Header() {
    return (
        <header>
            <Navbar />
            <section className="grid min-h-80 content-center justify-center bg-black sm:grid-cols-6">
                <div className="order-last place-self-center sm:order-first sm:col-span-4">
                    <Typewritter />
                </div>
                <div className="place-self-center sm:col-span-2 sm:place-self-start">
                    <Avatar />
                </div>
            </section>
        </header>
    );
}
