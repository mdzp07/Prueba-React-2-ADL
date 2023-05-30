import '../css/Header.css'
import Menu from '../components/Menu';

export default function Home() {

    return (
        <div >
            <div className="header">
                <div className='contenido-header'>
                    <h1>¡Pizzería Mamma Mía!</h1>
                    <h6>¡Tenemos las mejores pizzas que podrás encontrar!</h6>
                </div>
            </div>
            <Menu />
        </div>

    );

}