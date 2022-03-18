import { excelWorker } from "./worker";
export const read = (file) => {
    return new Promise((res, rej) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            var _a, _b;
            if ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.result) {
                excelWorker.postMessage((_b = e === null || e === void 0 ? void 0 : e.target) === null || _b === void 0 ? void 0 : _b.result);
            }
        };
        reader.readAsBinaryString(file);
    });
};
export default {
    read,
};
