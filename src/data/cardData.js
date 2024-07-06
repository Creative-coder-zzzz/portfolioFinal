// data/cardData.js
import Disney from '../assets/images/Disney.png';
import portfolio from '../assets/images/portfolio.png'
import food from '../assets/images/food.png'
export const cardData = [
  {
    id: 1,
    title: 'DISNEY CLONE',
    content: 'This is Disney UI clone created with react+vite and Tailwind css',
    image: Disney, 
    buttonLeftText: 'Git repo',
    buttonRightText: 'Visit Site',
    gitrepo:'https://github.com/Creative-coder-zzzz/Disney_clone' ,
    visit:'https://disney-clone-sandesh.vercel.app/' ,

  },
  {
    id: 2,
    title: 'Portfolio',
    content: 'This is My dummy Portfolio  created with HTML css and Js at time when i was fresh in front end development',
    image: portfolio, 
    buttonLeftText: 'Git repo',
    buttonRightText: 'Visit Site',
    gitrepo: 'https://github.com/Creative-coder-zzzz/MY-Fportfolio',
    visit:'https://my-fportfolio.vercel.app/' ,

  },
  {
    id: 3,
    title: 'Food Delivery App',
    content: 'This is food delivery app  created with react+vite and Tailwind css',
    image: food, 
    buttonLeftText: 'Git repo',
    buttonRightText: 'Visit Site',
    gitrepo: 'https://github.com/Creative-coder-zzzz/Lets-eat',
    visit:'https://sandsh-lets-eat.vercel.app/' ,
  },
 
];
