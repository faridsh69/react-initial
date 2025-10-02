import { BreakpointsEnum } from 'enums/enums'

const getBreakpointPixels = (breakpoint: BreakpointsEnum) => {
  return parseInt(breakpoint.replace('px', ''))
}

export const getSliderCountBasedOnDevice = () => {
  if (window.innerWidth > getBreakpointPixels(BreakpointsEnum.Xl)) return 4
  if (window.innerWidth > getBreakpointPixels(BreakpointsEnum.Lg)) return 3
  if (window.innerWidth > getBreakpointPixels(BreakpointsEnum.Md)) return 2

  return 1
}
