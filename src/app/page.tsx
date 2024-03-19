import { Container, ContainerForm, ContainerImage, Title } from "./styles";
import Image from "next/image";
import icon from "@/assets/icon.png";

import AppMethods from "./app.method";
import Form from "./components/Form";
import { useRouter } from "next/router";
import api2 from "@/services/api";

const methods = new AppMethods();

export default async function App({ searchParams }: any) {
  const token = searchParams["token"] || "";

  async function sendResetPassword(form: any) {
    "use server";
    console.log(form, "token");
    try {
      const reset = await api2.put(
        "/rsrefeicoes/user/recover",
        {
          ...form,
        },
        {
          headers: {
            Authorization: form?.token || "",
          },
        }
      );
      console.log(reset?.data, "resultado");
      return undefined;
    } catch (err: any) {
      console.log("erro", err);

      return String(
        err?.response?.data?.message ||
          "Erro ao trocar a senha, tente novamente"
      );
    }
  }

  return (
    <Container>
      <ContainerImage>
        <Image src={icon} height={150} width={150} alt="logo" />
        <Title>Rs Refeições</Title>
      </ContainerImage>
      <ContainerForm>
        <Form actionForm={sendResetPassword} token={token} />
      </ContainerForm>
    </Container>
  );
}
