export const sampleAction = ({ dispatch, data } = {}) =>
  dispatch({ type: 'ON_UPDATE_FORM_DATA', data });

export const saveProduct = ( dispatch, data ) => {
    // console.log('saving product', data);
    dispatch({ type: 'ON_SAVE_PRODUCT', data });
}

  