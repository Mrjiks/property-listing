import home from "./images/home.png";
import stats from "./images/stats.png";
import signOut from "./images/sign-out.png";
import profile from "./images/profile-circled.png";
import market from "./images/market-trend.png";
import property from "./images/properties.png";
import listings from "./images/listings.png";

export const data = [
  { id: 1, image: `${home}`, text: "Home", path: "/" },
  { id: 2, image: `${listings}`, text: "Listings", path: "listings" },
  { id: 3, image: `${property}`, text: "Properties", path: "properties" },
  { id: 4, image: `${stats}`, text: "Stats", path: "stats" },
  { id: 5, image: `${market}`, text: "Market Trends", path: "market" },
  { id: 6, image: `${profile}`, text: "Profile", path: "profile" },
  { id: 7, image: `${signOut}`, text: "Sign Out", path: "/" },
];

export const NavLinks = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "Agents", path: "/agents" },
  { id: 3, text: "Sign In", path: "/signin" },
  { id: 4, text: "Sign Up", path: "/signup" },
  { id: 5, text: "Dashboard", path: "/signin" },
  { id: 6, text: "Special Deals", path: "#" },
];

export const featuredHouse = [
  {
    id: 1,
    title: "Assumenda quia ducimus amet ipsam impedit voluptatum quis.",
    imageUrl:
      "https://www.steyncity.co.za/storage/2022/09/SteynCity-Story-October_Modern-Luxe-featured-600x476.jpg",
    price: 563.11,
    tag: "New",
    address: "6304 Barrows Corners",
  },
  {
    id: 2,
    title: "Internal Tactics Designer",
    imageUrl:
      "https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    price: 563.11,
    tag: "New",
    address: "3895 Willow Lakes",
  },
  {
    id: 3,
    title: "Global Identity Manager",
    imageUrl: "https://i.pinimg.com/originals/95/5c/74/955c74cfcd6266fc7e9d0bf06df3980a.jpg",
    price: 563.11,
    tag: "New",
    address: "332 Yundt Trail",
  },
  {
    id: 4,
    title: "Future Research Planner",
    imageUrl: "https://i.pinimg.com/originals/95/5c/74/955c74cfcd6266fc7e9d0bf06df3980a.jpg",
    price: 563.11,
    tag: "New",
    address: "683 Parker Passage",
  },
  {
    id: 5,
    title: "Corporate Functionality Representative",
    imageUrl:
      "https://www.buildsense.com/wp-content/uploads/2017/10/01-Fred-low-res-30_small-600x476.jpg",
    price: 563.11,
    tag: "New",
    address: "1148 Sibyl River",
  },
  {
    id: 6,
    title: "Principal Paradigm Specialist",
    imageUrl:
      "https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    price: 563.11,
    tag: "New",
    address: "Abbott Squares",
  },
  {
    id: 7,
    title: "Principal Paradigm Specialist",
    imageUrl:
      "https://www.mydomaine.com/thmb/dke2LC6lH21Pvqwd2lI6AIutnDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SuCasaDesign-Modern-9335be77ca0446c7883c5cf8d974e47c.jpg",
    price: 563.11,
    tag: "New",
    address: "Abbott Squares",
  },
];
