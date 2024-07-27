import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaGithubSquare } from "react-icons/fa";
import { MdPreview } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../style/projects.css';
import { EffectCards } from 'swiper/modules';
import project1 from '../assets/project-previews/brew-baken-bites.png';
import project2 from '../assets/project-previews/learn-vista.png';
import project3 from '../assets/project-previews/krushi-kendra.png';

const projectLinks = [
    { preview: "https://example.com/brew-baken-bites", visit: "https://example.com/brew-baken-bites" },
    { preview: "https://example.com/learn-vista", visit: "https://example.com/learn-vista" },
    { preview: "https://example.com/krushi-kendra", visit: "https://example.com/krushi-kendra" }
];

const projectImages = [project1, project2, project3];

export default function Projects() {
    const [showTooltip, setShowTooltip] = useState({});

    const handleMouseEnter = (index, type) => {
        setShowTooltip({ ...showTooltip, [`${index}-${type}`]: true });
    };

    const handleMouseLeave = (index, type) => {
        setShowTooltip({ ...showTooltip, [`${index}-${type}`]: false });
    };

    return (
        <>
            <h2 className="text-7xl font-bold text-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mt-28 mb-28">Projects</h2>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-1/2 h-96 bg-no-repeat bg-contain"
            >
                {projectImages.map((image, index) => (
                    <SwiperSlide key={index} className="relative group overflow-hidden">
                        <div className="relative w-full h-full">
                            <img src={image} alt={`project-${index}`} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                <div className="flex space-x-4">
                                    {/* Preview Icon */}
                                    <div className="relative group">
                                        <a
                                            href={projectLinks[index].preview}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={() => handleMouseEnter(index, 'preview')}
                                            onMouseLeave={() => handleMouseLeave(index, 'preview')}
                                            className="relative flex items-center justify-center text-white rounded hover:bg-opacity-75 transition-opacity"
                                        >
                                            <MdPreview className="text-5xl text-white hover:text-yellow-400" />
                                            {showTooltip[`${index}-preview`] && (
                                                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md animate-fade-in">
                                                    Preview
                                                </div>
                                            )}
                                        </a>
                                    </div>

                                    {/* Visit Icon */}
                                    <div className="relative group">
                                        <a
                                            href={projectLinks[index].visit}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={() => handleMouseEnter(index, 'visit')}
                                            onMouseLeave={() => handleMouseLeave(index, 'visit')}
                                            className="relative flex items-center justify-center text-white rounded hover:bg-opacity-75 transition-opacity"
                                        >
                                            <FaGithubSquare className="text-5xl text-white hover:text-yellow-400" />
                                            {showTooltip[`${index}-visit`] && (
                                                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md animate-fade-in">
                                                    GitHub
                                                </div>
                                            )}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
