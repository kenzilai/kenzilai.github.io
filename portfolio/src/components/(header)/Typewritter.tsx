"use client";

import { useTypedTagline } from "@/utils/useTypedTagline";

const taglines = ["Software Engineer", "3D Artist"];

export function Typewritter() {
    const tagline = useTypedTagline(taglines);

    return (
        <h1>
            <p className="blinking-cursor text-white">
                Hi there! My name is{" "}
                <i>
                    <b>Kenzi,</b>
                </i>
                <br />
                I'm a{" "}
                <span className="text-cyan-400">
                    <b>{tagline}</b>
                </span>
                .
            </p>
        </h1>
    );
}
