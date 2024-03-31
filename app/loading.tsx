import React from 'react';
import {ClipLoader} from "react-spinners";
const Loading = () => {
    return (
        <section>
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <ClipLoader color="rgba(255, 255, 255, 1)"/>
            </div>
        </section>
    );
};

export default Loading;