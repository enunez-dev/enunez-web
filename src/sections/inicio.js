import FondoAnimado from 'components/fondoAnimado';
import Mouse from "components/mouse"

export default function home () {

    return (
        <section id="inicio">
           <header className='masthead'>
            <div className="container">
                <h4>FULL STACK</h4>
                    <h1>Developer</h1>
                    <hr/>
            </div>
            <Mouse />
            </header>
           <FondoAnimado/>
        </section>
    )
}
