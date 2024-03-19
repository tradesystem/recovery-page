"use client";
import React from "react";
import NotFound from './produto.png';
import Image from "next/image";

export default function ImageCustom({ item, full }: any) {
  return (
    <Image
      alt={item?.descricao}
      height={85}
      width={100}
      src={`https://cardapiojkservic1.websiteseguro.com/fotos/${full ? `PD${String(item?.chave).padStart(6, '0')}.JPG` : item?.img}`}
      onError={(e: any) => {
        e.target.srcset = './produto.png';
      }}
    />
  );
}
