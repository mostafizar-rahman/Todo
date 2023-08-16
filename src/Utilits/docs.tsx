    // --------------Start Date functionlity and error hindling
    // case actionTypes.STARTDATE:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (action.paylod > "31") {
    //     return { ...state, error: "Can not input gaterthen  30" };
    //   } else if (defaultDate > action.paylod) {
    //     return { ...state, error: "Can not input lessthen today date" };
    //   } else {
    //     return {
    //       ...state,

    //       startDate: action.paylod,
    //       error: "",
    //     };
    //   }

    // case actionTypes.STARTMONTH:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (defaultMonth > action.paylod) {
    //     return { ...state, error: "Can not input lessthen today date" };
    //   } else if (action.paylod > "12") {
    //     return { ...state, error: "Can not input gaterthen  12" };
    //   } else {
    //     return {
    //       ...state,
    //       startMonth: action.paylod,
    //       error: "",
    //     };
    //   }
    // case actionTypes.STARTYEARS:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (defaultYear > action.paylod) {
    //     return { ...state, error: "Can not input lessthen today date" };
    //   } else {
    //     return {
    //       ...state,
    //       startYear: action.paylod,
    //       error: "",
    //     };
    //   }

    // --------------End Date functionlity and error hindling
    // case actionTypes.END_DATE:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (defaultDate > action.paylod) {
    //     return { ...state, error: "can" };
    //   }else if (action.paylod > "30") {
    //     return { ...state, error: "Can not input gaterthen  12" };
    //   }
    //    else if (state.startDate > action.paylod) {
    //     return { ...state, error: "can to" };
    //   } else {
    //     return {
    //       ...state,
    //       endDate: action.paylod,
    //       error: "",
    //     };
    //   }

    // case actionTypes.END_MONTH:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (defaultMonth > action.paylod) {
    //     return { ...state, error: "can" };
    //   }else if (action.paylod > "12") {
    //     return { ...state, error: "Can not input gaterthen  12" };
    //   }
    //    else if (state.startMonth > action.paylod) {
    //     return { ...state, error: "can to" };
    //   } else {
    //     return {
    //       ...state,
    //       endMonth: action.paylod,
    //       error:""
    //     };
    //   }
    // case actionTypes.END_YEAR:
    //   if (action.paylod.length === 1) {
    //     return { ...state, error: "2 Number Requerid" };
    //   } else if (action.paylod.length === 0) {
    //     return { ...state, error: "" };
    //   } else if (defaultYear > action.paylod) {
    //     return { ...state, error: "can" };
    //   } else if (state.startMonth > action.paylod) {
    //     return { ...state, error: "can to" };
    //   } else {
    //     return {
    //       ...state,
    //       endYear: action.paylod,
    //       error:""
    //     };
    //   }