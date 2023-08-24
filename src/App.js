import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/Login/SignUp';
import ProtectedRoute from './pages/ProtectedRoute';
import PageLoading from './pages/PageLoading';
import Feed from './pages/feed/Feed';
import Explore from './pages/Explore/Explore';
import Notifications from './pages/Notifications/Notifications'
import Messages from './pages/Messages/Messages'
import Bookmarks from './pages/Bookmarks/Bookmarks'
import Lists from './pages/Lists/Lists'
import Profile from './pages/Profile/Profile'
import More from './pages/More/More'
import TweetBox from './pages/feed/TweetBox';
function App() {
  return (
    <div className="App">
<Router>
        <Routes>
          <Route path ="/" element={<ProtectedRoute> <Home/></ProtectedRoute>}>
            <Route index element ={<Feed/>}/>
          </Route>
          <Route path='/home' element={<ProtectedRoute> <Home/></ProtectedRoute>}>
          <Route path='feed' element={<Feed/>}/>
          <Route path='explore' element={<Explore/>}/>
          <Route path='notifications' element={<Notifications/>}/>
          <Route path='messages' element={<Messages/>}/>
          <Route path='bookmarks' element={<Bookmarks/>}/>
          <Route path='lists' element={<Lists/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='more' element={<More/>}/>


          </Route>
          <Route path ="/signup" element={<SignUp/>}/>
          <Route path ="/login" element={<Login/>}/>
          <Route path ="/page-loading" element={<PageLoading/>}/>
        </Routes>
      </Router>    
      </div>
  );
}

export default App;
