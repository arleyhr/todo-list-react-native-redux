import EStyleSheet from 'react-native-extended-stylesheet'

const baseButton = {
  width: '$buttonWidth',
  height: '$buttonWidth',
  borderRadius: '$buttonWidth / 2',
  justifyContent: 'center',
  alignItems: 'center',
}

export default EStyleSheet.create({
  $buttonWidth: 58,
  button: {
    backgroundColor: '$colors.softBlue',
    ...baseButton,
  },
  buttonActive: {
    backgroundColor: '$colors.darkSlateBlue',
    ...baseButton,
  },
  icon: {
    color: '$colors.white',
    fontSize: 24,
  },
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
