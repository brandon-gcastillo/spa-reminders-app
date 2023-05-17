import { ReminderCard } from "./components/index.js";
import current_reminders from "./index.js";

export function App() {
    const root = document.getElementById("root");
    root.innerHTML = "";
    current_reminders.forEach(reminder => {
        root.appendChild(ReminderCard(reminder));
    });
};