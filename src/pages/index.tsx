import Head from "next/head";
import QRImage from "../../public/images/image-qr-code.png";
import Image from "next/image";
import { outfit_400, outfit_700 } from "../styles/fontsSettings";
import { Footer } from "../components/index";

export default function Home() {
  return (
    <div id="_next">
      <Head>
        <title>QR Code FrontEnd Challenge - YOGA PANGESTU</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta
          name="description"
          content="a QR Code for Front End Developer Challenge. Created by Yoga723"
        />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen bg-[#D5E1EF]">
        <main className="z-10 w-full md:w-10/12 h-auto max-w-xs min-h-fit bg-[#FEFFFF] font-mono text-sm flex flex-col items-center shadow-xl rounded-2xl mt-7 pb-10">
          <Image
            src={QRImage}
            alt="picture of QR"
            className="flex rounded-xl max-w-[345px] w-11/12  mt-4"
          />

          <div className="flex flex-col px-4 items-center">
            <h1
              className={`text-[#333C55] text-[24px] text-center ${outfit_700.variable} font-merryWeather_700 font-bold pt-7 pb-5`}
            >
              Improve your front-end <br /> skills by building projects
            </h1>

            <p
              className={`flex-wrap w-9/12 text-[#A9ACB3] font-normal text-[15px] text-center ${outfit_400.variable} font-merryWeather_400`}
            >
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
