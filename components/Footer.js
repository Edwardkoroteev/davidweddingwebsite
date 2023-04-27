import Logo from "../public/webfront-v5_transparent.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex flex-col justify-center gap-8 items-center">
      <Image src={Logo} alt="Webfront Logo" className="w-32 h-32" />
      <p className="text-[#9E9E9E] text-sm">Copyright © WebFront LLC. 2023 All Rights Reserved.</p>
    </div>
  );
}
