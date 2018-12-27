import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 20,
  },
  swithContainer: {
    marginVertical: 20,
  },
  dateLabel: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 28,
    color: '$colors.black',
    marginVertical: 14,
  }),
  tasksListContainer: {
    marginBottom: 20,
  },
})
