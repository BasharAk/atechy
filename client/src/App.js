import { useState } from 'react';
import switchPages from './utils/switchPages';

const App = () => {
  const [state, setState] = useState({ currentStep: 1 });

  return <>{switchPages(state, setState)}</>;
};

export default App;
