import React, { useState, useEffect } from 'react';
import AllPost from '../AllPost/AllPost';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Home = () => {
    const [allPost, setAllPost] = useState([])
    const [images, setImages] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPost(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const commentsLength = 100;
        const image_url = `https://randomuser.me/api/?results=${commentsLength}&inc=picture`;
        fetch(image_url)
            .then(res => res.json())
            .then(data => setImages(data.results))
            .catch(err => console.log("image ", err))
    }, [])

    images.map((each, index) => allPost[index].image = each.picture.medium)
    console.log(allPost)

    const classes = useStyles();
    return (
        <div>
            {
                allPost.length>0 ? <Container>
                                <div className={classes.root}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={3}>
                                            {/* <Paper className={classes.paper}>xs=6</Paper> */}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {
                                                allPost.map((each, idx) => <AllPost data={each} key={each.id}/>)
                                            }
                                        </Grid>
                                        <Grid item xs={3}>
                                            {/* <Paper className={classes.paper}>xs=3</Paper> */}
                                        </Grid>
                                    </Grid>
                                </div>
                            </Container>
             : <center><CircularProgress disableShrink /></center>
              
            }

            
        </div>
    );
};

export default Home;