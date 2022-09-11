import imageTab1 from "./assets/illustration-features-tab-1.svg";
import imageTab2 from "./assets/illustration-features-tab-2.svg";
import imageTab3 from "./assets/illustration-features-tab-3.svg";

const featuresData = [
  {
    image: imageTab1,
    title: "Bookmark in one click",
    headline: "Simple Bookmarking",
    content:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    selected: true,
  },
  {
    image: imageTab2,
    headline: "Speedy Searching",
    title: "Intelligent search",
    content:
      "Intelligent search Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    selected: false,
  },
  {
    image: imageTab3,
    headline: "Easy Searching",
    title: "Share your bookmarks",
    content:
      "Share your bookmarks Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    selected: false,
  },
];

export default featuresData;
