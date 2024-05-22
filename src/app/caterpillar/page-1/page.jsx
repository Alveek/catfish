"use client";

import Main from "@/components/main";
import { data_1 } from "./data";

function Page1() {
  return (
    <div>
      <Main
        data={data_1}
        audioSrc={"/hungry_caterpillar.mp3"}
        nextPage="/caterpillar/page-2"
      />
    </div>
  );
}

export default Page1;
