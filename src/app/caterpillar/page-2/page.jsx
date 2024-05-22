"use client";

import Main from "@/components/main";
import { data_2 } from "./data";

function Page2() {
  return (
    <div>
      <Main
        data={data_2}
        audioSrc={"/hungry_caterpillar.mp3"}
        prevPage="/caterpillar/page-1"
      />
    </div>
  );
}

export default Page2;
