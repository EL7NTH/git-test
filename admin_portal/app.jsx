import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { ContentArea } from "./components/ContentArea";

export default function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <ContentArea />
      </div>
    </div>
  );
}
