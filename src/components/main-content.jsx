/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { v4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const MainContent = ({ data, nextPage, prevPage }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [page, setPage] = useState(0);

  const read = (word) => {
    // Pause the current audio (if any)
    if (currentAudio) {
      currentAudio.pause();
    }

    // Create a new audio element and play it
    const audio = new Audio(`/caterpillar/audio/${word.id}_voice.mp3`);
    audio.play();

    // Update the current audio state
    setCurrentAudio(audio);
  };

  return (
    <div className="max-w-[400px] p-5">
      <Image
        className="mb-3"
        src={data[`${page}`].pictureSrc}
        width={400}
        height={400}
        alt="alt text"
        priority
      />
      {data[`${page}`].sentense.map((item) => {
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
        {page > 0 && (
          <button onClick={() => setPage((prev) => prev - 1)}>
            <FaLeftLong className="text-3xl" />
          </button>
        )}

        {page}

        {page < data.length - 1 && (
          <button
            className="justify-self-end"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <FaRightLong className="text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MainContent;
