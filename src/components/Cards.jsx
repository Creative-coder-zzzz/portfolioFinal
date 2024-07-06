import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3dCard"; // Adjust path based on your project structure

const Cards = ({ cardData }) => {
  if (!cardData) {
    return null; // or some fallback UI
  }

  return (
    <div>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {cardData.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {cardData.content}
          </CardItem>
          <CardItem
            translateZ="100"
            rotateX={20}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <img
              src={cardData.image}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <a href={cardData.gitrepo} target="blank">
              <CardItem
                translateZ={20}
                translateX={-40}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {cardData.buttonLeftText} →
              </CardItem>
            </a>
            <a href={cardData.visit} target="blank">
              <CardItem
                translateZ={20}
                translateX={40}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                {cardData.buttonRightText}
              </CardItem>
            </a>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Cards;
