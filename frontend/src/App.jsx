import { Route, Routes } from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'
import DeleteBlog from './pages/DeleteBlog'
import EditBlog from './pages/EditBlog'
import Home from './pages/Home'
import ShowBlog from './pages/ShowBlog'
import MainPage from './pages/MainPage'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/blogs' element={<Home />} />
      <Route path='/blog/create' element={<CreateBlog />} />
      <Route path='/blog/details/:id' element={<ShowBlog />} />
      <Route path='/blog/edit/:id' element={<EditBlog />} />
      <Route path='/blog/delete/:id' element={<DeleteBlog />} />
    </Routes>
  )
}

export default App