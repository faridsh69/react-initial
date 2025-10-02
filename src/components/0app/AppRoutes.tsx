import { CommunityPage } from 'components/1pages/CommunityPage/CommunityPage'
import { CommunityUserPage } from 'components/1pages/CommunityUserPage/CommunityUserPage'
import { HomePage } from 'components/1pages/HomePage/HomePage'
import { ProductDetailsPage } from 'components/1pages/ProductDetailsPage/ProductDetailsPage'
import { ProductsListPage } from 'components/1pages/ProductsListPage/ProductsListPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ApisStory } from 'services/ApisStory'

import { Uikit } from '../../stories/Uikit'
import { APP_PATHS } from './constants'
import { Layout } from './Layout'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_PATHS.home} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={APP_PATHS.uikit} element={<Uikit />} />
          <Route path={APP_PATHS.apis} element={<ApisStory />} />
          <Route path={APP_PATHS.products} element={<ProductsListPage />} />
          <Route path={APP_PATHS.productDetails} element={<ProductDetailsPage />} />
          <Route path={APP_PATHS.instagram} element={<CommunityPage />} />
          <Route path={APP_PATHS.instagramUser} element={<CommunityUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
