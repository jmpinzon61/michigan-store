import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Login } from './components/layout/forms/Login';
import { Start } from './components/sections/Start';
import { Record } from './components/layout/forms/Record';
import { Blogs } from './components/sections/Blogs';
import { Us } from './components/sections/Us';
import { Prices } from './components/sections/Prices';
import { Courses } from './components/sections/Courses';
import { Verification } from './components/layout/forms/Verification';
import { Diary } from './components/diary/Diary';
import { Notes } from './components/note/Notes';
import { Avatar } from './components/avatars/Avatar';
import { Checkout } from './components/verification/Checkout';
import { User_account_configuration } from './components/user-configuration/User_account_configuration';
import { Content_quiz_module } from './components/content-quiz/Content_quiz_module';
import { InterfaceClasses } from './components/addressing-classes/InterfaceClasses';
import { Menu_navigate } from './components/menus-user/Menu_navigate';
import { Menu_navigate_2 } from './components/menus-user/Menu_navigate_2';
import { Quizzes } from './components/evidence/Quizzes';
import { Chatbot } from './components/chat/Chatbot';

function App() {
  return (
    <Router future={{v7_relativeSplatPath: true}}>
        <Routes>
          <Route path='/prices' element={<Prices />} />{/** ya */}
          <Route path='/courses' element={<Courses />}/>{/** ya */}
          <Route path='/verification' element={<Verification />} />{/** ya */}
          <Route path='/diary' element={<Diary />} />{/** ya */}
          <Route path='/notes' element={<Notes />} />{/** ya */}
          <Route path='/avatar' element={<Avatar />} />{/** ya */}
          <Route path='/checkout' element={<Checkout />} />{/** ya */}
          <Route path='/user_account_configuration' element={<User_account_configuration />} />{/** ya */}
          <Route path='/content_quiz_module' element={<Content_quiz_module />} />{/** ya */}
          <Route path='/interfaceclasses' element={<InterfaceClasses />} />{/** ya */}
          <Route path='/menu_navigate' element={<Menu_navigate />} />{/** ya */}
          <Route path='/menu_navigate_2' element={<Menu_navigate_2 />} />{/** ya */}
          <Route path='/quizzes' element={<Quizzes />} />{/** ya */}
          <Route path="/start" element={<Start />} />
          <Route path="/record" element={<Record />} />{/** ya */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/us" element={<Us />} />{/* terminar navegacion interface clases menus navigate y secciones*/}
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path="/" element={<Login />} />{/** ya */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
