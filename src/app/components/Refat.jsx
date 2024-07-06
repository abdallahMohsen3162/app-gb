"use client";
import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

function Refaat({ img_url, img_url2 }) {
    const [zoomState, setZoomState] = useState({
        isActive: false,
        position: { x: 0, y: 0 }
    });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;

        setZoomState({
            isActive: true,
            position: { x, y }
        });
    };

    const handleMouseLeave = () => {
        setZoomState({
            isActive: false,
            position: { x: 0, y: 0 }
        });
    };

    return (
        <div className=''>
            <div
                id='imagemagnify'
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ display: 'flex', justifyContent: 'space-around' }}
            >
                <div style={{ width: '300px', height: '300px' }}>
                    <ReactImageMagnify
                        smallImage={{
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: false,
                            width: 300,
                            height: 300,
                            src: img_url
                        }}
                        largeImage={{
                            src: img_url,
                            width: 1129,
                            height: 750
                        }}
                        isHintEnabled={true}
                        lensStyle={{ visibility: zoomState.isActive ? 'visible' : 'hidden' }}
                        enlargedImagePosition="over"
                        lensPosition={{ x: zoomState.position.x, y: zoomState.position.y }}
                    />
                </div>
                <div style={{ width: '300px', height: '300px' }}>
                    <ReactImageMagnify
                        smallImage={{
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: false,
                            width: 300,
                            height: 300,
                            src: img_url2
                        }}
                        largeImage={{
                            src: img_url2,
                            width: 1129,
                            height: 750
                        }}
                        isHintEnabled={true}
                        lensStyle={{ visibility: zoomState.isActive ? 'visible' : 'hidden' }}
                        enlargedImagePosition="over"
                        lensPosition={{ x: zoomState.position.x, y: zoomState.position.y }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Refaat;
