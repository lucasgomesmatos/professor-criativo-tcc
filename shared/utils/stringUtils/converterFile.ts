const base64ToFile = (
  base64: string | null,
  filename: string,
  mimeType: string
): File | null | undefined => {
  try {
    if (base64) {
      const byteCharacters = atob(base64);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        const slice = byteCharacters.slice(offset, offset + 512);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: mimeType });
      const file = new File([blob], filename, { type: mimeType });

      return file;
    }
  } catch (error) {
    console.error("Erro ao converter base64 em File:", error);
    return null;
  }
};
