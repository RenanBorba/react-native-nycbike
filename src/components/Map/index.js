import React, { Component } from 'react';
//import { MapView } from 'expo';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 40.76727216,
            longitude: -73.99392888,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {this.state.isLoading ? null : this.state.markers.map((marker, index) => {
            const coords = {
              latitude: marker.latitude,
              longitude: marker.longitude
            };

            const metadata = `Status: ${marker.statusValue}`;

            return (
              <MapView.Marker
                key={ index }
                coordinate={ coords }
                title={ marker.stationName }
                description={ metadata }
              />
            );
          })}
        </MapView>
      </View>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      markers: []
    };
  }

  fetchMarkerData() {
    fetch('https://feeds.citibikenyc.com/stations/stations.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          markers: responseJson.stationBeanList
        });
      })
      .catch((error) => {
        console.log(error);
    });
  };

  componentDidMount() {
    this.fetchMarkerData();
  };
};
