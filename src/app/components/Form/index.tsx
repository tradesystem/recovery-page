"use client";

import Colors from "@/constants/Colors";
import { Values, schema } from "@/schemas/login.schema";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Formik, FormikProps } from "formik";
import {
  ContainerForm,
  ContainErrorSpan,
  InputContainer,
  TitleButton,
  Input,
  ContainButton,
  Label,
  SelectOperator,
} from "./styles";
import { FaAsterisk } from "react-icons/fa6";

import { FaUsers, FaSortDown } from "react-icons/fa";
import { IOperator } from "@/requests/login.request";
import ShowMessage, { IPropsMessage } from "@/components/showMessage";
import { useEffect, useRef, useState } from "react";

interface IForm {
  actionForm: (data: typeof Values) => void;
  token: string;
}

export default function Form({ actionForm, token }: IForm) {
  const formik = useRef<FormikProps<typeof Values>>(null);
  const [messageData, setMessageData] = useState<IPropsMessage>({
    message: "",
    time: 0,
    type: "danger",
  });

  return (
    <Formik
      innerRef={formik}
      initialValues={Values}
      onSubmit={async (values: typeof Values) => {
        const teste = await actionForm({ ...values, token: token });
        if (typeof teste === "string") {
          if (teste === "Authorization not found") {
            setMessageData({
              message: "Sem autorização!",
              time: 5,
              type: "danger",
            });
          } else {
            setMessageData({ message: teste, time: 5, type: "danger" });
          }
        } else {
          setMessageData({
            message: "Troca de senha realizada com sucesso!",
            time: 5,
            type: "sucess",
          });
        }
      }}
      validationSchema={schema}
    >
      {({
        isValid,
        touched,
        dirty,
        handleChange,
        setFieldValue,
        isSubmitting,
        handleBlur,
        errors,
        handleSubmit,
        values,
      }) => (
        <ContainerForm>
          <ShowMessage
            time={messageData.time}
            message={messageData.message}
            type={messageData.type}
            onEndMessage={(resetData) => {
              console.log(resetData);
              setMessageData({ ...resetData });
            }}
          />

          <FormControl style={{ width: "70%" }}>
            <Label>
              <span>Senha</span>
            </Label>
            <InputContainer>
              <Input
                placeholder="senha"
                type={"password"}
                helperText={(touched.password && errors?.password) || ""}
                FormHelperTextProps={{ sx: { color: Colors.danger } }}
                onChange={(e: any) => {
                  setFieldValue("password", e?.target?.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaAsterisk color={Colors.white} />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur("password")}
                value={values?.password}
                autoCapitalize="none"
              />
            </InputContainer>
          </FormControl>

          <FormControl style={{ width: "70%" }}>
            <Label>
              <span>Confirmar senha</span>
            </Label>
            <InputContainer>
              <Input
                placeholder="Confirmar Senha"
                type={"password"}
                helperText={
                  (touched.confirm_password && errors?.confirm_password) || ""
                }
                FormHelperTextProps={{ sx: { color: Colors.danger } }}
                onChange={(e: any) => {
                  setFieldValue("confirm_password", e?.target?.value);
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaAsterisk color={Colors.white} />
                    </InputAdornment>
                  ),
                }}
                onBlur={handleBlur("confirm_password")}
                value={values?.confirm_password}
                autoCapitalize="none"
              />
            </InputContainer>
          </FormControl>

          <ContainButton
            onClick={() => {
              isSubmitting ? {} : handleSubmit();
            }}
            disabled={!isValid}
          >
            <TitleButton>
              {isSubmitting ? (
                <CircularProgress style={{ color: Colors.white }} size={15} />
              ) : (
                "Confirmar troca de senha"
              )}
            </TitleButton>
          </ContainButton>
        </ContainerForm>
      )}
    </Formik>
  );
}
