import type { headerBtnType } from "@/types/buttonTypes";
import { useEffect, useState } from "react";

const Header = () => {
  const [btnAtivo, setBtnAtivo] = useState<string>("");

  useEffect(() => {
    console.log(btnAtivo);
  }, [btnAtivo]);

  const btns: headerBtnType[] = [
    {
      texto: "Sobre min",
      status: "about",
    },
    {
      texto: "Projetos",
      status: "projects",
    },
    {
      texto: "Experiência",
      status: "expirience",
    },
    {
      texto: "Educação",
      status: "education",
    },
    {
      texto: "Contato",
      status: "contact",
    },
  ];

  return (
    <>
      <div className="sticky top-0 w-full border-b-1 border-black shadow-xl bg-black/70 backdrop-blur-md">
        <header className="bg-transparent w-full flex justify-between text-white">
          <div className="flex items-center">
            <img src="../src/assets/Logo.png" className="h-16 w-16" alt="" />
            <p className="w-1 leading-4">Dev Fernandes</p>
          </div>
          <div className="p-5">
            <ul className="flex gap-5">
              {btns.map((btn, index) => (
                <li
                  key={index}
                  className={`text-main hover:text-main-lighter hover:cursor-pointer border-b-1 border-black/10 ${
                    btnAtivo === btn.status ? "text-main-lighter border-b-1 border-main-lighter" : ""
                  } transition-all ease-in duration-300`}
                  onClick={() => setBtnAtivo(btn.status)}
                >
                  <p>{btn.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
