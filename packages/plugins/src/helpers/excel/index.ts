import { excelWorker } from "./worker";
export const read = (file: File) => {
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e?.target?.result) {
        excelWorker.postMessage(e?.target?.result);
      }
    };
    reader.readAsBinaryString(file);
  });
};

export default {
  read,
};
