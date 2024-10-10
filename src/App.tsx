import { Provider } from 'react-redux'
import Cart from './components/Cart'
import Footer from './containers/Footer'
import Header from './containers/Header'
import Main from './containers/Main'
import Global from './global'
import { store } from './store'

function App() {
    return (
        <Provider store={store}>
            <Global />
            <Cart />
            <Header />
            <Main />
            <Footer />
        </Provider>
    )
}

export default App
