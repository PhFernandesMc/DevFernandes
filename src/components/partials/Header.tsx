import type { headerBtnType } from "@/types/buttonTypes";
import {useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [btnAtivo, setBtnAtivo] = useState<string>("");

  const btns: headerBtnType[] = [
    {
      texto: "Sobre min",
      status: "sobre",
    },
    {
      texto: "Projetos",
      status: "projetos",
    },
    {
      texto: "Experiência",
      status: "experiencia",
    },
    {
      texto: "Educação",
      status: "educacao",
    },
    {
      texto: "Contato",
      status: "contato",
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
                  className={`hover:text-main hover:cursor-pointer ${
                    btnAtivo === btn.status ? "text-main" : ""
                  }`}
                  onClick={() => setBtnAtivo(btn.status)}
                >
                  <Button className="bg-main text-second font-medium">
                    {btn.texto}
                    </Button>
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
