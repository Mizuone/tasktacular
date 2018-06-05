import { 
    applyMiddleware,
    Store,
    combineReducers,
    compose,
    createStore
} from 'redux';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer } from './reducers/reducer';
import { NgModule } from '@angular/core';


export interface IAppState {
    tasks: Array<Object>;
}

export const store: Store<IAppState> = createStore(
    rootReducer,
    applyMiddleware()
);

@NgModule({

})

class AppModule {
    constructor(ngRedux: NgRedux<IAppState>) {
        ngRedux.provideStore(store);
    }
}

// export const I

