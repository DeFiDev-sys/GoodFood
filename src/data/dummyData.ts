import type {
  chartDataType,
  itemsTypes,
  mostFoodOrderType,
} from "@/types/dataTypes";
import {
  ChartArea,
  Coffee,
  CupSoda,
  Hamburger,
  Info,
  MessageCircleMore,
  Pizza,
  Search,
  Settings,
  ShoppingCart,
  SquareMenu,
  User,
  Wallet,
} from "lucide-react";

export const sidebarHeaderData = { headerName: "GOODFOOD" };

// Menu items.
export const items: itemsTypes = [
  {
    title: "Dashboard",
    url: "#",
    icon: ChartArea,
  },
  {
    title: "Food Order",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Manage Menu",
    url: "#",
    icon: SquareMenu,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Customer Reviews",
    url: "#",
    icon: MessageCircleMore,
  },
];

//Other Items
export const otherItems: itemsTypes = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Payment",
    url: "#",
    icon: Wallet,
  },
  {
    title: "Account",
    url: "#",
    icon: User,
  },
  {
    title: "Help",
    url: "#",
    icon: Info,
  },
];

export const menuItems: itemsTypes = [
  {
    title: "Delicious Hamburger",
    url: "#",
    icon: Hamburger,
  },
  {
    title: "Delicious Pizza",
    url: "#",
    icon: Pizza,
  },
  {
    title: "Delicious Pasta",
    url: "#",
    icon: CupSoda,
  },
  {
    title: "Delicious Coffee",
    url: "#",
    icon: Coffee,
  },
];

export const chartData: chartDataType = [
  {
    FoodTaste: "FoodTaste",
    percent: 85,
    fill: "#F99C30",
    className: "fill-[#F99C30]",
    position: "absolute right-0",
    startAngle: 90,
    endAngle: -150,
  },
  {
    FoodTaste: "Hygiene",
    percent: 92,
    fill: "#6463D6",
    className: "fill-[#6463D6]",
    position: "absolute left-4",
    startAngle: 90,
    endAngle: -150,
  },
  {
    FoodTaste: "Package",
    percent: 45,
    fill: "#2FBFDE",
    className: "fill-[#2FBFDE]",
    position: "absolute left-20 top-1/2",
    startAngle: 90,
    endAngle: -150,
  },
];

export const MostFoodOrder: mostFoodOrderType = [
  {
    title: "Fresh Salad Bowl",
    price: "IDR 45.000",
    image: "/4b915af1cbf1e56090048f1229aed15fcc058c11.png",
    imageAlt: "Fresh Salad Bowl",
  },
  {
    title: "Chicken Noodles",
    price: "IDR 45.000",
    image: "/761c790f83430fe410d48c70fdf82c6f3b397a32.png",
    imageAlt: "Chicken Noodles",
  },
  {
    title: "Smoothie Fruits",
    price: "IDR 45.000",
    image: "/048438b9e88f0f07e2c9b0ec972d1a49c08402d1.png",
    imageAlt: "Smoothie Fruits",
  },
  {
    title: "Hot Chicken Wings",
    price: "IDR 45.000",
    image: "/bf6d7ad90d30941156dee3813984eb03122742e3.png",
    imageAlt: "Hot Chicken Wings",
  },
];
