const Step3 = ({ state, setState }) => {
  return (
    <>
      <h1> Step 3</h1>
      <button onClick={() => setState({...state,currentStep: state.currentStep - 1})}>Previous Page</button>
    </>
  );
};

export default Step3;
