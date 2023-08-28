import React, { useState } from 'react';
import './Tabs.css';
const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        <textarea
          className="content-textarea"
          value={items[activeTab].content}
          readOnly
        />
      </div>
    </div>
  );
};

export default Tabs;
