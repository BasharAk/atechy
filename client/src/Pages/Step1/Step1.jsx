import { nextStep } from '../../utils/pageNav';

const Step1 = ({ state, setState }) => {
  return (
    <>
      <h1> Step 1</h1>
      <button onClick={() => nextStep(state, setState)}>Next Page</button>
    </>
  );
};

export default Step1;
