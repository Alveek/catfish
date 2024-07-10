"use client";
import MainContent from "@/components/main-content";
import { story } from "@/data/caterpillar";

function Caterpillar() {
  return (
    <MainContent data={story} storyTitle={"caterpillar"} storyTitleRu={"Очень голодная гусеница"} />
  );
}

export default Caterpillar;
