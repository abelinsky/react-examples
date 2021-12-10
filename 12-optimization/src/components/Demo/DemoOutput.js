import React from 'react';
import MyParagraph from './MeParagraph';

const DemoOutput = (props) => {
  console.log('DEMO RUNNING');

  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
