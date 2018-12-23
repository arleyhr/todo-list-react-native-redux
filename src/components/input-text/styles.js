import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    height: 50,
  },
  inputLabel: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 14,
    color: '$colors.black',
  }),
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '$colors.warmGrey',
    height: 30,
    paddingLeft: 6,
    paddingVertical: 6,
  },
  inputFocus: {
    borderBottomColor: '$colors.softBlue',
  },
})
