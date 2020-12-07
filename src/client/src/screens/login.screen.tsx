import React, {useState} from "react";
import { RouteComponentProps } from '@reach/router';
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";
import './style.css';

interface LoginScreenProps extends RouteComponentProps {}

export const LoginScreen = (props: LoginScreenProps) =>  {

    const initialState = {
        username: '',
        password: ''
    }

    const [state, setState] = useState(initialState)

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setState({...state, [evt.target.name] : evt.target.value})
    }


    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // make backend call here -> probably a thunk
        if (state.username == 'admin@littech.in' && state.password == 'secret') {
            alert('login in')
        } else {
            alert('Incorrect Credntials!');
        }
    }
    
    return (
            <div>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                            <Grid item>
                                <Typography variant="h6">KHILABS</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={2}
                                className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Log in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={handleSubmit}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="username"
                                                    variant="outlined"
                                                    value={state.username}
                                                    onChange={handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={state.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item>                            
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
}