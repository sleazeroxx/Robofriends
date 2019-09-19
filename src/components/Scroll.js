import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',
            height: '75vh',
            borderTop: '1px solid #0ccac4',
            borderBottom: '1px solid #0ccac4'
        }}>
            {props.children}
        </div>
        )
};

export default Scroll;