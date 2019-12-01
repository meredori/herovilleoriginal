import { Store, createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ApplicationState, createRootReducer } from './store'
import { History } from 'history'

export default function configureStore(history: History): Store {
    const composeEnhancers = composeWithDevTools({})
    const store = createStore(
      createRootReducer(history)
    )
    return store
  }