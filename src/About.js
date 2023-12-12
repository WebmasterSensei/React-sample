import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const items = [
  {
    key: '1',
    label: 'Tab 1',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Tab 2',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3',
  },
];

function About() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
        <div className='pads'>
             <Tabs defaultActiveKey="1" onChange={onChange}>
                    {items.map((item) => (
                    <TabPane tab={item.label} key={item.key}>
                        {item.children}
                    </TabPane>
                    ))}
                </Tabs>
        </div>
     
    </div>
  );
}

export default About;
