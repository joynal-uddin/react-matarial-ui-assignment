import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';    
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
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
        borderRadius: 20,
        paddingRight: 10,
        marginBottom: 30,
        boxShadow: '5px 5px 10px gray',
    },
    img: {
        marginLeft: '30%',
        borderRadius: '50%',
        textAlign: 'center'
    }
});

const Comments = (props) => {
    const comments = props.comments;
    const images = props.images;

    images.map((img, idx) => {
        comments[idx].image = img.picture.medium;
    })

    const classes = useStyles();

    return (
        <div>
            <h4>Comments : {comments.length}</h4>
            {
                comments.map(each =>
                    <div style={{ flexGrow: '1' }} className={classes.pos}>
                        <Grid container spacing={3}>
                            <Grid item xs={3}>
                                <img src={each.image} className={classes.img} height="70" alt="" />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography>
                                    <b>
                                        {each.name}
                                        <br />
                                        <small>
                                            {each.email}
                                        </small>
                                    </b>
                                    <br /><br />
                                    {each.body}
                                    <br />
                                    <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                        </CardActions>
                                </Typography>
                            </Grid>
                            </Grid>
                    </div>
                )
            }

        </div>
                );
};

export default Comments;