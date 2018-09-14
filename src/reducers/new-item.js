const newItem = (state = {}, action) => {
    switch (action.type) {
      case 'SENDING_TEXT':
        console.log('SENDING_TEXT', action);
        const newState = {
          ...state,
          text: action.data.text
        };
        console.log('newState',newState);
        return newState;
        
      default:
        console.log('default -> action:', action.type);
        return state
    }
};

export default newItem
