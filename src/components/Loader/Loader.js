// CSS
import './Loader.css'
// React
import { useState } from 'react'

export default function Loader() {
    const [loading, setLoading] = useState(true)
    if(loading) {
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            setLoading(false);
        }, 5000)
    } else {
        document.body.style.overflow = "initial";
    }

    return (
        loading && (
            <div id='loader' className='loader-ctn'>
                <iframe title='Page de chargement' src="https://lottie.host/?file=0d9d119f-1ee3-4a96-84f1-54407b038fd3/Cyedq95xmC.json"></iframe>
                <div className="loading">
                    <div className="loading-letter anim-1">
                        C
                    </div>
                    <div className="loading-letter anim-2">
                        H
                    </div>
                    <div className="loading-letter anim-3">
                        A
                    </div>
                    <div className="loading-letter anim-4">
                        R
                    </div>
                    <div className="loading-letter anim-5">
                        G
                    </div>
                    <div className="loading-letter anim-6">
                        E
                    </div>
                    <div className="loading-letter anim-7">
                        M
                    </div>
                    <div className="loading-letter anim-8">
                        E
                    </div>
                    <div className="loading-letter anim-9">
                        N
                    </div>
                    <div className="loading-letter anim-10">
                        T
                    </div>
                </div>
            </div>
        )
    )
}