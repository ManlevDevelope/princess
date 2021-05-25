import produce from '../utils';
import {
  GIVE_ITEM_FAILURE,
  GIVE_ITEM_REQUEST,
  GIVE_ITEM_SUCCESS,
  GIVE_REFRESH,
  UPLOAD_ITEM_FAILURE,
  UPLOAD_ITEM_REQUEST,
  UPLOAD_ITEM_SUCCESS,
  UPLOAD_REFRESH,
} from '../Actions';
const initialState = {
  uploadItemLoading: false,
  uploadItemDone: false,
  uploadItemError: null,
  giveItemLoading: false,
  giveItemDone: false,
  giveItemError: null,
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
      case UPLOAD_REFRESH:
        draft.uploadItemDone = false;
        break;
      case GIVE_ITEM_REQUEST:
        draft.giveItemLoading = true;
        draft.giveItemDone = false;
        break;
      case GIVE_ITEM_SUCCESS:
        draft.giveItemDone = true;
        draft.giveItemLoading = false;
        draft.giveItemError = null;
        break;
      case GIVE_ITEM_FAILURE:
        draft.giveItemError = action.error;
        draft.giveItemLoading = false;
        break;
      case GIVE_REFRESH:
        draft.giveItemDone = false;
        break;
      default:
        break;
    }
  });

export default reducer;
