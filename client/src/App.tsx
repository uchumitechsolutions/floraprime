import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Helmet>
        <title>Flora Prime Properties - Turning Your Land & Home Dreams into Reality</title>
        <meta name="description" content="Flora Prime Properties - Premier real estate company in Kenya specializing in buying, selling plots and houses. Turn your land and home dreams into reality." />
        <meta name="keywords" content="Kenya real estate, plots for sale, houses for sale, land Kenya, property investment, Nairobi real estate" />
        <meta name="author" content="Flora Prime Properties" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Flora Prime Properties - Premium Real Estate in Kenya" />
        <meta property="og:description" content="Discover premium properties in prime locations across Kenya. Professional real estate services with personalized expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:image" content="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flora Prime Properties - Premium Real Estate in Kenya" />
        <meta name="twitter:description" content="Discover premium properties in prime locations across Kenya. Professional real estate services with personalized expertise." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630" />
      </Helmet>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
