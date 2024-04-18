"use client";

import { useTypedTagline } from "@/utils/hooks/useTypedTagline";

const taglines = ["Kenzi", "Software Engineer", "3D Artist"];

export function Typewritter() {
    const tagline = useTypedTagline(taglines);

    return (
        <h1 className="blinking-cursor mb-32 text-4xl font-extrabold text-white sm:m-6">
            Hi there! I'm
            <br />
            <span className="text-cyan-400">
                <b>{tagline}</b>
            </span>
        </h1>
    );
}
