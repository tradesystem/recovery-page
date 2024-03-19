"use client";
import Colors from "@/constants/Colors";
import React, { useEffect, useState } from "react";
import {
  IoWarningOutline,
  IoCloseCircle,
  IoCheckmarkCircle,
} from "react-icons/io5";

import {
  Container,
  ContainerAlert,
  ContainerMessageIcon,
  ContainerProgressBar,
  ContainerIcon,
  Message,
  ITypeMessage,
  ProgressBar,
} from "./styled";

export interface IPropsMessage {
  type: "warning" | "sucess" | "danger";
  time: number;
  message: string;
}

interface IShowMessage extends ITypeMessage {
  message: string;
  onEndMessage: (data: IPropsMessage) => void;
}

export default function ShowMessage({
  type = "danger",
  time = 5,
  message = "",
  onEndMessage,
}: IShowMessage) {
  const [progress, setProgress] = useState(time);
  const renderIcon = () => {
    switch (type) {
      case "warning":
        return <IoWarningOutline color={Colors.white} size={20} />;
      case "sucess":
        return <IoCheckmarkCircle color={Colors.white} size={20} />;
      case "danger":
        return <IoCloseCircle color={Colors.white} size={20} />;
      default:
        return undefined;
    }
  };

  useEffect(() => {
    console.log("chamo");
    const timeout = setTimeout(() => {
      onEndMessage({ message: "", time: 0, type: "danger" });
    }, time * 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time, message, type]);

  return (
    <Container>
      {message && time > 0 && (
        <ContainerAlert type={type} time={time}>
          <ContainerMessageIcon>
            <Message>{message}</Message>
            <ContainerIcon>{renderIcon()}</ContainerIcon>
          </ContainerMessageIcon>
        </ContainerAlert>
      )}
    </Container>
  );
}
