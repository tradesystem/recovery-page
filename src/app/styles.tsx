"use client";
import Colors from "@/constants/Colors";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100dvh;
  width: 100vw;
  background-color: ${Colors.white};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  color: ${Colors.primary};
  font-size: 2em;
  text-align: center;
  margin-top: 20px;
`;

export const ContainerForm = styled.div`
  height: 55vh;
  aspect-ratio: 1/1;
  border-radius: 20px;
  display: flex;
  border: 1px solid ${Colors.primary};
`;
