import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import foto from "../imgs/foto_gabi_3.png";
import bordet1 from "../imgs/BORDE-T1.png";
import bordenombre from "../imgs/borde-nombre.png";

export default function Main() {
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
                <h1 className="font-dancing-script font-bold text-5xl text-center mt-4 mb-4 mx-12 md:mx-auto drop-shadow-2-custom">
                INVITACION A MIS 15 AÑOS
                </h1>
            <img src={bordet1} alt="borde_titulo1" className="mx-auto md:mb-20 mb-12 h-10 md:h-auto drop-shadow-black-custom"/>
                
                <img src={foto} alt="gabi" className="md:w-1/3 mx-auto w-96 drop-shadow-custom"/>
                <h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 mb-4 md:mb-32 hidden md:block">
                Maria Victoria Gaviria Bolaños
            </h1>

            <h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 mb-0 md:mb-32 block md:hidden">
                <motion.p
                ref={ref}
                className="font-bold text-3xl mx-24"
                initial={{ opacity: 0, x: 100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                >
                Maria Victoria
                </motion.p>
            </h1>

            <h1 className="font-dancing-script text-center font-bold text-3xl md:text-5xl m-2 md:mb-32 block md:hidden">
                <motion.p
                ref={ref}
                className="font-bold text-3xl mx-24"
                initial={{ opacity: 0, x: -100 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                >
                Gaviria Bolaños
                </motion.p>
            </h1>

            <motion.div
                ref={ref}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 1 }}
                className="mx-auto mb-20 md:hidden w-1/2"
                >
                <img src={bordenombre} alt="borde_nombre"/>
            </motion.div>

            <div className="block md:hidden font-dancing-script font-bold text-center mt-12">
                {/* Frase solo visible en móviles */}
                <motion.p
                ref={ref}
                className="font-bold text-3xl mx-24"
                initial={{ opacity: 0, y: 100 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                >
                "Con gran emoción y alegría, dejo atrás la niñez para iniciar una nueva etapa como mujer y te invito a formar parte de mi celebración de 15 años y compartir este momento tan especial."
                </motion.p>
            </div>
        </>
    );
}
