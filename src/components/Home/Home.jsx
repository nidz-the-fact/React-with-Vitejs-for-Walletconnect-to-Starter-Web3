import React from 'react'
import ReadContract from '../../Blockchain/ReadContract'

function Home() {
    return (
        <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">https://example.com</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
                <pre data-prefix="$"><code> npm i daisyui </code></pre>
            </div>
            <ReadContract />
        </div>
    )
}

export default Home