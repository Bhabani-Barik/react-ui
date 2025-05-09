import './home.css'
import Header from '../header/Header'
import {Main} from '../main/Main'

export function Home() {
    return (
        <div className="bg-style">
            <div className="bg-shade">
                <Header />
                <section>
                    <Main />
                </section>
            </div>
        </div>
           
           
    )
}