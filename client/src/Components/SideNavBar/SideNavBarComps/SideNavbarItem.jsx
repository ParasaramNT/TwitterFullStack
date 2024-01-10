import "./SideNavBarItem.css";

const SideNavbarItem = ({ text, Icon, active }) => {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SideNavbarItem;
