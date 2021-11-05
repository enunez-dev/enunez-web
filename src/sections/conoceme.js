import Image from 'next/image';
import perfil from 'assets/images/perfil.jpg'

export default function conoceme () {
    return (
        <section id="conoceme" sx={{ variant: 'section.keyFeature' }} className='section2'>
            <div className='container'>
                <div className='content-perfil'>
                    <div className='perfil'>
                        <Image  src={perfil} alt='perfil' />
                    </div>                        
                </div>
                <div className='aboutme'>
                    <h2>Hola!</h2>
                    <p>
                        Hola! mi nombre es Edward Nuñez, soy desarrollador Full Stack.
                        Me especializo en creaciones de aplicaciones web basado en
                        principios de diseño UX/UI, me fascina todo lo que aprendo y
                        aplico en cada proyecto que desarrollo. Trabajar con proyectos
                        nuevos es mi pasión.
                    </p>
                </div>

            </div>
        </section>
    )
}
