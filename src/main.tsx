import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Start } from './components/sections/Start'
// import { Courses } from './components/sections/Courses'
// import { Us } from './components/sections/Us'
// import App from './App.tsx'
// import { Prices } from './components/sections/Prices.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Prices/> */}
    {/* <Blogs/> */}
    {/* <Us/> */}
    {/* <Courses/> */}
    <Start/>
  </StrictMode>
)
