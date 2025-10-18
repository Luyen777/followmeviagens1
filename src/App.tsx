import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import IlhasMaldivas from "./pages/IlhasMaldivas";
import ResortDetail from "./pages/ResortDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Dubai from "./pages/Dubai";
import Tailandia from "./pages/Tailandia";
import India from "./pages/India";
import AfricaDoSulLanding from "./pages/AfricaDoSulLanding";
import AfricaDoSulSafariCapeTown from "./pages/AfricaDoSulSafariCapeTown";
import AfricaDoSulGardenRoute from "./pages/AfricaDoSulGardenRoute";
import Seychelles from "./pages/Seychelles";
import Egito from "./pages/Egito";
import Vietna from "./pages/Vietna";
import Turquia from "./pages/Turquia";
import Grecia from "./pages/Grecia";
import Bali from "./pages/Bali";
import Taiti from "./pages/Taiti";
import Australia from "./pages/Australia";
import NovaZelandia from "./pages/NovaZelandia";
import IlhasMauricio from "./pages/IlhasMauricio";
import Fiji from "./pages/Fiji";
import Camboja from "./pages/Camboja";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ilhas-maldivas" element={<IlhasMaldivas />} />
          <Route path="/ilhas-maldivas/:slug" element={<ResortDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/tailandia" element={<Tailandia />} />
          <Route path="/india" element={<India />} />
          <Route path="/africa-do-sul" element={<AfricaDoSulLanding />} />
          <Route path="/africa-do-sul/safari-cape-town-7-noites" element={<AfricaDoSulSafariCapeTown />} />
          <Route path="/africa-do-sul/garden-route-explorer" element={<AfricaDoSulGardenRoute />} />
          <Route path="/seychelles" element={<Seychelles />} />
          <Route path="/egito" element={<Egito />} />
          <Route path="/vietna" element={<Vietna />} />
          <Route path="/turquia" element={<Turquia />} />
          <Route path="/grecia" element={<Grecia />} />
          <Route path="/bali" element={<Bali />} />
          <Route path="/taiti" element={<Taiti />} />
          <Route path="/australia" element={<Australia />} />
          <Route path="/nova-zelandia" element={<NovaZelandia />} />
          <Route path="/ilhas-mauricio" element={<IlhasMauricio />} />
          <Route path="/fiji" element={<Fiji />} />
          <Route path="/camboja" element={<Camboja />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
