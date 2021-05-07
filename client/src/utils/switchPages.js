import Step1 from '../Pages/Step1/Step1';
import Step2 from '../Pages/Step2/Step2';
import Step3 from '../Pages/Step3/Step3';
import Step4 from '../Pages/Step4/Step4';

import Step5 from '../Pages/Step5/Step5';
//import Step6 from '../Pages/Step6/Step6';
//import Step7 from '../Pages/Step7/Step7';
//import Step8 from '../Pages/Step8/Step8';
//import Step9 from '../Pages/Step9/Step9';

const switchPages = (state, setState) => {
  switch (state.currentStep) {
    case 1:
      return <Step1 state={state} setState={setState} />;
    case 2:
      return <Step2 state={state} setState={setState} />;
    case 3:
      return <Step3 state={state} setState={setState} />;
    case 4:
      return <Step4 state={state} setState={setState} />;

    case 5:
      return <Step5 state={state} setState={setState} />;
    /*
    case 6:
      return <Step6 state={state} setState={setState} />;
    case 7:
      return <Step7 state={state} setState={setState} />;
    case 8:
      return <Step8 state={state} setState={setState} />;
    case 9:
      return <Step9 state={state} setState={setState} />;
*/
    default:
      return <Step1 state={state} setState={setState} />;
  }
};

export default switchPages;
