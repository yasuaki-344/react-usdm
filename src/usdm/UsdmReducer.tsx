const TYPES = {
  ADD_HIGH_ODER_REQUIREMENT: "ADD_HIGH_ODER_REQUIREMENT",
};

type UsdmAction = {
  type: string;
  payload?: {
    value: string;
  };
};

// eslint-disable-next-line
type RequirementSpecification = {
  requirements: string[];
};

type UpperRequirement = {
  content: string;
};

// eslint-disable-next-line
export default function usdmReducer(state: any, action: any): any {
  switch (action.type) {
    case TYPES.ADD_HIGH_ODER_REQUIREMENT:
      return {
        ...state,
        requirements: [...state.requirements, {}],
      };
    default:
      // eslint-disable-next-line
      console.debug("action type not found");
      break;
  }
}

export const addHighOrderRequirement = (): UsdmAction => {
  return { type: TYPES.ADD_HIGH_ODER_REQUIREMENT };
};
