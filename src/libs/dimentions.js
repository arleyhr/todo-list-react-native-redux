import { Dimensions } from 'react-native'

const {
  width: viewportWidth,
  height: viewportHeight,
} = Dimensions.get('window')

export const getViewportWidth = () => viewportWidth
export const getViewportHeight = () => viewportHeight

export function wp(percentage) {
  const value = (percentage * viewportWidth) / 100
  return Math.round(value)
}

