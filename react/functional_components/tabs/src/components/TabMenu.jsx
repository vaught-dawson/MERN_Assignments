import { useState } from "react";
import TabButton from "./TabButton";

const TabMenu = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tab-menu">
      {tabs.map(({ name }, key) => (
        <TabButton
          name={name}
          key={key}
          index={key}
          setActiveTab={setActiveTab}
          isActive={activeTab === key}
          //   callback={() => alert(`Callback from tab ${name}`)}
        />
      ))}
      <div className="content">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabMenu;
