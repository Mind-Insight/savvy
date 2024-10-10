import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import ScreenWithHeaderAndFooter from "components/ScreenWithHeaderAndFooter"

const Maps = () => {
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
  });
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
    })();
  }, []);

  const addMarker = () => {
    const newMarker = {
      latitude: location.latitude,
      longitude: location.longitude,
      key: Date.now().toString(),
    };
    setMarkers([...markers, newMarker]);
  };

  const handleInputChange = (text) => {
    setInputText(text);
    const [lat, long] = text.split(',').map(Number);
    if (!isNaN(lat) && !isNaN(long)) {
      setLocation({ latitude: lat, longitude: long });
    }
  };

  return (
      <ScreenWithHeaderAndFooter>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Введите координаты (lat, long)"
            value={inputText}
            onChangeText={handleInputChange}
          />
          <Button title="Добавить метку" onPress={addMarker} />
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {markers.map((marker) => (
              <Marker key={marker.key} coordinate={marker} />
            ))}
            <Marker coordinate={location} pinColor="blue" />
          </MapView>
        </View>
    </ScreenWithHeaderAndFooter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 8,
  },
  map: {
    flex: 1,
  },
});

export default Maps;