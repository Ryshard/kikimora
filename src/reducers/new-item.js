const newItem = (state = {}, action) => {
    switch (action.type) {
      case 'ON_INPUT_EDIT':
        console.log('ON_INPUT_EDIT');
        return {
          ...state,
          text: action.text
        }
      default:
        console.log('default -> action:', action.type);
        return state
    }
};

export default newItem
