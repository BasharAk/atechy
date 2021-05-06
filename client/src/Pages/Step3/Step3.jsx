import { prevStep } from '../../utils/pageNav';

const Step3 = ({ state, setState }) => {
  return (
    <>
      <h1> Step 3</h1>
      <button onClick={() => prevStep(state, setState)}>Previous Page</button>
    </>
  );
};

export default Step3;
