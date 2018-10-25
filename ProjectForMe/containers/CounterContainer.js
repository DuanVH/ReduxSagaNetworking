import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {decrementAction, incrementAction} from "../actions";

const mapStateToProps = (state) => {
    return {
        times: state.counterReducer ? state.counterReducer : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (step) => {
            dispatch(incrementAction(step));
        },
        onDecrement: (step) => {
            dispatch(decrementAction(step));
        }
    }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
