import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="relative">
      <Bell fill="#B0C3CC" stroke="#B0C3CC" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
    </div>
  );
};

export default Notification;
