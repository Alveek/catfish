"use client";
import MainContent from "@/components/main-content";
import { story } from "@/data/three-cats";

function ThreeCats() {
  return <MainContent data={story} storyTitle={"three_cats"} storyTitleRu={"Три котенка"} />;
}

export default ThreeCats;
