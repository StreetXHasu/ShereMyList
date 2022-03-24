import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
  return (
    <div className="App">
        <p> My first APP!</p>
    </div>
  );
});

export default App;
