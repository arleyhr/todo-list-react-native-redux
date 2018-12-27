import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  $colorButtonWidth: 40,
  defaultColor: () => EStyleSheet.value('$colors.softBlue'),
  container: {
    position: 'relative',
  },
  inputLabel: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 14,
    color: '$colors.black',
  }),
  scrollView: {
    height: 200,
    position: 'absolute',
    width: '100%',
    top: -120,
    borderColor: '$colors.warmGrey',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: '$colors.white',
  },
  colorButton: {
    borderColor: '$colors.warmGrey',
    borderWidth: 1,
    width: '$colorButtonWidth',
    height: '$colorButtonWidth',
    borderRadius: '$colorButtonWidth / 2',
    margin: 10,
  },
  colorBox: {
    paddingHorizontal: 2,
    paddingVertical: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },
  color: {
    borderColor: '$colors.warmGrey',
    borderWidth: 1,
    width: '$colorButtonWidth',
    height: '$colorButtonWidth',
    borderRadius: '$colorButtonWidth / 2',
    margin: 4,
  },
  selectedColor: {
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
