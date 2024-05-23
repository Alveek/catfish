"use client";

// import Main from "@/components/main";
// import { data_2 } from "./data";
import MainContent from "@/components/main-content";
import { story } from "@/data/story";

function Page2() {
  return (
    <div>
      <MainContent
        data={story[1]}
        // audioSrc={"/hungry_caterpillar.mp3"}
        prevPage="/caterpillar/page-1"
      />
    </div>
  );
}

export default Page2;
