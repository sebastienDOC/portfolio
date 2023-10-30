// CSS
import './Loader.css'
// React
import { useState } from 'react'

export default function Loader() {
    const [loading, setLoading] = useState(true)
    console.log(loading)

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
                <iframe src="https://lottie.host/?file=0d9d119f-1ee3-4a96-84f1-54407b038fd3/Cyedq95xmC.json"></iframe>
                <div class="loading">
                    <div class="loading-letter anim-1">
                        C
                    </div>
                    <div class="loading-letter anim-2">
                        H
                    </div>
                    <div class="loading-letter anim-3">
                        A
                    </div>
                    <div class="loading-letter anim-4">
                        R
                    </div>
                    <div class="loading-letter anim-5">
                        G
                    </div>
                    <div class="loading-letter anim-6">
                        E
                    </div>
                    <div class="loading-letter anim-7">
                        M
                    </div>
                    <div class="loading-letter anim-8">
                        E
                    </div>
                    <div class="loading-letter anim-9">
                        N
                    </div>
                    <div class="loading-letter anim-10">
                        T
                    </div>
                </div>
            </div>
        )
    )
}