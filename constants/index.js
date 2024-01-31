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
          name: "LinkedIn",
          link: "https://www.linkedin.com/",
        },
      ],
    },
  ];

import { SlEnergy } from "react-icons/sl";
import { TbChartGridDots } from "react-icons/tb";
import { MdSolarPower } from "react-icons/md";
import { PiCaretDoubleUpBold } from "react-icons/pi";
import { FaFire } from "react-icons/fa";

export const Products = [
  {
    id:1,
    icon: SlEnergy,
    backgroundImage:'https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Renewable Energy",
    description: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
  },
  {
    id:2,
    icon: TbChartGridDots,
    backgroundImage:'https://images.unsplash.com/photo-1648316938614-63737d74702a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:"Minigrids",
    description: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
  },
  {
    id:3,
    icon: MdSolarPower,
    backgroundImage:'https://images.unsplash.com/photo-1592833159057-6faf163494a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Solar water pumping",
    description: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
  },
  {
    id:4,
    icon: PiCaretDoubleUpBold,
    backgroundImage:'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:"E-Mobility",
    description: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",

  },
  {
    id:5,
    icon: FaFire,
    backgroundImage:'https://images.unsplash.com/photo-1603048189002-c4aa2128e887?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title:"Cooking stoves",
    description: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
  }
]

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

export const ServiceData = [
  {
    icon: RxCrop,
    title: "Development",
    content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: RxPencil2,
    title: "Branding",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: RxDesktop,
    title: "Design",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: RxReader,
    title: "Seo",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: RxAccessibility,
    title: "Management",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: RxRocket,
    title: "Production",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const Clients = [
  {
    id:1,
    client: "Safaricom",
    link: "https://www.safaricom.co.ke/",
    logo:"/assets/Safaricom.svg",
  },
  {
    id:2,
    client: "ABB Group",
    link: "https://global.abb/group/en",
    logo:"/assets/ABB-group.svg",
  },
  {
    id:3,
    client: "Schneider Electric",
    link: "https://www.se.com/ke/en/",
    logo:"/assets/Schneider-Electric.svg",
  },
  {
    id:4,
    client: "ICT Authority",
    link: "https://global.abb/group/en",
    logo:"/assets/ICT-Authority.jpg",
  },
  {
    id:5,
    client: "Kenya Power",
    link: "https://www.safaricom.co.ke/",
    logo:"/assets/kenyapower.png",
  },
]