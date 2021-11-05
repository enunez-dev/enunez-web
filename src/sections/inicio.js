import Image from 'next/image';
import FondoAnimado from 'components/fondoAnimado';
import Mouse from "components/mouse";
import logo from 'assets/images/icon.svg';

export default function home () {

    return (
        <>
            <section id="inicio">
            <header className='masthead'>
                <div className="container">
                    <div className="icon">
                        <Image src={logo} alt="Web 1"/>
                    </div>
                    <h4>FULL STACK</h4>
                        <h1>DEVELOPER</h1>
                        <hr/>
                </div>
                <Mouse /> 
                </header>
            <div className='fondoOscuro'></div>
            <FondoAnimado/>
            </section>
        </>
    )
}
