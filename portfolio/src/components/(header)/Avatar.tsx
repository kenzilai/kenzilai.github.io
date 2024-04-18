import Image from "next/image";

export function Avatar() {
    return (
        <Image
            className="border-white-500 mb-10 mt-32 rounded-full border-4 sm:m-5"
            src="/static/Avatar.png"
            width={150}
            height={150}
            alt="Avatar"
        />
    );
}
