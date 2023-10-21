import { AlertCircle } from "lucide-react";

interface NoResultProps {
  text?: string;
}

export const NoResult = ({ text = "Sem Resultados" }: NoResultProps) => {
  return (
    <div className="mt-10 flex items-center gap-4">
      <AlertCircle className="h-6 w-6 text-gray-50" />{" "}
      <p className="text-lg text-gray-50">{text}</p>
    </div>
  );
};
