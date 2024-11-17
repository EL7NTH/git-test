import { useState } from "react";

export function ContentArea() {
  const [section, setSection] = useState("Notifications");

  const renderContent = () => {
    if (section === "Notifications") {
      return <p>Manage notifications here...</p>;
    } else if (section === "Rewards") {
      return <p>Manage rewards here...</p>;
    }
    return <p>Select a section from the menu.</p>;
  };

  return (
    <main className="flex-1 p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{section}</h2>
      {renderContent()}
    </main>
  );
}
