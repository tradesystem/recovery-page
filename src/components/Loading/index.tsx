
import Image from "next/image";
import LogoTrade from "../../assets/logo_trade.png";
import Colors from "@/constants/Colors";

interface ILoading {
  open: boolean;
}

export default function Loading({ open }: ILoading) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 20,
        backgroundColor: Colors.primary,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image
        src={LogoTrade}
        loading="lazy"
        className="logo_trade"
        fill={false}
        quality={100}
        alt="logo_trade"
      />
    </div>
  );
}
