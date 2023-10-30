// Composants
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/home";
import Copyright from "./components/Copyright/Copyright";
import Loader from './components/Loader/Loader';
// React
import { useState } from 'react'

export default function App() {
    const [loading, setLoading] = useState(true)
    const main = document.getElementById('main')

    if(!main) {
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    }

    return (
        <div>
            <Loader />
            {!loading ? 
                <div id='main'>
                    <Navbar />
                    <Header />
                    <Home />
                    <Copyright />
                </div>
            :
                null }
        </div>
    )
}