import api from "@/services/api";

export interface IOperator {
  chave: number;
  name: string;
  empresa: number;
}

export interface IOperatorLogin extends IOperator {
  password: string;
}

export async function GetOperadores(): Promise<IOperator[]> {
  try {
    const result = await api.post("/touch", {
      password: process.env.PASSWORD,
    });
    if (Array.isArray(result.data) && result?.data[0]) {
      const operators: IOperator[] = result.data[0]?.operadores || [];
      return operators;
    }
    const arrayError: IOperator[] = [];
    return arrayError;
  } catch (err: any) {
    console.log(err);
    const arrayError: IOperator[] = [];
    return arrayError;
  }
}

export async function LoginOperator(data: IOperatorLogin): Promise<any> {
  try {
    const result = await api.post("/touch/auth", {
      password: process.env.PASSWORD,
      user_id: data?.chave,
      user_password: data?.password,
    });
    return result.data;
  } catch (err: any) {
    if (err?.response?.data?.message) {
      return { ...data, message: err?.response?.data?.message };
    }
    return data;
  }
}
