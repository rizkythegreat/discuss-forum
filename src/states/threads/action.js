import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

const ActionType = {
    RECEIVE_THREADS: 'RECEIVE_THREADS',
}

function receiveThreadsActionCreator(threads) {
    return {
        type: ActionType.RECEIVE_THREADS,
        payload: {
            threads
        }
    }
}

function asyncReceiveThreads() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const threads = await api.getAllThreads();
            dispatch(receiveThreadsActionCreator(threads));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    }
}

export {
    ActionType,
    asyncReceiveThreads
}