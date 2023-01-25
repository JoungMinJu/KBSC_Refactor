import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import MainPage from "./routes/MainPage";
import NavBar from "./routes/Navbar";
import EmptyEmotion from './routes/EmptyEmotion';
import Diary from './routes/Diary';
import Mission from './routes/Mission';
import ShareEmotion from './routes/ShareEmotion';
import Footer from "./routes/Footer";
import Chat from './routes/Chat';
import Clinic from './routes/Clinic';
import LogoIn from './routes/LogIn';
import SignUp from './routes/SignUp';
import ChatRoom from './routes/ChatRoom';
import ThemeCustom from './routes/ThemeCustom';

function Routers() {
    return(
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/emotion/empty" element={<EmptyEmotion />} />
                <Route path="/emotion/share" element={<ShareEmotion />} />
                <Route path="/diary" element={<Diary />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/chat/room/*" element={<ChatRoom />} />
                <Route path="/clinic" element={<Clinic />} />
                <Route path="/login" element={<LogoIn />} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
            <ThemeCustom />
            <Footer />
        </Router>
    )
}
export default Routers;