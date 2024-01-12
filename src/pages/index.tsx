import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout"
import { AnimeListPage } from "@/pages/AnimeListPage/AnimeListPage"
import { LoginPage } from "@/pages/LoginPage/LoginPage"
import { MainPage } from "@/pages/MainPage/MainPage"
import { NotFoundPage } from "@/pages/NotFoundPage/NotFoundPage"
import { ProfilePage } from "@/pages/ProfilePage/ProfilePage"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<GlobalLayout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='list' element={<AnimeListPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='profile' element={<ProfilePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>,
  ),
)
