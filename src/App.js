import { useState } from 'react';

import Hello from './components/hello';

function App() {
  const [ showMassage, setShowMassage] = useState(false);

  function buttonHandler(){
    setShowMassage(true);
  }

  return (
    <div>
      <button className='btn' onClick={buttonHandler}>Click Here!</button>
      { showMassage && <Hello />}
    </div>
  );
}

export default App;
