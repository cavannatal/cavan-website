import React, { useState, useEffect } from 'react';
import backgroundImage from '../iconimgs/profback.png';

function ProfileSection() {
    const [showWelcome, setShowWelcome] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowWelcome(true), 500); // Delay for Welcome
        const timer2 = setTimeout(() => setShowName(true), 1500);    // Delay for Name
        const timer3 = setTimeout(() => setShowDescription(true), 2500); // Delay for Description
        const timer4 = setTimeout(() => setShowImage(true), 500);  // Delay for Image

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    return (
        <div className='md:px-5 p-24 max-w-screen-2xl mx-auto mt-100'>
            <div className='rounded-xl rounded-br-[200px] md:p-9 px-4 py-2'>
                <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                    {showImage && (
                        <div className='fadeIn'>
                            <img src={backgroundImage} alt='Cavan Photo' className='rounded-3xl object-cover md:h-128 md:w-128'/>
                        </div>
                    )}
                    
                    <div className='md:w-3/5 flex flex-col justify-center'>
                        {showWelcome && <h1 className='fadeIn text-6xl font-bold text-white leading-[110px]'>Welcome!</h1>}
                        {showName && <h2 className='fadeIn text-5xl font-bold mb-8 text-white leading-[110px]'>I'm <span class='text-custom-blue'>Cavan Natal</span></h2>}
                        {showDescription && (
                            <p className='fadeIn text-white text-2xl mb-8'>
                                I am a recent Computer Science graduate from Texas Tech University, deeply passionate about the programming landscape. 
                                My interests span from Data Science to Software Engineering, illustrating a broad and versatile skill set. 
                                I am committed to continuous learning, constantly enhancing my abilities to excel in any position I pursue. 
                                Please explore the rest of my website to discover my skills and certifications, as well as review the projects I have completed.
                            </p>
                        )}
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSection;
