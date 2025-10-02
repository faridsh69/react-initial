import { CountriesEnum } from 'enums/enums'

export const mappingDataCountryNameToFlag = (countryName?: string) => {
  if (countryName === 'United States') return CountriesEnum.Us
  if (countryName === 'Spain') return CountriesEnum.Sp
  if (countryName === 'Italy') return CountriesEnum.It
  if (countryName === 'Australia') return CountriesEnum.Au

  return CountriesEnum.Fr
}
