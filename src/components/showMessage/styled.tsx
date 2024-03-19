import Colors from "@/constants/Colors";
import styled from "@emotion/styled";
import { keyframes } from "@mui/styled-engine";

export interface ITypeMessage {
  type: "warning" | "sucess" | "danger";
  time: number;
}

export interface IProgress {
  time: number;
}
export const renderColor = (type: "warning" | "sucess" | "danger") => {
  switch (type) {
    case "warning":
      return Colors.warning;
    case "sucess":
      return Colors.sucess;
    case "danger":
      return Colors.danger;
    default:
      return Colors.primary;
  }
};

const ProgressAnimation = keyframes`
 0% { opacity: 1}
 45% { opacity: 1}
 75% { opacity: 1}
 100% { opacity: 0 }
`;

export const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 55;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerAlert = styled.div<ITypeMessage>`
  width: 80%;
  max-width: 450px;
  height: 40px;
  background-color: ${(props) => renderColor(props.type)};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  opacity: 0;
  animation-name: ${ProgressAnimation};
  animation-duration: ${(props) => props.time}s;
`;

export const ContainerMessageIcon = styled.div`
  display: flex;
  flex: 1;
`;

export const Message = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.white};
  font-size: 13px;
  padding-left: 5px;
  flex: 9;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProgressBar = styled.div<IProgress>`
  width: 80%;
  height: 30px;
  border-radius: 20px;
  background-color: #172ad3;
  animation-name: ${ProgressAnimation};
  animation-duration: ${(props) => props.time}s;
`;

export const ContainerProgressBar = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
