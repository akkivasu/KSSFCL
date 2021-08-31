import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DoneIcon from '@material-ui/icons/Done';
import { useState } from 'react';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: '100%'
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function login() {
    console.warn(username, password);
    let item = {username, password};
    let result = await fetch("", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(item)
    })
    result = await result.json();
    localStorage.setItem('user-info', JSON.stringify(result));
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color = 'default'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" indicatorColor = 'primary' textColor = 'primary' variant = 'fullwidth'>
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Register" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="username" label="username" defaultValue="" fullWidth onChange = {(e) => setUsername(e.target.value)}/>
                            <TextField
                                id="spassword"
                                label="password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <br />
                    <Fab color="primary" aria-label="Add" className={classes.fab} onClick = {login}>
                        <ArrowForwardIcon />
                    </Fab>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="username" label="username" defaultValue="" fullWidth/>
                            <TextField
                                id="password"
                                label="password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                            />
                            <TextField
                                id="rpassword"
                                label="confirm password"
                                type="password"
                                autoComplete="current-password"
                                fullWidth
                            />
                        </div>
                    </form>
                    <br />
                    <Fab color="primary" aria-label="Add" className={classes.fab}>
                        <DoneIcon />
                    </Fab>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </div>
  );
}