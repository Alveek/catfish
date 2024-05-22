/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { v4 } from "uuid";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const Main = ({ data, audioSrc, nextPage, prevPage }) => {
  const [audio, setAudio] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    setAudio(new Audio(audioSrc));
  }, []);

  function playAudio(word) {
    clearTimeout(timer.current);
    let startFrom = word.start.min * 60 + word.start.sec;
    let finishAt =
      word.finish.min * 60 +
      word.finish.sec -
      (word.start.min * 60 + word.start.sec);

    // audio.pause();
    audio.currentTime = startFrom;
    // audio.play();
    audio.play().then(() => {
      timer.current = setTimeout(() => {
        audio.pause();
      }, finishAt * 1000);
    });
  }
  return (
    <div className="max-w-[440px]">
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
            className="p-2 m-2 border rounded bg-purple-400"
            key={v4()}
            onClick={() => {
              playAudio(item);
            }}
          >
            {item.word.toUpperCase()}
          </button>
        );
      })}
      <div>
        {prevPage && <Link href={prevPage}>Назад</Link>}
        {nextPage && <Link href={nextPage}>Вперед</Link>}
      </div>
    </div>
  );
};

export default Main;
