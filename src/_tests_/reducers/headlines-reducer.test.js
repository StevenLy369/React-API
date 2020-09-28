import headlinesreducer from '../../reducers/headline-reducer';
import * as c from '../../actions/ActionTypes';

describe('headlinesReducer' , () => {
    let action;

    const defaultState = {
        isLoading: false,
        headlines:[],
        error:null
    };

    const loadingState = {
        isLoading: false,
        headlines: [],
        error: null
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

    test('successfully getting headlines should change isLoading to false and update headlines', () => {
        const headlines = "A headline";
        action = {
          type: c.GET_HEADLINES_SUCCESS,
          headlines
        };
    
        expect(headlinesreducer(loadingState, action)).toEqual({
            isLoading: false,
            headlines: "A headline",
            error: null
        });
      });

      test('failing to get headlines should change isLoading to false and add an error message', () => {
        const error = "An error";
        action = {
          type: c.GET_HEADLINES_FAILURE,
          error
        };
    
        expect(headlinesreducer(loadingState, action)).toEqual({
            isLoading: false,
            headlines: [],
            error: "An error"
        });
      });
    });