import React, {createContext, useReducer} from 'react';
import axios from "axios";

const APIChat = 'http://localhost:8000/chat'



export const chatContext = createContext();

const INIT_STATE = {
    comments: [],
}

const reducer = (prevState = INIT_STATE, action) => {
    switch (action.type){
        case "GET_COMMENTS":
            return {...prevState, comments: action.payload};
        default:
            return prevState
    }
}

const ChatContextProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const addComment = async (comment) => {
        await axios.post(APIChat, comment);
    }

    const getTopics = async () => {
        const {data} = await axios.get(APIChat);
        let action = {
            type: "GET_COMMENTS",
            payload: data,
        };
        dispatch(action);
    }



    let cloud = {
        addComment,
        getTopics,
        commentsArr: state.comments,
    }


    return (
        <chatContext.Provider value={cloud} >
            {children}
        </chatContext.Provider>
    );
};

export default ChatContextProvider;