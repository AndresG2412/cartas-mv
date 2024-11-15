import bordet1 from "../imgs/BORDE-T1.png"
import bordet2 from "../imgs/borde-recto-2.png"

export default function confirmar() {

    const redirectToWhatsApp = () => {
        const phoneNumber = '3106873378';
        const message = encodeURIComponent('Confirmo que estaré en el evento! ');
        const url = `https://wa.me/+57${phoneNumber}?text=${message}`;
        window.location.href = url;
    };

    return(
        <>
            <div className="text-center font-bold">
                <img src={bordet1} alt="borde_titulo1" className="mx-auto h-10 md:h-auto rotate-180 md:mt-32 drop-shadow-black-custom"/>
                    <h1 className="font-dancing-script font-extrabold mx-20 text-4xl md:text-5xl text-center mt-4 mb-4 drop-shadow-2-custom">ESPERAMOS TU CONFIRMACION</h1>
                <img src={bordet1} alt="borde_titulo1" className="mx-auto mb-12 md:mb-20 h-10 md:h-auto drop-shadow-black-custom"/>


                <img src={bordet2} alt="borde_titulo1" className="mx-auto h-8 md:h-10 w-44 md:w-56 drop-shadow-2-custom"/>
                <div className="mx-20">
                    <h1 className="font-dancing-script font-extrabold my-8 text-xl md:text-3xl">La asistencia de la confirmacion se tomara en la entrada con Nombre y Apellido</h1>
                    <h1 className="font-dancing-script font-extrabold my-8 text-xl md:text-3xl">Cada persona tendra una mesa y puesto asignado ademas de su comida incluida</h1>
                    <h1 className="font-dancing-script font-extrabold my-8 text-xl md:text-3xl">En caso de tener dudas por favor contactar en el mismo boton siguiente y/o para confirmar</h1>
                </div>
                <img src={bordet2} alt="borde_titulo1" className="mx-auto h-8 md:h-10 w-44 md:w-56 rotate-180 drop-shadow-2-custom"/>
                    <button
                    className="border-[2px] font-dancing-script font-bold  border-black my-24 px-8 z-30 py-4 bg-amber-500 rounded-2xl text-white relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-amber-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_3px_2px_#121212;] hover:[text-shadow:2px_2px_2px_#121212] text-2xl"
                    onClick={redirectToWhatsApp}
                    >
                    CONFIRMAR
                    </button>
            </div>
        </>
    )
}