import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

function Landing() {
    return (
        <>
            <main className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center mt-16">
                <h1 className="text-[clamp(60px,11vw,150px)] leading-[1] font-black uppercase">Planificate IA</h1>
                <p className="my-5">¿Estás buscando el itinerario perfecto? Nuestra aplicación genera planes de viaje únicos basados en tus preferencias. Con solo unos clics, puedes obtener recomendaciones de hoteles y actividades para tu destino ideal.</p>
                <Link to={"/trip-form"} className="mt-5 my-10">
                    <Button>
                        Prueba ahora
                    </Button>
                </Link>
                <img src="/hero.webp" alt="" className="w-[50%] aspect-[10/9]" />
            </main>

        </>
    )
}

export default Landing