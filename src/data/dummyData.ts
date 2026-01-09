import type { itemsTypes } from "@/types/dataTypes";
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
