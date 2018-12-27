import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    height: 48,
    width: '96%',
    backgroundColor: '$colors.white',
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  iconContainer: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateContainer: {
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    color: '$colors.white',
    fontSize: 20,
  },
  doneIcon: {
    color: '$colors.greenishTeal',
  },
  textItem: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 14,
    color: '$colors.black',
    flex: 1,
    textAlign: 'left',
  }),
  textDone: {
    textDecorationLine: 'line-through',
  },
  date: () => ({
    ...EStyleSheet.value('$fonts.raleway'),
    fontSize: 14,
    color: '$colors.black',
  }),
})
