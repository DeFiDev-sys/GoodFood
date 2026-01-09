import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppSidebar } from "./components/components/AppSideBar.tsx";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-screen w-full">
          <SidebarTrigger className="md:hidden text-[#5A6ACF]" />
          <App />
        </main>
      </SidebarProvider>
    </>
  </StrictMode>
);
