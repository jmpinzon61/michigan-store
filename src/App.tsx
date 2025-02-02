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
    <Router>
        <Routes>
          <Route path='/prices' element={<Prices />} />
          <Route path='/courses' element={<Courses />}/>
          <Route path='/verification' element={<Verification />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/avatar' element={<Avatar />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/user_account_configuration' element={<User_account_configuration />} />
          <Route path='/content_quiz_module' element={<Content_quiz_module />} />
          <Route path='/interfaceclasses' element={<InterfaceClasses />} />
          <Route path='/menu_navigate' element={<Menu_navigate />} />
          <Route path='/menu_navigate_2' element={<Menu_navigate_2 />} />
          <Route path='/quizzes' element={<Quizzes />} />
          <Route path="/start" element={<Start />} />
          <Route path="/record" element={<Record />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/us" element={<Us />} />
          <Route path='/chatbot' element={<Chatbot />} />
          <Route path="/" element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
