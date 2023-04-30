import React from "react";

import Page from "./Page";
import { Carousel } from "react-responsive-carousel";
function ComicSlider() {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className=" font-bold text-2xl">Our story</h2>

      <Carousel emulateTouch={true} showArrows={false} showThumbs={false}>
        <Page
          imgUrl="https://media.discordapp.net/attachments/1089223599501615257/1091802244636233868/Peace2AlWorlds_comic_cover_ceo_with_shoes_in_hand_comic_style_D_462a51c3-d95f-403c-a83a-84f023e8be36.png?width=688&height=1034"
          text="Elevate, the company story"
          page="1"
          paragraphStyles="top-[50%] text-white text-3xl left-[50%] -translate-x-1/2"
        />

        <Page
          imgUrl="https://media.discordapp.net/attachments/1089223599501615257/1091555057142599680/Peace2AlWorlds_comic_styleDC_comics_style_ceo_in_office_257beec4-0a53-4598-9dbb-021125131e64.png?width=688&height=1034"
          text="John, the founder and driving force behind Elevate - a leading online shoe retailer with a passion for delivering the latest styles and trends to customers worldwide."
          page="1"
          paragraphStyles="top-[10%] text-xl left-[40%] -translate-x-1/2 bg-white bg-opacity-60"
        />

        <Page
          imgUrl="https://cdn.midjourney.com/f29245ac-7981-49fe-b40d-e88b707e940f/grid_0.png"
          text="One day, while walking down a busy street, John noticed a pair of shoes that caught his eye. They were unique and stylish, and he realized that there must be many other people out there who would love to own a pair just like them."
          page="2"
          paragraphStyles="top-[50%] text-2xl left-[50%] -translate-x-1/2 bg-white bg-opacity-60"
        />
        <Page
          imgUrl="https://cdn.midjourney.com/8060a663-9d60-4648-89cf-f1f6b1ed078b/0_1.png"
          text="Inspired by this experience, John decided to create an online shoe store that would offer a wide variety of unique and stylish footwear to customers around the world. He began programming the website himself, determined to create a platform that was user-friendly and visually appealing."
          page="3"
          paragraphStyles="top-[10%] text-2xl left-[35%] -translate-x-1/2 bg-white bg-opacity-60"
        />
        <Page
          imgUrl="https://cdn.midjourney.com/e14a0e2a-23dc-45af-ad9b-268984749e79/0_0.png"
          text="In the early days of the company, John personally hand-delivered each pair of shoes to his customers. He believed that providing excellent customer service was the key to building a successful business, and he was committed to going above and beyond to ensure his customers were satisfied with their purchases."
          page="4"
          paragraphStyles="top-[50%] text-xl left-[50%] -translate-x-1/2 bg-white bg-opacity-60"
        />

        <Page
          imgUrl="https://media.discordapp.net/attachments/1089223599501615257/1091558813108277258/Peace2AlWorlds_comic_styleDC_comics_style_ceo_holding_shoe_in_f_af3189cb-49a7-4d29-9765-b409602e9aea.png?width=688&height=1034"
          text="Today, Elevate is a leading online shoe retailer with a loyal customer
        base and a reputation for excellence. From casual sneakers to elegant
        dress shoes, Elevate offers a wide variety of footwear options to suit
        any style or occasion."
          page="5"
          paragraphStyles="bottom-[10%] text-xl left-[50%] -translate-x-1/2 bg-white bg-opacity-60"
        />
      </Carousel>
    </div>
  );
}

export default ComicSlider;
