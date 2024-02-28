import Modal from '../UI/Modal';
import { useContext } from 'react';
import UserProgressContext from '../../store/UserProgressContext';
import Header from './Header';
import Login from './Login';
import './App9.css';
function App() {
    const userProgressCtx = useContext(UserProgressContext);
    return(
        <Modal
        open={userProgressCtx.progress === 'login'}
        >
           <Header/>
           <main>
            <Login/>
           </main>
        </Modal>
    );
}

export default App;