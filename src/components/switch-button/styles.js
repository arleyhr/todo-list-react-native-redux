import EStyleSheet from 'react-native-extended-stylesheet'

const baseButton = {
  height: '$buttonHeight',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
}

export default EStyleSheet.create({
  $buttonHeight: 50,
  $containerWidth: '80%',
  defaultPrimaryColor: () => EStyleSheet.value('$colors.softBlue'),
  defaultActiveColor: () => EStyleSheet.value('$colors.darkSlateBlue'),
  container: {
    width: '$containerWidth',
    borderRadius: '$containerWidth / 2',
    backgroundColor: '$colors.white',
    borderColor: '$colors.warmGrey',
    borderWidth: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    borderRadius: '$containerWidth / 2 / 2',
    ...baseButton,
    width: '$containerWidth * 0.55',
  },
  buttonActive: {
    backgroundColor: '$colors.softBlue',
    borderRadius: '$containerWidth / 2 / 2',
    ...baseButton,
  },
  rightButton: {
    marginLeft: '$containerWidth * -0.10',
  },
  textActive: {
    color: '$colors.white',
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
})
