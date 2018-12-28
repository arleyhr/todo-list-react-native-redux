import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  $imageSize: 50,
  scrollContainer: {
    paddingHorizontal: 20,
  },
  logoutContainer: {
    marginTop: 20,
  },
  userInfo: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoContainer: {
    backgroundColor: '$colors.warmGrey',
    borderRadius: '$imageSize / 2',
    height: '$imageSize',
    width: '$imageSize',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  photo: {
    borderRadius: '$imageSize / 2',
    height: '$imageSize',
    width: '$imageSize',
    resizeMode: 'cover',
  },
  userName: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 14,
  }),
})
