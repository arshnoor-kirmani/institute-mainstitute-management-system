import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="w-screen h-screen bg-gray-700 flex item-center">
      <h1 className="text-mint-500 italic bg-[#dee2e6] p-4 rounded-2xl flex justify-center w-screen h-[6rem]">
        Arshnoor Kirmani
      </h1>
    </div>
  </StrictMode>
);
