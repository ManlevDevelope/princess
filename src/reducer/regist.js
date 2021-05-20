import produce from '../utils';
import {
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
} from '../Actions';
const initialState = {
  uploadImageLoading: false,
  uploadImageDone: false,
  uploadImageError: null,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        break;
      case UPLOAD_IMAGE_SUCCESS:
        draft.uploadImageDone = true;
        draft.uploadImageLoading = false;
        draft.uploadImageError = null;
        break;
      case UPLOAD_IMAGE_FAILURE:
        draft.uploadImageError = action.error;
        draft.uploadImageLoading = false;
        break;
      default:
        break;
    }
  });

export default reducer;
