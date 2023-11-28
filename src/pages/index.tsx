import { GlobalLayout } from "@/layouts/GlobalLayout/GlobalLayout"
import { MainPage } from "@/pages/MainPage/MainPage"
import { SecondPage } from "@/pages/SecondPage/SecondPage"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<GlobalLayout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='/second' element={<SecondPage />} />
    </Route>,
  ),
)
