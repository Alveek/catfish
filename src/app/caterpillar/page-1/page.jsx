"use client";

import { v4 } from "uuid";
import Image from "next/image";
import { useState, useEffect } from "react";
import { data_1 } from "./data";

function Page1() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio("/hungry_gusenica.mp3"));
  }, []);

  function playAudio(word) {
    let startFrom = word.start.min * 60 + word.start.sec;
    let finishAt =
      word.finish.min * 60 +
      word.finish.sec -
      (word.start.min * 60 + word.start.sec);

    // audio.pause();
    audio.currentTime = startFrom;
    // audio.play();
    audio.play().then(() => {
      setTimeout(() => {
        audio.pause();
      }, finishAt * 1000);
    });
  }

  return (
    <div className="max-w-[440px]">
      <Image
        className="mb-3"
        src={data_1.pictureSrc}
        width={400}
        height={400}
        alt="alt text"
        priority
      />
      {data_1.sentense.map((item) => {
        return (
          <button
            className="p-2 m-2 border rounded bg-purple-400"
            key={v4()}
            onClick={() => {
              playAudio(item);
            }}
          >
            {item.word}
          </button>
        );
      })}
    </div>
  );
  2;
}

export default Page1;
