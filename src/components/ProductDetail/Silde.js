import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://i.pinimg.com/originals/1e/e9/dd/1ee9dda0ecfdec3e7b1549ebfba0d2b5.jpg',
        thumbnail: 'https://i.pinimg.com/originals/1e/e9/dd/1ee9dda0ecfdec3e7b1549ebfba0d2b5.jpg',
    },
    {
        original: 'https://i.pinimg.com/originals/07/40/bb/0740bb6b8c2bfe6f1aa468554e9a8db4.jpg',
        thumbnail: 'https://i.pinimg.com/originals/07/40/bb/0740bb6b8c2bfe6f1aa468554e9a8db4.jpg',
    },
    {
        original: 'https://file4.batdongsan.com.vn/2020/01/04/20200104061429-ac13_wm.jpg',
        thumbnail: 'https://file4.batdongsan.com.vn/2020/01/04/20200104061429-ac13_wm.jpg',
    },
];
class Silde extends Component {
    render() {
        return (
            <ImageGallery
                items={images}
                showPlayButton={false}
                showBullets={true}
                thumbnailPosition="right"
            />
        )
    }
}

export default Silde;