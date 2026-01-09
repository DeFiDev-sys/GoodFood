import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items, otherItems, sidebarHeaderData } from "@/data/dummyData";
import { Button } from "../ui/button";
import { useState } from "react";

export function AppSidebar() {
  const [active, setActive] = useState<string>("Dashboard");
  return (
    <Sidebar className="border-r-[#F1F2F7] border-r-2 bg-[#F1F2F7]">
      <SidebarContent>
        <SidebarHeader className="borderBottom p-2 md:p-7.5">
          <div className="flex items-center gap-2">
            <div className="py-2 px-4 bg-[#5A67BA] text-white font-bold text-2xl rounded-full">
              {sidebarHeaderData.headerName.toUpperCase().split("")[0]}
            </div>
            <div className="text-[#5A67BA] font-bold">
              {sidebarHeaderData.headerName}
            </div>
          </div>
        </SidebarHeader>
        <div className="px-6 text-[#C8CBD9] text-sm">MENU</div>
        <SidebarMenu className="px-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title} className="p-2">
              <Button
                asChild
                className={`w-full h-10 hover:bg-[#C8CBD9] hover:text-[#5A6ACF] transition-all duration-300 ${
                  active === item.title
                    ? "bg-[#C8CBD9] text-[#5A6ACF]"
                    : "bg-[#F1F2F7] text-[#C8CBD9]"
                }`}
                onClick={() => setActive(item.title)}
              >
                <a
                  href={item.url}
                  className="flex items-center gap-2 justify-start w-full h-10"
                >
                  <item.icon />
                  {item.title}
                </a>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <div className="px-6 text-[#C8CBD9] text-sm">OTHERS</div>
        <SidebarMenu>
          {otherItems.map((item) => (
            <SidebarMenuItem key={item.title} className="p-2">
              <Button
                asChild
                className={`w-full h-10 hover:bg-[#C8CBD9] hover:text-[#5A6ACF] transition-all duration-300 ${
                  active === item.title
                    ? "bg-[#C8CBD9] text-[#5A6ACF]"
                    : "bg-[#F1F2F7] text-[#C8CBD9]"
                }`}
                onClick={() => setActive(item.title)}
              >
                <a
                  href={item.url}
                  className="flex items-center gap-2 justify-start w-full h-10"
                >
                  <item.icon />
                  {item.title}
                </a>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
