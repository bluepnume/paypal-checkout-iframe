/* @flow */

import Frame from 'react-frame-component';
import React from 'react';
import ReactDOM from 'react-dom';

let PayPalButton = window.paypal.Button.driver('react', { React, ReactDOM });

const Page = () => {

    const noop = () => {};

    const style = {
        label:      'paypal',
        size:       'responsive',
        shape:      'rect',
        layout:     'horizontal',
        tagline:    false,
        maxbuttons: 1,
        height:     44
    };

    return (
        <Frame className="paypal-button-frame-sandbox">
            <style>
                {`
                    html, body {
                        border: 0;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>

            <PayPalButton style={style} payment={noop} onAuthorize={noop} />
        </Frame>
    );
};

ReactDOM.render(<Page />, document.querySelector('#paypal-button-container'));