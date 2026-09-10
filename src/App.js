import "@/App.css";
import Jesr from "@/pages/Jesr";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App font-arabic">
      <Jesr />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
