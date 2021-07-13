import React, { memo } from "react";
import {
  FormControl, InputAdornment, TextField, Button
} from "@material-ui/core";
import { GpsFixed, Save, LocalConvenienceStore, LocationCity, Room } from '@material-ui/icons';
import { ErrorMessage } from "formik";
import { HelperTextError } from "../../../components/Error";


const AddressData = (props) => {
  const { values, handleChange, handleBlur, handleSubmit } = props;
  
  return (
    <div>
      {/* Numero */}
      <FormControl style={{ marginTop: "32px" }}>
        <TextField
          id="customer-number"
          name="number"
          label="Número"
          margin="none"
          value={values.number}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalConvenienceStore />
              </InputAdornment>
            )
          }}
        />
        <ErrorMessage component={HelperTextError} name={"number"} />
      </FormControl>

      {/* Endereço */}
      <FormControl style={{ marginTop: "32px" }}>
        <TextField
          id="customer-address"
          name="address"
          label="Endereço (Logradouro)"
          margin="none"
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GpsFixed />
              </InputAdornment>
            )
          }}
        />

        <ErrorMessage component={HelperTextError} name={"address"} />
      </FormControl>

      {/* Complemento */}
      <FormControl style={{ marginTop: "32px" }}>
        <TextField
          id="customer-address-complement"
          name="address_complement"
          label="Complemento"
          margin="none"
          value={values.address_complement}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GpsFixed />
              </InputAdornment>
            )
          }}
        />

        <ErrorMessage component={HelperTextError} name={"address_complement"} />
      </FormControl>

      {/* Bairro */}
      <FormControl style={{ marginTop: "32px" }}>
        <TextField
          id="customer-neighborhood"
          name="neighborhood"
          label="Bairro"
          margin="none"
          value={values.neighborhood}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Room />
              </InputAdornment>
            )
          }}
        />

        <ErrorMessage component={HelperTextError} name={"neighborhood"} />
      </FormControl>

      {/* Cidade */}
      <FormControl style={{ marginTop: "32px" }}>
        <TextField
          id="customer-city"
          name="city"
          label="Cidade"
          margin="none"
          value={values.city}
          onChange={handleChange}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationCity />
              </InputAdornment>
            )
          }}
        />

        <ErrorMessage component={HelperTextError} name={"city"} />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          type="submit"
          startIcon={<Save />}
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </FormControl>

    </div>
  );
};

export default memo(AddressData);
