import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  text: () => ({
    ...EStyleSheet.value('$fonts.ralewayBold'),
    fontSize: 30,
  }),
})
