import { Header } from "@/components/(header)/Header";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import { Footer } from "@/components/(footer)/Footer";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </main>
    );
}
