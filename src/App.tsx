import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './components/layout/forms/Login';
import { Start } from './components/sections/Start';
import { Record } from './components/layout/forms/Record';
import { Blogs } from './components/sections/Blogs';
import { Us } from './components/sections/Us';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/start" element={<Start />} />
          <Route path="/record" element={<Record />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/us" element={<Us />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
