import api from "@/services/api";
import { apiNext } from "@/services/apiNext";


export interface Item {
    kits?: any[];
    width: number;
    chave: number;
    descricao: string;
    preco_venda: number;
    preco_atacado?: number;
    grupo1: string;
    grupo2: string;
    grupo3: string;
    tipo: string;
    picture: string;
    unidade: string;
    observacao: string;
}


export async function GetProdutos(): Promise<Item[]> {
    try {
      const url = '/gestor/produtos/cardapio?grupo_web=1&order=DESC';
      const result = await apiNext.get(url, {
        next: {
          revalidate: 300,
        },
        headers: {
          Authorization: "40179187000157",
        }
      });
      return result?.data || [];
    } catch (err: any) {
      console.log(err,'erro');
      const arrayError: Item[] = [];
      return arrayError;
    }
}