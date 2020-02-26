import {
    ADD_PLACE,
    SET_PLACE,
    SET_SAVE_BUTTON_VALUE
} from '../actions/typeActions';

const INITIAL_STATE = {
    places: [],
    saveButtonValue: false
};

const placeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: [
                    ...state.places,
                    {
                        id: action.payload.id,
                        title: action.payload.titleValue,                        
                        image: action.payload.selectedImage,
                        address: action.payload.address,
                        lng: action.payload.lng,
                        lat: action.payload.lat
                    }
                ]
            }
        case SET_PLACE:
            return {
                ...state,
                places: action.payload.map(item => ({
                    id: item.id.toString(),
                    title: item.title,
                    image: item.imageUri,
                    address: item.address,
                    lat: item.lat,
                    lng: item.lng
                }))
            }
        case SET_SAVE_BUTTON_VALUE:
            return{
                ...state,
                saveButtonValue: action.payload
            }
        default:
            return state;
    }
}

export default placeReducer;