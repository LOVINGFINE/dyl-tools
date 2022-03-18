import XLSX from "xlsx";
const handeExcel = (workbook) => {
    console.log(workbook);
    return [];
};
export default () => {
    self.onmessage = function ({ data }) {
        const workbook = XLSX.read(data, { type: "binary" });
        handeExcel(workbook);
    };
};
