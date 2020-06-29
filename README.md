<div align="center"> 

# Configuração de Ambiente - Aplicação NYCBike React Native com o Google Map usando Expo.io

</div>

<br>

<div align="center">

[![Generic badge](https://img.shields.io/badge/Made%20by-Renan%20Borba-purple.svg)](https://shields.io/) [![Build Status](https://img.shields.io/github/stars/RenanBorba/react-native-nycbike-ambient-test.svg)](https://github.com/RenanBorba/react-native-nycbike-ambient-test) [![Build Status](https://img.shields.io/github/forks/RenanBorba/react-native-nycbike-ambient-test.svg)](https://github.com/RenanBorba/react-native-nycbike-ambient-test) [![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/) [![npm version](https://badge.fury.io/js/react-native.svg)](https://badge.fury.io/js/react-native) [![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

<br>

![citi](https://user-images.githubusercontent.com/48495838/86008856-c57f5480-b9ef-11ea-80d1-5b06fdc59db9.jpeg)

</div>

<br>

Aplicação Mobile desenvolvida em React Native com o Google Map usando o Expo.io para teste, com a integração com os dados públicos do Citi Bike NYC (sistema de compartilhamento de bicicletas), tendo acesso aos ciclistas na região. O aplicativo é voltado para configuração de ambiente de desenvolvimento.

<br><br>

<div align="center">

![citibike](https://user-images.githubusercontent.com/48495838/84694909-5fd79680-af20-11ea-9383-46f1c74bf0a1.png)

</div>

<br><br>

## :rocket: Tecnologias
<ul>
  <li>Expo</li>
  <li>Components</li>
  <li>react-native-maps</li>
  <li>Google Maps Platform API</li>
  <li>Marker</li>
  <li>States</li>
</ul>

<br><br>

## :arrow_forward: Start
<ul>
  <li>npm install</li>
  <li>npm run start / npm start</li>
</ul>

<br><br>

## :punch: Como contribuir
<ul>
  <li>Dê um fork nesse repositório</li>
  <li>Crie a sua branch com a feature</li>
    <ul>
      <li>git checkout -b my-feature</li>
    </ul>
  <li>Commit a sua contribuição</li>
    <ul>
      <li>git commit -m 'feat: My feature'</li>
    </ul>
  <li>Push a sua branch</li>
    <ul>
      <li>git push origin my-feature</li>
    </ul>
</ul>
<br><br><br>

## :mega: Segue abaixo a principal estrutura e interface:

<br><br><br>

## src/components/Map/index.js
```js
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
```

<br><br>

## Interface principal

<div align="center">

![10](https://user-images.githubusercontent.com/48495838/68613381-62ab6e00-049d-11ea-908c-5344f949174f.JPG)

</div>

<br><br>

<div align="center">

![11](https://user-images.githubusercontent.com/48495838/68613382-63440480-049d-11ea-8ab0-9bee4d246b2f.JPG)

</div>

<br><br>
<br>

Citi Bike:
<br>
https://www.citibikenyc.com/
<br><br>

Medium:
<br>
https://medium.com/nycdev/create-a-react-native-app-with-google-map-using-expo-io-68041252023d
<br> https://medium.com/nycdev
