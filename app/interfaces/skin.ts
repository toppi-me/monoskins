export interface Skin {
  id: string
  name: string
  isVisaOnly: boolean
  isAdultOnly: boolean
  isQR: boolean
  isJar: boolean
  isSubscription: boolean
  isSpecified: boolean
  minimumValue: number
  status: 'active' | 'expired'
  description: string
  link: string
  img: string
  date: string
}
