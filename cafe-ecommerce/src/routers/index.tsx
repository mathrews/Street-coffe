import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import MainPage from "../pages/MainPage"
import Page404 from "../pages/Page404"

const Ways = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<MainPage/>}/>
                    </Route>

                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Ways