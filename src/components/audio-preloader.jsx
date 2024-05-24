import { useEffect } from "react";

const AudioPreloader = ({ audioFiles }) => {
  useEffect(() => {
    const audioElements = audioFiles.map((file) => {
      const audio = new Audio(file);
      audio.preload = "auto";
      return audio;
    });

    return () => {
      audioElements.forEach((audio) => audio.pause());
    };
  }, [audioFiles]);

  return null;
};

export default AudioPreloader;
