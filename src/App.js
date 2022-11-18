import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppViews from "./AppViews";
import ContactInfo from './Contact';
import CollapsibleExample from './Navbar'


function App() {
    return (
        <Router>
            <CollapsibleExample />
            <AppViews />
            <ContactInfo />
        </Router>
    );
}

export default App;