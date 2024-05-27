"use client";
import MainContent from "@/components/main-content";
import { story } from "@/data/caterpillar";

function Caterpillar() {
  return (
    <div>
      <MainContent data={story} />
    </div>
  );
}

export default Caterpillar;
