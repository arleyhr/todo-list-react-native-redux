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
    top: -100,
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
    backgroundColor: '$colors.white',
    borderRadius: 6,
    padding: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
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
