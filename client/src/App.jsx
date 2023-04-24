import React from 'react';
import {Routes, Route} from "react-router";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import './App.css';

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ContactsPage/>} />
                </Routes>
            </div>
        </>
    );
}

export default App;

