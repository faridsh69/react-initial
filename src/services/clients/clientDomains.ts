import { isProd } from 'helpers/helpers'

const TESTING_API_DOMAINS = {
  base: 'https://localhost:8000/api',
}

const PRODUCTION_API_DOMAINS = {
  base: 'https://localhost:8000/api',
}

const isProduction = isProd()

export const API_ENDPOINTS = {
  base: isProduction ? PRODUCTION_API_DOMAINS.base : TESTING_API_DOMAINS.base,
}
