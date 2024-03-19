import * as Yup from "yup";

export const Values = {
    confirm_password: "",
    password: "",
    token: '',
};

export const schema = Yup.object().shape({
    password: Yup.string().required("Senha não encontrada!"),
    confirm_password: Yup.string()
    .required("Senha de confirmação")
    .oneOf([Yup.ref("password")], "Senhas não conferem"),
});