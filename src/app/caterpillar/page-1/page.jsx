"use client";

import MainContent from "@/components/main-content";
// import { data_1 } from "./data";
import { story } from "@/data/story";

function Page1() {
  return (
    <div>
      <MainContent
        data={story[0]}
        // audioSrc={"/hungry_caterpillar.mp3"}
        nextPage="/caterpillar/page-2"
      />
    </div>
  );
}

export default Page1;
