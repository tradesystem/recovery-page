import Colors from "@/constants/Colors";
import { Select, TextField } from "@mui/material";
import styled from "@emotion/styled";
import Medias from "@/constants/Medias";

interface IButtonForm {
  disabled: boolean;
}

export const ContainerForm = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export const TitleError = styled.div`
  font-size: 14px;
  color: ${Colors.danger};
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border-bottom-color: ${Colors.primary};
  border-bottom-width: 1px;
`;

export const Input = styled(TextField)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.422);
  width: 100%;
  height: 53px;
  color: ${Colors.white} !important;
  font-size: 15px;
  background-color: ${Colors.bgForm};
  border-radius: 10px;
  margin-top: -30px;
  &::placeholder {
    color: ${Colors.white};
  }
  & > .MuiInputBase-root > fieldset {
    border: none;
  }
`;

export const ContainErrorSpan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const IconContain = styled.div`
  width: 15%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.bgForm};
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const SelectOperator = styled(Select)`
  background-color: ${Colors.bgForm};
  height: 53px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.422);
  border-radius: 10px;
  color: ${Colors.white};
  font-size: 15px;
  & > fieldset {
    border: none;
  }
`;

export const Label = styled.div`
  display: flex;
  width: 100%;
  color: ${Colors.white};
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 400;
  font-size: 1.1em;
  letter-spacing: 1.5px;
  margin-bottom: 15px;
  margin-top: 20%;
  @media (max-width: ${Medias.xl}px) {
    margin-top: 10%;
  }
  & > span {
    margin-left: 2.5%;
  }
`;

export const ContainButton = styled.div<IButtonForm>`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  height: 45px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.disabled ? Colors.disable : Colors.bgButton};
  margin-top: 30px;

  &:active {
    opacity: 0.5;
  }
`;

export const TitleButton = styled.span`
  color: ${Colors.white};
  font-size: 16px;
`;
