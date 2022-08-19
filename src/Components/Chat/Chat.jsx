import React, {useState, useContext, useEffect,} from 'react';
import Box from "@mui/material/Box";
import {TextField} from "@mui/material";
import showToast from "../../helpers/ShowToast";
import Button from "@mui/material/Button";
import {authContext} from "../../context/AuthContext";
import {chatContext} from "../../context/ChatContextProvider";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Chat.css'

const Chat = () => {

    const {user} = useContext(authContext);

    // const [selected, setSelected] = useState(false);
    const [comment, setComment] = useState('');
    const { addComment,getTopics, commentsArr } = useContext(chatContext);
    const d = new Date(0);
    function handleClick(){
        if (!comment  ) {
            showToast('Заполните поля', 'error')
            return;
        }
        console.log(Math.floor(Date.now()/1000))
        let obj = {
            comment,
            data: Date.now(),
            user: user.email
        }
        addComment(obj);
        setComment('')
        getTopics()
    }


    function timeConverter(timer){
        let a = new Date(timer * 1000);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    useEffect(() => {
        getTopics()
    },[])

    return (
        <div className='chat'>
            <h1>Feedback</h1>
            <div className='chat__comment'>
                {commentsArr.map((elem) => (
                    <div className='com_chat' key={elem.id}>
                        <React.Fragment>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {timeConverter(elem.data)}
                                </Typography>
                                <Typography variant="h6" component="div">
                                    {elem.user}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {elem.comment}
                                </Typography>
                            </CardContent>
                        </React.Fragment>
                    </div>

                ))}

            </div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
            <TextField
                id="outlined-multiline-static"
                label="Comment"
                multiline
                rows={4}
                defaultValue="Default Value"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            </Box>
            <Button onClick={handleClick} variant="contained" disableElevation>
                Add NFT
            </Button>
        </div>
    );
};

export default Chat;