import {
  facebook,
  instagram,
  tiktok,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#new-arrivals", label: "New Arrivals" },
  { href: "#products", label: "Most Wanted" },
  { href: "#coming-soon", label: "Coming soon" },
  { href: "#special-offers", label: "Special Offers" },

];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Cosmic",
    price: "$200.20",
    rate: 4,
  },
  {
    imgURL: shoe5,
    name: "Off-White",
    price: "$210.20",
    rate: 5,
  },
  {
    imgURL: shoe6,
    name: "Comme Des Garçons x Nike Air",
    price: "$220.20",
    rate: 4,
  },
  {
    imgURL: shoe7,
    name: "Junya Watanabe MAN",
    price: "$230.20",
    rate: 5,
  },
];

export const footerLinks = [
  {
    title: "Stores",
    links: [
      { name: "Barcelona", link: "/" },
      { name: "Berlin", link: "/" },
      { name: "Lisbon", link: "/" },
      { name: "London", link: "/" },
      { name: "Paris", link: "/" },
      { name: "Porto", link: "/" },
    ],
  },

  {
    title: "Get in touch",
    links: [
      { name: "customer@sneakersshop.com", link: "mailto:00000@sneakersshop.com" },
      { name: "+000000000", link: "tel:+000000000" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: tiktok, alt: "tiktok logo" },
  { src: instagram, alt: "instagram logo" },
];
