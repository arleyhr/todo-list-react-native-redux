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
  inputsDate: {
    position: 'relative',
  },
  inputDate: {
    width: '46%',
  },
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
  },
})
