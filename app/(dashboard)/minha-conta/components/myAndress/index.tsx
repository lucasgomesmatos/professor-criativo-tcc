"use client";
import { Button } from "@/components/base/button";
import { TextInputBase } from "@/components/base/forms/textInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { Save } from "lucide-react";
import { Element } from "react-scroll";

export const MyAndress = () => {
  return (
    <Element name="a2" className="rounded-md bg-gray-700 p-8">
      <h1 className="text-2xl font-bold">Meus Dados</h1>
      <div className="mt-6 flex flex-col items-center justify-center">
        <div className="mt-6 flex w-full flex-col gap-6">
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
            <div className="w-full md:w-52 ">
              <TextInputBase
                label="CEP"
                id="cep"
                type="text"
                className="border-none pl-4 pr-4"
              />
            </div>
            <div className="w-full">
              <TextInputBase
                label="Rua"
                id="road"
                type="text"
                className="border-none pl-4 pr-4"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
            <div className="flex w-full items-end gap-4 ">
              <TextInputBase
                label="Número"
                id="number"
                type="text"
                className="border-none pl-4 pr-4"
              />
              <div className="mb-3 flex items-center space-x-2">
                <Checkbox
                  id="number-off"
                  className="h-5  w-5 bg-gray-950 data-[state=checked]:bg-purple-500 data-[state=checked]:text-gray-800"
                />
                <Label
                  htmlFor="number-off"
                  className="cursor-pointer font-bold"
                >
                  Sem número
                </Label>
              </div>
            </div>

            <div className="w-full">
              <TextInputBase
                label="Complemento"
                id="complement"
                type="text"
                className="border-none pl-4 pr-4"
              />
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
            <div className="w-full">
              <TextInputBase
                label="Bairro"
                id="neighborhood"
                type="text"
                className="border-none pl-4 pr-4"
              />
            </div>
            <div className="w-full">
              <TextInputBase
                label="Cidade"
                id="city"
                type="text"
                className="border-none pl-4 pr-4"
              />
            </div>
            <div className="w-full md:w-52">
              <TextInputBase
                label="Estado"
                id="state"
                type="text"
                className="border-none pl-4 pr-4 "
              />
            </div>
          </div>

          <TextInputBase
            label="Telefone"
            id="phone"
            type="text"
            className="w-full border-none pl-4 pr-4 md:w-72"
          />

          <Button className="text-md mt-2  flex w-36 items-center justify-center gap-2 p-2">
            <Save className="w-4" /> Salvar
          </Button>
        </div>
      </div>
    </Element>
  );
};
