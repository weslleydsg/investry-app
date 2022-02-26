import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  holdingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holdingItemInfo: {
    flexShrink: 1,
  },
  holdingItemPrice: {
    alignSelf: 'center',
  },
  holdingItemBold: {
    fontWeight: 'bold',
  },
});
