import React, { memo } from "react";
import { Grid } from "@material-ui/core";
import { personWithFormik } from "../../store/formik/person";

import AddressData from "./AddressData";

function PersonForm(props) {

  return (
    <div>
      {/* Informações do Endereço*/}
      <Grid item xs={12}>
        <AddressData {...props} />
      </Grid>
    </div>
  );
}

export default memo(personWithFormik(PersonForm));
