import React,{useState,useEffect} from "react"
import Grid from '@material-ui/core/Grid'
import Blocks from "./Blocks"
import SavingsGoal from "./SavingsGoal"
import Header from "./Header"

function Dashboard(props) {
  
    return (
        <Grid container spacing={3}>
     <Grid item sm={8} xs={12}> 
         
         <Grid container>
             <Grid item xs={12} lg={12} sm={12}><Header/></Grid>
         </Grid>
         <Grid container>
             <Grid item xs={12} sm={12}><Blocks /></Grid>  
         </Grid>
         <Grid container>
             <Grid item xs={12} sm={12}>Recent Transactions</Grid> 
         </Grid>
     </Grid>
     <Grid item sm={4} xs={12}>
     <Grid container>
             <Grid item sm={8} xs={12}>Total Budget</Grid>
         </Grid>
         <Grid container>
             <Grid item sm={8} xs={12}>Balance</Grid>
         </Grid>
         <Grid container>
             <Grid item sm={8} xs={12}>Due </Grid>
         </Grid>
         <Grid container>
             <Grid item sm={8} xs={12}><SavingsGoal/></Grid>
         </Grid>
     </Grid>
</Grid>
    )
}
export default Dashboard
