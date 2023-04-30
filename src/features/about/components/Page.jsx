import React from "react";

function Page({ imgUrl, text, page, paragraphStyles }) {
  return (
    <div className="gap-2 p-3 flex flex-col  rounded-md shadow-2xl w-full overflow-clip ">
      <div className="relative">
        <img src={imgUrl} className="rounded-md  object-contain h-2/3" />
        <p className={`my-auto comic-text absolute ${paragraphStyles}`}>
          {text}
        </p>
      </div>
      <p className=" self-center">{page}</p>
    </div>
  );
}

export default Page;
