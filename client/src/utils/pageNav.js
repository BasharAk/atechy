export const nextStep = (state, setState) => {
  setState((state) => ({ ...state, currentStep: state.currentStep + 1 }));
};

export const prevStep = (state, setState) => {
  setState((state) => ({ ...state, currentStep: state.currentStep - 1 }));
};
