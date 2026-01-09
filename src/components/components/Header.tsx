import SearchInput from "./SearchInput";
import { Menu } from "./Menu";
import Notification from "./Notification";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 md:py-7 borderBottom md:px-6 w-full h-full">
      <SearchInput placeholder="Search" />
      <div className="flex items-center gap-4">
        <Menu />
        <Notification />
      </div>
    </div>
  );
};

export default Header;
