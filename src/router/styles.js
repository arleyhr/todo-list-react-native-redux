import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  scene: {
    backgroundColor: '$colors.paleGrey',
  },
  inactiveTintColor: () => EStyleSheet.value('$colors.darkSlateBlue'),
  activeTintColor: () => EStyleSheet.value('$colors.cornflower'),
  tabBarStyle: {
    backgroundColor: '$colors.paleGrey83',
    borderTopWidth: 0,
    height: 60,
  },
  addButton: {
    marginTop: -40,
  },
})
