import headlinesreducer from '../../reducers/headline-reducer';
import * as c from '../../actions/index'

describe('headlinesReducer' , () => {
    let action;
    const defaultState = {
        isLoading: false,
        headlines:[],
        error:null
    };



    test('should successfully return the default state if no action is passed into it' , () => {
        expect(headlinesreducer(defaultState, {type:null})).toEqual(
            {
                isLoading:false,
                headlines:[],
                error:null
            }
        )
    })


    test('requesting headlines should sucessfully change isLoading from false to true', () => {
        action = {
            type: c.REQUEST_HEADLINES
        };

        expect(headlinesreducer(defaultState, action)).toEqual({
            isLoading:true,
            headlines:[],
            error:null
        })
    })
})