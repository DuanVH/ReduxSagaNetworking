import {connect} from 'react-redux';
import CounterComponent from '../components/CounterComponent';
import {decrementAction, incrementAction} from "../actions";

const mapStateToProps = (state) => {
    console.log("container: Increment");
    return {
        times: state.counterReducer ? state.counterReducer : 0
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (step) => {
            console.log("container: Increment");
            dispatch(incrementAction(step));
        },
        onDecrement: (step) => {
            console.log("container: Increment");
            dispatch(decrementAction(step));
        }
    }
};

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
export default CounterContainer;
