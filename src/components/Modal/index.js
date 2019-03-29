import React, { useState, useEffect } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MarkerActions } from '~/store/ducks/markers';
import { Creators as ModalActions } from '~/store/ducks/modal';

import styles from './styles';

const Modal = ({
  visible, closeModal, coordinates, addMarkerRequest, loading, error,
}) => {
  const [user, setUser] = useState('');
  const [err, setErr] = useState(false);

  /*useEffect(() => {
    if (error) {
      setErr(error);
    }
  }, [error]);*/

  async function handleSave() {
    await addMarkerRequest({ user, coordinates });
    setUser('');
  }

  async function handleClose() {
    await closeModal();
    setErr(false);
    setUser('');
  }

  return (
    <View style={{ ...styles.screen, display: visible ? 'flex' : 'none' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Adicionar novo local</Text>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            {error && (
              <View style={styles.error}>
                <Text style={styles.errorText}>Oops... Algo deu errado</Text>
              </View>
            )}
            <TextInput
              autoFocus
              style={styles.input}
              value={user}
              onChangeText={value => setUser(value)}
              placeholder="Usuário no Github"
              autoCapitalize="none"
              autoCorrect={false}
              onSubmitEditing={handleSave}
            />
          </>
        )}
        <View style={styles.buttons}>
          <TouchableOpacity style={{ ...styles.button, ...styles.btnCancel }} onPress={handleClose}>
            <Text style={styles.btnText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.button, ...styles.btnSave }} onPress={handleSave}>
            <Text style={styles.btnText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  visible: state.modal.visible,
  coordinates: state.modal.coordinates,
  loading: state.markers.loading,
  error: state.markers.error,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...MarkerActions, ...ModalActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
