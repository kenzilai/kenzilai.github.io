"use client";

import { useTypedTagline } from "@/utils/useTypedTagline";

const taglines = ["Kenzi", "Software Engineer", "3D Artist"];

export function Typewritter() {
    const tagline = useTypedTagline(taglines);

    return (
        <h1 className="blinking-cursor p-6 text-4xl font-extrabold text-white">
            Hi there! I'm
            <br />
            <span className="text-cyan-400">
                <b>{tagline}</b>
            </span>
        </h1>
    );
}
