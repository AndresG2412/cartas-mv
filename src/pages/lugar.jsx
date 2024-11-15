import centro from "../imgs/lugar.png";
import bordet1 from "../imgs/BORDE-T1.png"
import borderecto from "../imgs/borde-recto.png"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Lugar() {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        {
            threshold: 0.1, // Ajusta este valor según tus necesidades
        }
        );

        if (ref.current) {
        observer.observe(ref.current);
        }

        return () => {
        if (ref.current) {
            observer.unobserve(ref.current);
        }
        };
    }, []);

    return (
        <>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto h-10 md:h-auto rotate-180 mt-20 drop-shadow-black-custom"/>
                <h1 className="font-dancing-script font-extrabold text-4xl mx-24 md:text-5xl text-center mt-4 mb-4 md:mb-4 drop-shadow-2-custom">FECHA Y LUGAR DEL EVENTO</h1>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto md:mb-28 mb-12 h-10 md:h-auto drop-shadow-black-custom"/>

            <div className="md:flex mb-24 justify-center text-center">
                <a href="https://maps.app.goo.gl/SGqs9NUgvuU49Vw26" target="_blank" rel="noopener noreferrer">
                    <img src={centro} alt="img_lugar" className="cursor-pointer w-72 md:w-96 h-72 md:h-96 mx-auto mb-16 md:mb-0"/>
                </a>
                <div className="my-auto md:ml-40">
                    
                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0}}
                        transition={{ duration: 1 }}
                        >
                        <p className="font-dancing-script font-bold text-2xl md:text-3xl">Pitalito - Huila</p>
                        <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>                    
                    </motion.p>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0}}
                        transition={{ duration: 1 }}
                        >
                        <p className="font-dancing-script font-bold text-2xl md:text-3xl">17 de Agosto a las 08:00 PM</p>
                        <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>                   
                    </motion.p>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0}}
                        transition={{ duration: 1 }}
                        >
                        <p className="font-dancing-script font-bold text-2xl md:text-3xl">Lugar de eventos 828</p>
                        <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>                  
                    </motion.p>

                    <motion.p
                        ref={ref}
                        initial={{ opacity: 0}}
                        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0}}
                        transition={{ duration: 1 }}
                        >
                        <p className="font-dancing-script font-bold text-2xl md:text-3xl">Lluvia de sobres</p>
                        <img src={borderecto} alt="borde_recto1" className="h-4 md:w-96 mx-auto mb-8"/>              
                    </motion.p>
                    
                    
                </div>
            </div>
        </>
    );
}
