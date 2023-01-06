import home from "./images/home.png";
import stats from "./images/stats.png";
import signOut from "./images/sign-out.png";
import profile from "./images/profile-circled.png";
import market from "./images/market-trend.png";
import property from "./images/properties.png";
import listings from "./images/listings.png";

export const data = [
  { id: 1, image: `${home}`, text: "Home", path: "/landing" },
  { id: 2, image: `${listings}`, text: "Listings", path: "listings" },
  { id: 3, image: `${property}`, text: "Properties", path: "properties" },
  { id: 4, image: `${stats}`, text: "Stats", path: "stats" },
  { id: 5, image: `${market}`, text: "Market Trends", path: "market" },
  { id: 6, image: `${profile}`, text: "Profile", path: "profile" },
  { id: 7, image: `${signOut}`, text: "Sign Out", path: "signout" },
];

export const NavLinks = [
  { id: 1, text: "Home", path: "/landing" },
  { id: 2, text: "Agents", path: "agents" },
  { id: 3, text: "Sign In", path: "signin" },
  { id: 4, text: "Sign Up", path: "signin" },
  { id: 5, text: "Dashboard", path: "/" },
  { id: 6, text: "Bookings", path: "#" },
  { id: 7, text: "VIPs", path: "#" },
];
