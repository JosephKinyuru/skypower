import { title } from "process";

export const navbarLinks = [
    {
      route: "/",
      label: "Home",
    },
    {
      route: "/products",
      label: "Products",
    },
    {
      route: "/solutions",
      label: "Solutions",
    },
    {
      route: "/power",
      label: "Power",
      dropdown: ["Powerline Construction", "Substation construction", "Supply of Powerline Accessories", "Supply of Tools & Equipment"],
    },
    {
      route: "/telecoms",
      label: "Telecoms",
      dropdown: ["Tower Construction", "Fibre Works", "Structured Cabling"],
    },
    {
      route: "/renewable-energy",
      label: "Renewable Energy",
      dropdown: ["Minigrids", "Solar Water Pumping", "E-mobility", "Cooking Stoves"],
    },
    {
      route: "/consultancy",
      label: "Consultancy",
      dropdown: ["Powerline & Substation Design", "Solar System Design", "Safety", "Radio Transmission Planing"],
    },
    {
      route: "/contacts",
      label: "Contacts",
    },
  ];

  export const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Products",
          link: "/products",
        },
        {
          name: "Solutions",
          link: "/solutions",
        },
      ],
    },
    {
      title: "Community",
      links: [
        {
          name: "Power",
          link: "/power",
        },
        {
          name: "Telecoms",
          link: "/telecoms",
        },
        {
          name: "Renewable",
          link: "/renewables",
        },
        {
          name: "Consultancy",
          link: "/consultancy",
        },
      ],
    },
    {
      title: "socials",
      links: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/",
        },
        {
          name: "X",
          link: "https://www.twitter.com/",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/",
        },
        {
          name: "Dribble",
          link: "https://www.dribble.com/",
        },
      ],
    },
  ];

export const homeProducts = [
  {
    image:'renewable.jpg',
    title: "Renewable Energy",
  },
  {
    image:'minigrid.jpg',
    title:"Minigrids",
  },
  {
    image:'water-pump.jpg',
    title: "Solar water pumping",
  },
  {
    image:'e-mobility.jpg',
    title:"E-Mobility"
  },
  {
    image:'stove.jpg',
    title:"Cooking stoves"
  }
]