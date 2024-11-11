import React from "react";
import { Button } from "./components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

function App() {

  return (
    <SidebarProvider>
      <div style={{ display: "flex" }}>
        <AppSidebar />
        <main style={{ marginLeft: "16rem", padding: "1rem" }}>
          <SidebarTrigger />
          <h1>Welcome to TripGen!</h1>
          <Button>Subscribe</Button>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default App;
