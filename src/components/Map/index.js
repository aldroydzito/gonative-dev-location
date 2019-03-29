import { MAPBOX_TOKEN } from 'react-native-dotenv';

import React from 'react';
import { Image, Text } from 'react-native';

import MapboxGL from '@mapbox/react-native-mapbox-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '~/store/ducks/modal';
import { Creators as MarkersActions } from '~/store/ducks/markers';

import styles from './styles';

MapboxGL.setAccessToken(MAPBOX_TOKEN);

const Map = ({ openModal, markers, reset }) => {
  function handlePress(e) {
    reset();
    openModal(e.geometry.coordinates);
  }

  return (
    <MapboxGL.MapView
      onLongPress={handlePress}
      centerCoordinate={[-49.6451598, -27.2177659]}
      latitude
      style={styles.screen}
      styleURL={MapboxGL.StyleURL.Dark}
      zoomLevel={15}
    >
      {markers.list.map(marker => (
        <MapboxGL.PointAnnotation
          title={marker.login}
          key={marker.id}
          id={marker.login}
          coordinate={marker.coordinates}
        >
          <Image style={styles.avatar} source={{ uri: marker.avatar_url }} />
          <MapboxGL.Callout style={styles.callout}>
            <Text style={styles.calloutName}>{marker.name || marker.login}</Text>
            <Text style={styles.calloutBio}>{marker.bio}</Text>
          </MapboxGL.Callout>
        </MapboxGL.PointAnnotation>
      ))}
    </MapboxGL.MapView>
  );
};

const mapStateToProps = state => ({
  markers: state.markers,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...MarkersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
