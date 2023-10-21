"use client";
import { PDFDocument, PDFFont, rgb, StandardFonts } from "pdf-lib";
export default function page() {
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

  const escreverNoPDFExistente = async () => {
    const existingPdfBytes = await fetch(
      "https://pdf-lib.js.org/assets/form_to_flatten.pdf"
    ).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const [page] = pdfDoc.getPages();

    const text = `Certificamos que Ana Flávia Mesquita concluiu o curso sobre "Professor Criativo e Docência" na plataforma Professor Criativo com carga horária de 40 horas no período de 17/10/2022 a 12/12/2022.`;
    const fontSize = 12;
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const maxWidth = 400;
    const x = (page.getWidth() - maxWidth) / 2;
    const y = 500;

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
    const modifiedPdfUrl = URL.createObjectURL(
      new Blob([modifiedPdfBytes], { type: "application/pdf" })
    );

    window.open(modifiedPdfUrl);
  };

  return (
    <div>
      <button onClick={escreverNoPDFExistente}>Baixar Certificado</button>
    </div>
  );
}
