"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Select from "../Select";

//todo Geçici bir dil paketi uyguladım.
//todo Next intl kullanarak dil paketine uygun projeler geliştirdim

const footerData = [
  {
    titleTR: "Ürün",
    titleEN: "Product",
    subtitles: [
      {
        titleTR: "Fiyatlandırma",
        titleEN: "Pricing",
        link: "#",
      },
      {
        titleTR: "Genel Bakış",
        titleEN: "Overview",
        link: "#",
      },
      {
        titleTR: "Göz At",
        titleEN: "Browse",
        link: "#",
      },
      {
        titleTR: "Erişilebilirlik",
        titleEN: "Accessibility",
        link: "#",
      },
      {
        titleTR: "Beş",
        titleEN: "Five",
        link: "#",
      },
    ],
  },
  {
    titleTR: "Çözümler",
    titleEN: "Solutions",
    subtitles: [
      {
        titleTR: "Beyin Fırtınası",
        titleEN: "Brainstorming",
        link: "#",
      },
      {
        titleTR: "Fikir Üretme",
        titleEN: "Ideation",
        link: "#",
      },
      {
        titleTR: "Şema Tasarımı",
        titleEN: "Wireframing",
        link: "#",
      },
      {
        titleTR: "Araştırma",
        titleEN: "Research",
        link: "#",
      },
      {
        titleTR: "Tasarım",
        titleEN: "Design",
        link: "#",
      },
    ],
  },
  {
    titleTR: "Destek",
    titleEN: "Support",
    subtitles: [
      {
        titleTR: "Bize Ulaşın",
        titleEN: "Contact Us",
        link: "#",
      },
      {
        titleTR: "Geliştiriciler",
        titleEN: "Developers",
        link: "#",
      },
      {
        titleTR: "Dokümantasyon",
        titleEN: "Documentation",
        link: "#",
      },
      {
        titleTR: "Entegrasyonlar",
        titleEN: "Integrations",
        link: "#",
      },
      {
        titleTR: "Raporlar",
        titleEN: "Reports",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  const [activeLanguage, setActiveLanguage] = React.useState("EN");

  return (
    <div className="h-[464px] bg-primary px-20 text-white">
      <div className="flex items-start gap-12 border-b py-12">
        {footerData.map((data, index) => (
          <div key={index} className="flex min-w-[284px] flex-col">
            <h1 className="py-3 text-md font-medium">
              {activeLanguage === "EN" ? data.titleEN : data.titleTR}
            </h1>
            <div className="flex flex-col">
              {data.subtitles.map((subtitle, index) => (
                <Link key={index} href={subtitle.link} className="py-3 text-md">
                  {activeLanguage === "EN"
                    ? subtitle.titleEN
                    : subtitle.titleTR}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="space-y-2">
          <h2 className="py-3 text-md font-medium">
            {activeLanguage === "EN" ? "Get the App" : "Uygulamayı İndir"}
          </h2>

          <Image
            src="/images/footer/apple.png"
            alt="ios"
            width={200}
            height={200}
            className="h-10 w-auto object-contain"
          />
          <Image
            src="/images/footer/gplay.png"
            alt="google play"
            width={200}
            height={200}
            className="mt-[10px] h-10 w-auto object-contain"
          />
          <p className="py-3 text-md">
            {activeLanguage === "EN" ? "Follow Us" : "Bizi Takip Et"}
          </p>
          <div className="flex gap-4">
            <Image
              src="/images/footer/youtube.svg"
              alt="youtube"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/images/footer/facebook.svg"
              alt="facebook"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/images/footer/twitter.svg"
              alt="twitter"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/images/footer/instagram.svg"
              alt="instagram"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <Image
              src="/images/footer/linkedin.svg"
              alt="linkedin"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-12 py-6">
        <p className="w-full text-md">Collers @ 2023. All rights reserved.</p>
        <div className="flex items-center gap-8">
          <Link href="#" className="text-md">
            Terms
          </Link>
          <Link href="#" className="text-md">
            Privacy
          </Link>
          <Link href="#" className="text-md">
            Contact
          </Link>
          <Select
            data={[
              {
                id: 1,
                name: "English",
              },
              {
                id: 2,
                name: "Türkçe",
              },
            ]}
            placeholder={activeLanguage}
            onClick={(id) => setActiveLanguage(id === 1 ? "EN" : "TR")}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
