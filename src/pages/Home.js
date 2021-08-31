import React from 'react'
import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Loginreg from '../components/Loginreg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo2 from '../media/kssfc2.png';
import Divider from '@material-ui/core/Divider';

const Home = () => {
    const useStyles = makeStyles({
        root: {
          minWidth: '50%',
          width: '50%'
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
          marginBottom: 12,
        },
        button: {
            borderRadius: '50%',
            width: 10,
            height: 10,
        },
    });
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div style = {{overflowX: "hidden", overflow: 'hidden'}}>
            <Navbar />
            <center>
                <h2> Karnataka State Souharda Co-operative Ltd. </h2>
                <br />
            <Grid container spacing={3} style = {{height: '100%'}}>
                <Grid item xs={12} sm={6}>
                    <img src = {logo2} alt = '' width = '45%'/> 
                </Grid>
                {/* <Divider orientation="vertical" flexItem /> */}
                <Grid item xs={12} sm={6}>
                    <Card className = {classes.root} >
                        <Loginreg />
                    </Card>
                </Grid>
            </Grid>
            {/* <Card className={classes.root} width = '300px'>
                <CardContent>
                    Login
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="username" label="username" defaultValue="" />
                            <TextField
                                id="spassword"
                                label="password"
                                type="password"
                                autoComplete="current-password"
                            />
                        </div>
                    </form>
                    <br />
                    <Fab color="primary" aria-label="Add" className={classes.fab}>
                        <ArrowForwardIcon />
                    </Fab>
                </CardContent>
                Or
                <CardActions>
                    <Button size="small">Register</Button>
                </CardActions>
            </Card> */}
            
            </center>
        </div>
    )
}

export default Home;