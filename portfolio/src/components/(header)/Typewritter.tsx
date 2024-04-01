"use client";

import { useTypedTagline } from "@/utils/useTypedTagline";

const taglines = ["Software Engineer", "3D Artist"];

export function Typewritter() {
    const tagline = useTypedTagline(taglines);

    return (
        <section className="container mx-auto">
            <h1>
                <p className="blinking-cursor">
                    Hi there! My name is{" "}
                    <i>
                        <b>Kenzi,</b>
                    </i>
                    <br />
                    I'm a{" "}
                    <b>
                        <span className="text-cyan-400">{tagline}</span>
                    </b>
                    .
                </p>
            </h1>
        </section>
    );
}
