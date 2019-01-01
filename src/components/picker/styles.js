import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  container: {
    '@media android': {
      borderBottomWidth: 1,
      borderBottomColor: '$colors.warmGrey',
    },
  },
  inputLabel: () => ({
    ...EStyleSheet.value('$fonts.ralewaySemiBold'),
    fontSize: 14,
    color: '$colors.black',
  }),
  input: {
    '@media ios': {
      marginTop: -25,
      marginBottom: -25,
    },
    '@media android': {
      paddingLeft: 6,
    },
  },
  error: {
    color: '$colors.chiGong',
    marginTop: 4,
  },
})
