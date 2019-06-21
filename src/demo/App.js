import React from 'react';
import './App.css'
import { Button, Input } from '../lib';

const App = () => (
  <div>
    <section>
      <Button type="primary">Primary</Button >
      <Button type="danger">Danger</Button >
      <Button type="text">Text Button</Button >
      <Button disabled type="primary">Disabled</Button >
    </section>
    <section>
      <Input>Hi</Input>
    </section>
  </div>
);

export default App;
