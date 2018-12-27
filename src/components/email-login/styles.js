import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  $inputsMargin: 20,
  container: {
    paddingHorizontal: 20,
    paddingTop: 27,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '$inputsMargin',
  },
  headText: () => ({
    ...EStyleSheet.value('$fonts.ralewayBold'),
    color: '$colors.black',
    fontSize: 24,
    paddingRight: 10,
  }),
  headLine: {
    backgroundColor: '$colors.warmGrey',
    height: 1,
    flex: 1,
  },
  inputContainer: {
    marginBottom: '$inputsMargin',
  },
  registerText: () => ({
    ...EStyleSheet.value('$fonts.ralewayBold'),
    color: '$colors.softBlue',
    marginTop: 15,
    textAlign: 'center',
  }),
})
