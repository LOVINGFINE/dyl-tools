import XLSX from "xlsx";

const handeExcel = (workbook: { [key: string]: any }): Array<string[]> => {
  console.log(workbook);

  return [];
};
export default () => {
  self.onmessage = function ({ data }) {
    const workbook = XLSX.read(data, { type: "binary" });
    handeExcel(workbook);
  };
};
