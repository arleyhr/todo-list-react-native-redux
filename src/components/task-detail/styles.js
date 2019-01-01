import EStyleSheet from 'react-native-extended-stylesheet'

const regularText = () => ({
  ...EStyleSheet.value('$fonts.ralewayBold'),
  color: '$colors.black',
})

const directionRow = {
  flexDirection: 'row',
  alignItems: 'center',
}

export default EStyleSheet.create({
  donePrimary: () => EStyleSheet.value('$colors.greenishTeal'),
  doneActive: () => EStyleSheet.value('$colors.teal'),
  deletePrimary: () => EStyleSheet.value('$colors.grapefruit'),
  deleteActive: () => EStyleSheet.value('$colors.chiGong'),
  container: {},
  headContainer: {
    ...directionRow,
    marginBottom: 20,
  },
  headColor: {
    borderRadius: 15 / 2,
    height: 15,
    width: 15,
    marginRight: 10,
  },
  headText: () => ({
    ...regularText(),
    fontSize: 18,
    paddingRight: 10,
  }),
  headTextDone: {
    textDecorationLine: 'line-through',
  },
  headLine: {
    backgroundColor: '$colors.warmGrey',
    height: 1,
    flex: 1,
  },
  subHeadContainer: {
    ...directionRow,
  },
  calendarIconContainer: {
    height: 35,
    width: 35,
    backgroundColor: '$colors.white',
    borderRadius: 3,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  calendarIcon: {
    color: '$colors.gunmetal',
    fontSize: 25,
  },
  subHeadText: () => ({
    ...regularText(),
    fontSize: 14,
    paddingRight: 10,
  }),
  descriptionContainer: {
    marginVertical: 18,
  },
  description: () => ({
    ...regularText(),
    color: '$colors.gunmetal',
    fontSize: 14,
    lineHeight: 20,
  }),
  statusContainer: {
    ...directionRow,
  },
  checkIcon: {
    color: '$colors.greenishTeal',
    fontSize: 20,
    marginRight: 10,
  },
  statusText: () => ({
    ...regularText(),
    fontSize: 14,
  }),
  actions: {
    ...directionRow,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionsCenter: {
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 12,
  },
})
