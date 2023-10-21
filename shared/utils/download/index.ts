import { PDFDocument, PDFFont, StandardFonts, rgb } from "pdf-lib";
import toast from "react-hot-toast";
import { formatDateISO } from "../dateUtils/date";
import { normalizeCpfNumber } from "../stringUtils/mask";

export const downloadPDF = async (
  nameActivity: string,
  str: string,
  nameUser: string | null,
  cpfUser: string | null,
  setLoading: () => void
) => {
  try {
    setLoading();
    const existingPdfBytes = await fetch(str).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const [page] = await pdfDoc.getPages();
    const text = `${nameUser} - ${cpfUser && normalizeCpfNumber(cpfUser)}`;
    const fontSize = 12;
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const { width } = page.getSize();

    page.drawText(text, {
      x: width / 3,
      y: 10,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
      opacity: 0.2,
    });

    const modifiedPdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
      type: "application/pdf",
    });

    // Create a URL for the blob
    const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = modifiedPdfUrl;
    downloadLink.download = `${nameActivity}.pdf`;

    // Add the download link to the document
    document.body.appendChild(downloadLink);

    // Programmatically click the download link to trigger the download
    downloadLink.click();

    // Clean up the URL object after the download has started
    URL.revokeObjectURL(modifiedPdfUrl);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Erro ao fazer o download da atividade.");
  } finally {
    setLoading();
  }
};

const wrapText = (
  text: string,
  maxWidth: number,
  fontSize: number,
  font: PDFFont
): string[] => {
  const words = text.split(" ");
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const currentWidth = font.widthOfTextAtSize(
      currentLine + " " + word,
      fontSize
    );

    if (currentWidth < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }

  lines.push(currentLine);
  return lines;
};

export const downloadCertificate = async (
  str: string,
  created_at: string,
  duration: string,
  nameUser: string,
  nameCourse: string,
  setLoading: () => void
) => {
  try {
    setLoading();
    const existingPdfBytes = await fetch(str).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const [page] = await pdfDoc.getPages();
    const text = `Certificamos que ${nameUser} concluiu o curso sobre "${nameCourse}" na plataforma Professor Criativo. com carga horária de ${duration} h, finalizado na data ${formatDateISO(
      created_at
    )}`;

    const { width } = page.getSize();

    const fontSize = 24;
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const maxWidth = 980;
    const x = (page.getWidth() - maxWidth) / 2;
    const y = 400;

    const lines = wrapText(text, maxWidth, fontSize, font);
    lines.forEach((line, index) => {
      const lineHeight = fontSize * 1.2;
      const lineY = y - index * lineHeight;

      const textWidth = font.widthOfTextAtSize(line, fontSize);
      const lineX = x + (maxWidth - textWidth) / 2;

      page.drawText(line, {
        x: lineX,
        y: lineY,
        size: fontSize,
        font,
        color: rgb(0, 0, 0),
      });
    });

    const modifiedPdfBytes = await pdfDoc.save();
    const modifiedPdfBlob = new Blob([modifiedPdfBytes], {
      type: "application/pdf",
    });

    // Create a URL for the blob
    const modifiedPdfUrl = URL.createObjectURL(modifiedPdfBlob);

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = modifiedPdfUrl;
    downloadLink.download = `${nameCourse}.pdf`;

    // Add the download link to the document
    document.body.appendChild(downloadLink);

    // Programmatically click the download link to trigger the download
    downloadLink.click();

    // Clean up the URL object after the download has started
    URL.revokeObjectURL(modifiedPdfUrl);
  } catch (error) {
    console.error("Error:", error);
    toast.error("Erro ao fazer o download da atividade.");
  } finally {
    setLoading();
  }
};
