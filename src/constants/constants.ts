import { FontsEnum, SizesEnum } from '../enums/enums'

export const API_PER_PAGE = 5
export const PRODUCTS_PER_PAGE = 12
export const SCROLL_TRESHOLD = 200
export const DEFAULT_DEBOUNCE_TIME = 300
export const INVALIDATE_QUERY_CONFIG = { gcTime: 5000, refetchOnMount: true }

export const APP_LS_KEY = 'react-initial-ls'

export const ENVS = {
  testing: 'testing',
  development: 'development',
  production: 'production',
}

export const IMAGE_URLS = {
  trash:
    'https://atlas-content-cdn.pixelsquid.com/stock-images/trash-can-street-bin-N4M5XQ0-600.jpg',
  ok: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/ok.png',
}

export const BREAKLINE = '\r\n'
export const IMAGE_BASE_URL_PROD = 'https://innos.s3.eu-central-1.amazonaws.com/'
export const IMAGE_BASE_URL_DEV = 'https://innos-testing.s3.eu-central-1.amazonaws.com/'
export const DATE_FNS_FORMATS = {
  GERMAN_DATE: 'dd.MM.yyyy',
  GERMAN_DATE_TIME: 'dd.MM.yyyy HH:mm:ss',
  SERVER_DATE: 'yyyy-MM-dd',
  SERVER_DATE_TIME: 'yyyy-MM-dd HH:mm:ss',
}
export const DATE_MOMENT_FORMATS = {
  GERMAN_DATE: 'DD.MM.YYYY',
  GERMAN_DATE_TIME: 'DD.MM.YYYY HH:mm:ss',
  SERVER_DATE: 'YYYY-MM-DD',
  SERVER_DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
}
export const SORTING_METHODS = {
  asc: 'asc',
  dsc: 'dsc',
}

export const LANGUAGES = {
  en: 'en-US',
  de: 'de-DE',
}

export const I18_CONFIG = {
  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations',
  returnNull: false,
  interpolation: {
    escapeValue: false,
  },
  debug: false,
  resources: {
    en: {
      translation: {},
    },
    de: {
      translation: {},
    },
  },
}

export const ZINDEXES = {
  modalOverlay: 100,
  modal: 101,
  popover: 102,
  contextMenu: 103,
  select: 104,
  toast: 105,
  tooltip: 106,
}

export const ICON_SIZES_MAP = {
  [SizesEnum.S]: 12,
  [SizesEnum.M]: 14,
  [SizesEnum.L]: 16,
}

export const FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Text14,
  [SizesEnum.M]: FontsEnum.Text16,
  [SizesEnum.L]: FontsEnum.Text18,
}

export const BOLD_FONTS_SIZES_MAP = {
  [SizesEnum.S]: FontsEnum.Header14,
  [SizesEnum.M]: FontsEnum.Header16,
  [SizesEnum.L]: FontsEnum.Header18,
}

export const IMAGES = [
  'https://govisually.com/wp-content/uploads/2023/03/use-bokeh-for-product-photography.png',
  'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
  'https://img.freepik.com/premium-photo/product-showcase-background_832479-15559.jpg',
]

export const PRODUCTS = [
  {
    id: '1',
    src: IMAGES[0],
    vintage: 2021,
    litr: 750,
    label: 'Rombauer Vineyards Carneros Chardonnay',
    price: 69.99,
    rate: 4,
    rateCount: 93,
    match: 'Your 97% match',
    country: 'United states',
    tags: ['Organic', 'Napa Valley', 'Dry'],
  },
]
