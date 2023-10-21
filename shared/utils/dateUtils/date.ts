import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
const formatDate = "dd/MM/yyyy HH:mm:ss";

export const formatDateLocaleBr = (
  data: string | number | Date | undefined
) => {
  if (data === undefined) return "N/D";

  return format(new Date(data), formatDate, { locale: ptBR });
};

export const formatDateISO = (data: string | number | Date | undefined) => {
  if (data === undefined) return "N/D";

  return format(new Date(data), "dd/MM/yyyy", { locale: ptBR });
};
