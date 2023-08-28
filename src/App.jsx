import React,{useState} from "react";
import Tabs from "./components/TabComponent";
import { Provider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
const engine = new Styletron();
function App() {
  const tabsData = [
    { label: 'Tab 1', content: 'Content for Tab 1', onClick: () => console.log('Tab 1 clicked') },
    { label: 'Tab 2', content: 'Content for Tab 2', onClick: () => console.log('Tab 2 clicked') },
    { label: 'Tab 3', content: 'Content for Tab 3' },
  ];

  return (
    <div>
      <h1>Tab Component Example</h1>
      <Tabs items={tabsData} />
    </div>

  );
}

export default App;