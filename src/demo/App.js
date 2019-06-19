import React from 'react';
import { Button } from '../lib';

const App = () => (
  <div>
    <Button onClick={() => console.log("clicked")} >some text</Button >
  </div>
);

export default App;
