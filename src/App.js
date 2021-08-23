import { useState } from 'react';

import Hello from './components/hello';

function App() {
  const [ showMassage, setShowMassage] = useState(false);

  function buttonHandler(){
    setShowMassage(true);
  }

  return (
    <div>
      <div className='interactive-btn'>
        <button className='btn' onClick={buttonHandler}>Click Here!</button>
      </div>
      { showMassage && <Hello /> }
    </div>
  );
}

export default App;
