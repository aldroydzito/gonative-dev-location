import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,

    width: '100%',
    height: '100%',

    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.45)',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 24,
    borderRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  error: {
    marginBottom: 20,
    backgroundColor: '#fc5c65',
    width: '100%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#eb3b5a',
  },
  errorText: {
    color: 'rgba(255, 255, 255, .8)',
  },
  input: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#EEE',
    width: '100%',
    padding: 16,
  },
  buttons: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 3,
    color: 'white',
    alignItems: 'center',
  },
  btnCancel: {
    marginRight: 6,
    backgroundColor: '#AAA',
  },
  btnSave: {
    marginLeft: 6,
    backgroundColor: '#2ecc71',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
