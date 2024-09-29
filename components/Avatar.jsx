"use client";
import { User } from "lucide-react";
import Image from "next/image";

export default function Avatar({ img, alt, square, border, initials }) {
  return (
    <div className="relative">
      <ImageOptions
        img={img}
        initials={initials}
        square={square}
        border={border}
        alt={alt}
      />

      <span
        className={`absolute h-3.5 w-3.5 bg-red-400 rounded-full border-white border-2 ${
          square ? "-top-2 left-8" : "left-7 top-0"
        }`}
      ></span>
    </div>
  );
}

function ImageOptions({ img, alt, square, border, initials }) {
  if (img) {
    return (
      <Image
        className={`h-10 w-10 ${square ? "rounded" : "rounded-full"} ${
          border ? "ring-2 ring-blue-500" : ""
        }`}
        src={img}
        alt={alt}
      />
    );
  } else if (initials) {
    return (
      <div
        className={`bg-gray-100 w-10 h-10 flex items-center justify-center text-gray-600 font-medium text-xl ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-blue-500" : ""}`}
      >
        {initials}
      </div>
    );
  } else {
    return (
      <div
        className={`w-10 h-10 bg-gray-100 flex items-center justify-center ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-blue-500" : ""}`}
      >
        <User size={30} color="gray" />
      </div>
    );
  }
}
