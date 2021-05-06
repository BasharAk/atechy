import { nextStep, prevStep } from '../../utils/pageNav';

const Step2 = ({ state, setState }) => {
  return (
    <>
      <h1> Step 2</h1>
      <button onClick={() => prevStep(state, setState)}>Previous Page</button>
      <button onClick={() => nextStep(state, setState)}>Next Page</button>
    </>
  );
};

export default Step2;
