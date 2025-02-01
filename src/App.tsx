import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/dashboard/Navigation";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="/*"
              element={
                <div className="flex">
                  <Navigation />
                  <main className="flex-1 ml-64 p-8">
                    <Routes>
                      <Route path="/dashboard" element={<Index />} />
                      <Route path="/symptoms" element={<div>Symptom Tracker</div>} />
                      <Route path="/reports" element={<div>Reports</div>} />
                      <Route path="/lifestyle" element={<div>Lifestyle</div>} />
                      <Route path="/chat" element={<div>Health Chat</div>} />
                      <Route path="/appointments" element={<div>Appointments</div>} />
                      <Route path="/notifications" element={<div>Notifications</div>} />
                      <Route path="/profile" element={<div>Profile</div>} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              }
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;