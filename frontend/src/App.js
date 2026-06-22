import "@/App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/components/Portfolio";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="fredy-theme">
      <div className="App" data-testid="app-root">
        <Portfolio />
        <Toaster position="bottom-center" />
      </div>
    </ThemeProvider>
  );
}

export default App;
