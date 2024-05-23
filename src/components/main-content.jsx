/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { v4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const MainContent = ({ data, nextPage, prevPage }) => {
  const [currentAudio, setCurrentAudio] = useState(null);

  const read = (word) => {
    // Pause the current audio (if any)
    if (currentAudio) {
      currentAudio.pause();
    }

    // Create a new audio element and play it
    const audio = new Audio(word.audioSrc);
    audio.play();

    // Update the current audio state
    setCurrentAudio(audio);
  };

  return (
    <div className="max-w-[400px] p-5">
      <Image
        className="mb-3"
        src={data.pictureSrc}
        width={400}
        height={400}
        alt="alt text"
        priority
      />
      {data.sentense.map((item) => {
        return (
          <button
            className="p-2 mr-3 mb-3 border rounded bg-purple-400"
            key={v4()}
            onClick={() => read(item)}
          >
            {item.word.toUpperCase()}
          </button>
        );
      })}
      <div className="mt-4 grid w-full">
        {prevPage && (
          <Link className="" href={prevPage}>
            <FaLeftLong className="text-3xl" />
          </Link>
        )}
        {nextPage && (
          <Link className="justify-self-end" href={nextPage}>
            <FaRightLong className="text-3xl" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainContent;
