import EStyleSheet from 'react-native-extended-stylesheet'

const baseButton = {
  width: '80%',
  maxWidth: '$maxButtonWidth',
  height: '$buttonHeight',
  alignSelf: 'center',
  borderRadius: 3,
  flexDirection: 'row',
  marginVertical: 5,
}

export default EStyleSheet.create({
  $maxButtonWidth: 280,
  $buttonHeight: 50,
  button: {
    backgroundColor: '$colors.softBlue',
    ...baseButton,
  },
  buttonActive: {
    backgroundColor: '$colors.darkSlateBlue',
    ...baseButton,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '$buttonHeight',
    width: '$buttonHeight',
  },
  icon: {
    color: '$colors.white',
    fontSize: 24,
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
  }),
  elevation: {
    shadowColor: '$colors.softBlue',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
})
