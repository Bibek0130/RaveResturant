//imports
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../features/pages/Home.jsx'; 
import { BrowserRouter } from 'react-router'; 
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route index path="/home" element={<HomePage />} />
            </Routes>
        </>
          
    );
}

export default App;