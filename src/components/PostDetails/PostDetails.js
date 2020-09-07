import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { IconButton, Container, Grid, Paper } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Comments from '../Comments/Comments';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 20,
        boxShadow: '5px 5px 10px gray',
    },
});

const copyStyle = {
    textAlign:'center',
    color:'black',
    fontWeight:'bold',

};
   


const PostDetails = () => {

    const {id} = useParams()
    // const id =user
    // console.log(image);

    console.log("details of ", id)
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [images, setImages] = useState([])


    useEffect(() => {
        const comment_url = `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
        fetch(comment_url)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(err => console.log("comment ", err))
    }, [id])

    useEffect(() => {
        const post_url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(post_url)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch(err => console.log("post details ", err))
    }, [id])

    useEffect(() => {
        const commentsLength = 5;
        const image_url = `https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=${commentsLength}&inc=picture`;
        fetch(image_url)
            .then(res => res.json())
            .then(data => setImages(data.results))
            .catch(err => console.log("image ", err))
    }, [])

    const classes = useStyles();

    const { userId, title, body } = post;
    return (
        <div>
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            {/* <Paper className={classes.paper}>Left</Paper> */}
                        </Grid>
                        <Grid item xs={6}>
                            <Card className={classes.root, classes.pos}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <br></br>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        {body}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                            <Comments comments={comments} images={images}></Comments>
                        </Grid>
                        <Grid item xs={3}>
                            {/* <Paper className={classes.paper}>Right</Paper> */}
                        </Grid>
                    </Grid>
                </div>
                <div style={copyStyle}>
                    <p> Copy Right by Joynal Uddin Bhuiyan</p>
                </div>
            </Container>
        </div>
    );
};

export default PostDetails;