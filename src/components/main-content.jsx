/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { v4 } from "uuid";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./header";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MainContent = ({ data, storyTitle, storyTitleRu }) => {
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
    const audio = new Audio(`/${storyTitle}/audio/${word.id}_voice.mp3`);
    audio.play().catch((err) => console.error("Error playing audio: ", err));

    const onAudioEnded = () => {
      setButtonToPress((prev) => word.id + 1);

      if (word.last) {
        setPage((prev) => prev + 1);
      }
    };

    audio.addEventListener("ended", onAudioEnded);

    // Update the current audio state
    if (currentAudio) {
      currentAudio.removeEventListener("ended", onAudioEnded);
    }
    setCurrentAudio(audio);
  };

  return (
    <div className="sm:max-w-2xl flex flex-col max-sm:min-h-svh sm:h-[700px] mx-auto bg-white">
      <Header title={storyTitleRu} />

      <div className="max-sm:min-h-[200px] min-h-[300px] relative">
        <Image
          className="px-4 object-contain"
          src={data[`${page}`].pictureSrc}
          fill
          sizes="(max-width: 768px) 600px, (max-width: 425px) 400px"
          alt="no so great alt text"
          priority
          quality={50}
        />
      </div>

      <div className="px-4 sm:px-8 my-5 flex-1">
        {data[`${page}`].sentense.map((item) => {
          return (
            <button
              className={`p-3 mr-3 mb-3 rounded shadow font-medium  ${
                item.id === buttonToPress && "bg-sky-200 transition-all duration-200 ease-linear"
              }`}
              key={v4()}
              onClick={() => read(item)}
            >
              {item.word.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className="px-4 flex justify-between w-full mb-4">
        <button onClick={() => setPage((prev) => prev - 1)} disabled={page <= 0}>
          <ArrowLeft strokeWidth={3} className="text-3xl" color={page <= 0 ? "white" : "black"} />
        </button>

        <span>
          {page + 1} / {data.length}
        </span>

        <button
          className="justify-self-end"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === data.length - 1}
        >
          <ArrowRight
            strokeWidth={3}
            className="text-3xl"
            color={page === data.length - 1 ? "white" : "black"}
          />
        </button>
      </div>
    </div>
  );
};

export default MainContent;
