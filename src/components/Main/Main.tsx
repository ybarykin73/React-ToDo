import Header from '../Header/Header'
import List from '../List/List'
import Form from '../Form/Form'

import './Main.scss'

const Main = () => {
    return (
        <main className='main'>
            <Header />
            <List /> 
            <Form />
        </main>
    )
}

export default Main