import images from '@/assets/gallery/index';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Navbar />
            <div style={{ marginTop: 80, marginBottom: 50, color: 'white', alignItems: 'center' }}>
                <h1 className="text-5xl font-bold text-center text-blue-500">Welcome to the DevsinTech Community Gallery Page!</h1>
            </div>

            <div className="flex flex-wrap justify-center">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-1/2 sm:w-1/3 lg:w-1/6 p-4 relative overflow-hidden transition duration-500 transform hover:-translate-y-1 hover:scale-110"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div
                            className={`w-full h-40 ${hoveredIndex === index ? 'grayscale-0' : 'grayscale'}`}
                            style={{
                                border: '2px solid',
                                borderColor: hoveredIndex === index ? '#AF7AF2' : 'transparent',
                                borderWidth: hoveredIndex === index ? '4px' : '2px',
                                background: 'linear-gradient(to right, #AF7AF2, #A5F7A8, #AF7AF2)',
                            }}
                        >
                            <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <ScrollToTop />
            <Footer />
        </>
    );
};

export default Gallery;
