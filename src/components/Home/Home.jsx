import React from 'react'
import ReadContract from '../../Blockchain/ReadContract'

function Home() {
    return (
        <div className="mockup-browser border bg-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">https://linktr.ee/nid_z</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
                <pre data-prefix="$"><code> git clone https://github.com/nidz-the-fact/React-with-Vitejs-for-Walletconnect-to-Starter-Web3.git</code></pre>
            </div>
            <ReadContract />
        </div>
    )
}

export default Home
