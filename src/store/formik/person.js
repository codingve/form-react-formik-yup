import * as Yup from "yup";
import { withFormik } from "formik";

const schema = Yup.object().shape({

  address: Yup.string()
    .required("Informe o endereço!")
    .min(5, "O endereço deve conter no minimo 5 letras!")
    .max(100, "O endereço deve conter menos de 100 letras!"),

  address_complement: Yup.string(),

  number: Yup.string().required("Informe o numero do endereço!"),

  neighborhood: Yup.string()
    .required("Informe o bairro!")
    .min(3, "O bairro deve conter no minimo 3 letras!")
    .max(100, "O bairro deve conter menos de 100 letras!"),

  city: Yup.string()
    .required("Informe a cidade!")
    .min(3, "A cidade deve conter no minimo 3 letras!")
    .max(100, "A cidade deve conter menos de 100 letras!"),
});


export const personWithFormik = withFormik({
  enableReinitialize: true,
  
  handleSubmit: (values) => {
    console.log("Valores informados", values);
    alert("Validado com sucesso!");
  },
  
  mapPropsToValues: () => personData,
  mapPropsToErrors: () => personData,
  mapPropsToTouched: () => personData,
  mapPropsToStatus: () => ({
    message: "",
    severity: "",
    open: false,
    sucess: false,
  }),
  
  validateOnMount: false,
  initialErrors: true,
  initialTouched: true,
  validateOnChange: true,
  validateOnBlur: true,
  validationSchema: schema,
});

export const personData = {
  
  address: "",
  address_complement: "",
  number: "",
  neighborhood: "",
  city: "",
  
};
