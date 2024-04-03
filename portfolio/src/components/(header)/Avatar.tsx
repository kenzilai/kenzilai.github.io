import Image from "next/image";

export function Avatar() {
    return (
        <Image
            className="border-white-500 m-5 rounded-full border-4"
            src="/static/Avatar.png"
            width={150}
            height={150}
            alt="Avatar"
        />
    );
}
