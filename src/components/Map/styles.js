import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#8854d0',
    backgroundColor: '#a55eea',
  },
  callout: {
    backgroundColor: '#FFF',
    width: Dimensions.get('screen').width - 48,
    padding: 12,
    marginBottom: 8,
    borderRadius: 3,
  },
  calloutName: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
  },
  calloutBio: {
    color: '#666',
  },
});

export default styles;
