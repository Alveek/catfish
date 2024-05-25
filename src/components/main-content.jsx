/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import { v4 } from "uuid";
import Image from "next/image";
import { useState, useEffect } from "react";

const MainContent = ({ data }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [page, setPage] = useState(0);
  const [buttonToPress, setButtonToPress] = useState(1);

  useEffect(() => {
    setButtonToPress(data[page].sentense[0].id);
  }, [page]);

  const read = (word) => {
    // Pause the current audio (if any)
    if (currentAudio) {
      currentAudio.pause();
    }

    // Create a new audio element and play it
    const audio = new Audio(`/caterpillar/audio/${word.id}_voice.mp3`);
    audio.play();
    audio.addEventListener("ended", () => {
      setButtonToPress((prev) => word.id + 1);
    });

    // Update the current audio state
    setCurrentAudio(audio);
  };

  return (
    <div className="max-w-[400px] px-4 pt-2 h-svh flex flex-col">
      <div className=" max-w-[400px] h-[200px] relative">
        <Image
          className="mb-3 shadow"
          src={data[`${page}`].pictureSrc}
          fill
          alt="alt text"
          priority
          quality={50}
        />
      </div>

      <div className="my-4  flex-grow">
        {data[`${page}`].sentense.map((item) => {
          return (
            <button
              className={`p-2 mr-3 mb-3 rounded shadow font-medium  ${
                item.id === buttonToPress &&
                "bg-blue-200 transition-all duration-200 ease-linear"
              }`}
              key={v4()}
              onClick={() => read(item)}
            >
              {item.word.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between w-full mb-2">
        {page > 0 && (
          <button className="w-10" onClick={() => setPage((prev) => prev - 1)}>
            <FaLeftLong className="text-3xl" />
          </button>
        )}

        {page + 1}

        {page < data.length - 1 && (
          <button
            className="justify-self-end w-10"
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
