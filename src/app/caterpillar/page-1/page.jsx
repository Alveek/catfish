"use client";

import MainContent from "@/components/main-content";
import AudioPreloader from "@/components/audio-preloader";

// import { data_1 } from "./data";
import { story } from "@/data/story";

function Page1() {
  let audioFiles = [];
  for (let i = 1; i <= 24; i++) {
    audioFiles = [...audioFiles, `/caterpillar_audio/${i}_voice.mp3`];
  }

  return (
    <div>
      <AudioPreloader audioFiles={audioFiles} />

      <MainContent
        data={story[0]}
        // audioSrc={"/hungry_caterpillar.mp3"}
        nextPage="/caterpillar/page-2"
      />
    </div>
  );
}

export default Page1;
