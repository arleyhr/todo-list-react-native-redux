import EStyleSheet from 'react-native-extended-stylesheet'

const baseButton = {
  alignSelf: 'center',
  borderRadius: 3,
  flexDirection: 'row',
}

export default EStyleSheet.create({
  defaultPrimaryColor: () => EStyleSheet.value('$colors.softBlue'),
  defaultActiveColor: () => EStyleSheet.value('$colors.darkSlateBlue'),
  button: {
    backgroundColor: '$colors.softBlue',
    ...baseButton,
  },
  buttonActive: {
    backgroundColor: '$colors.darkSlateBlue',
    ...baseButton,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    color: '$colors.white',
    fontSize: 14,
    letterSpacing: 1,
    textAlign: 'center',
  }),
  elevation: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
})
