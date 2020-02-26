import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { loadPlace } from '../../../api/actions/indexActions';
import PlaceItem from '../../widgets/place-item/PlaceItem';
import styles from './placesListPage.styles';

const PlacesListPage = () => {
    const { places } = useSelector(store => store.places);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPlace());
    }, [dispatch])

    return (
        <FlatList data={places} keyExtractor={item => item.id} renderItem={({ item }) => <PlaceItem {...item} />} />
    )
}

export default PlacesListPage;