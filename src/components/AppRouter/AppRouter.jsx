import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound404Page from '../NotFound404Page/NotFound404Page'
import Homepage from '../Homepage/Homepage';

function AppRouter(props) {
  // const [event, setEvent] = useState(null)
  // const [dialog, setDialog] = useState(false)

  // function handleClose() {
  //   setDialog(false);
  // }

  // axios.interceptors.response.use(null, (error) => {
  //   if (error.toString().includes("Network")) {
  //     setDialog(true)
  //   } else if (error.response.status === 500 || error.response.status === 404) {
  //     setEvent("INTERNAL_SERVER_ERROR")
  //   } else if (error.response.status === 502) {
  //     setEvent("BAD_GATEWAY")
  //   }
  //   return Promise.reject(error);
  // });
  
  return (
    <>
      {/* <Grid container justify="center" className={classes.containerSpacing}> */}
        <Switch>
          <Route path="/" component={Homepage} exact />
          {/* <PrivateRoute path="/" component={ManagementUI} /> */}
          {/* <Redirect exact from="/" to={{ pathname: "/inquiry/home", state: props.location.state }}/> */}
          <Route component={NotFound404Page} />
        </Switch>
      {/* </Grid> */}
      {/* <InfoDialog open={dialog} onClose={handleClose} title="No internet connection" rightButton="Ok">
        <DialogContentText>
          Please check internet connection and try again
        </DialogContentText>
      </InfoDialog> */}
      {/* <ColoredSnackbar open={Boolean(event)} onClose={() => setEvent(null)} event={event}/> */}
    </>
  );
}

export default AppRouter;
