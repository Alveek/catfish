"use client";
import MainContent from "@/components/main-content";
import { story } from "@/data/three-cats";

function ThreeCats() {
  return (
    <div>
      <MainContent data={story} storyTitle={"three_cats"} />
    </div>
  );
}

export default ThreeCats;
