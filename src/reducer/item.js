import produce from '../utils';
import {
  UPLOAD_ITEM_FAILURE,
  UPLOAD_ITEM_REQUEST,
  UPLOAD_ITEM_SUCCESS,
} from '../Actions';
const initialState = {
  uploadItemLoading: false,
  uploadItemDone: false,
  uploadItemError: null,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPLOAD_ITEM_REQUEST:
        draft.uploadItemLoading = true;
        draft.uploadItemDone = false;
        break;
      case UPLOAD_ITEM_SUCCESS:
        draft.uploadItemDone = true;
        draft.uploadItemLoading = false;
        draft.uploadItemError = null;
        break;
      case UPLOAD_ITEM_FAILURE:
        draft.uploadItemError = action.error;
        draft.uploadItemLoading = false;
        break;
      default:
        break;
    }
  });

export default reducer;
