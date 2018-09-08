const newItem = (state = [], action) => {
    switch (action.type) {
      case 'ON_INPUT_EDIT':
        return [
          ...state,
          {
            text: action.text
          }
        ]
      default:
        return state
    }
};

export default newItem
