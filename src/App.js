import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = '365d99ef683d8a0452822b47a3df97c92e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles);
                }
            }
        })
    })

    return (
        <div>
            <h1>Alan AI News Application</h1>
        </div>
    )
}

export default App;