import * as FileSystem from 'expo-file-system';
import {
    ADD_PLACE,
    SET_PLACE,
    SET_SAVE_BUTTON_VALUE
} from './typeActions';
import { initSQLite } from '../db/SQLite';
import ENV from '../../../env';


export const addPlace = (titleValue, selectedImage, { lat, lng }) => async dispatch => {
    //Fetch API
    const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${ENV.googleApiKey}`);
    if (!resp.ok) { throw new Error('Wrong resp from google api geocode') };
    const resData = await resp.json();
    if (!resData.results) { throw new Error('Wrong resp from google api geocode') };

    //Split -> saca la "/" del string y la convirte en array. El pop deja el ultimo indice del array. 
    const fileName = selectedImage.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    const address = resData.results[0].formatted_address;
    let dbResult;

    try {
        await FileSystem.moveAsync({
            from: selectedImage,
            to: newPath
        });
        dbResult = await initSQLite('INSERT', titleValue, newPath, address, lat, lng);
        console.log(dbResult);
    } catch (error) {
        console.log("error en SQL");
        throw error;
    }

    dispatch({
        type: ADD_PLACE,
        payload: { id: dbResult.insertId.toString(), titleValue, selectedImage: newPath, address, lat, lng }
    });
}

export const loadPlace = () => async dispatch => {
    let dbResult;

    try {
        dbResult = await initSQLite('SELECT');
        console.log(" Succes! indexAction/loadPlace.js:", dbResult);

    } catch (error) {
        console.log("Error! indexAction/loadPlace.js: ", error);
    }

    dispatch({
        type: SET_PLACE,
        payload: dbResult.rows._array
    });
}

export const setSaveButtonValue = (value) => ({
    type: SET_SAVE_BUTTON_VALUE,
    payload: value
})