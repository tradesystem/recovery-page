"use client";
import styled from "@emotion/styled";
import Colors from "../../constants/Colors";

const full_width = "100vw";
const full_height = "100vh";

interface IContainerLoading {
  open: boolean;
}

export const ContainerLoading = styled.div<IContainerLoading>`
  flex: 1;
  align-items: center;
  flex-direction: column;
  background-color: ${Colors.primary};
  position: absolute;
  z-index: 10;
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding-bottom: 15vh;
`;

export const Titulo = styled.span`
  font-size: 26px;
  color: #e0040b;
  text-align: center;
  margin-top: 10px;
`;
