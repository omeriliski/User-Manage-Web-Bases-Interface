import {useState,useEffect} from 'react';
import UsersTable from '../../components/Table';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './HomePageStyles';
import {getData} from '../../helper/getData'

const HomePage=()=>{
    const [users,setUsers]=useState();

    const classes = useStyles();

    const getUsers=()=>{
        getData("http://localhost:4000/api/get_users")
        .then((res)=>{
            setUsers(res);
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    useEffect(() => {
        getUsers()
    }, [])
    return(
        <Grid container spacing={3}>
            <Grid item xs={8} className={classes.wrapper}>
                <UsersTable/>
            </Grid>
        </Grid>
    )
}
export default HomePage;