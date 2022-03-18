import excel from "./excel.worker";
export default class WorkerBuilder extends Worker {
    constructor(worker) {
        super(worker);
        const code = worker.toString();
        const blob = new Blob([`(${code})()`]);
        return new Worker(URL.createObjectURL(blob));
    }
}
export const excelWorker = new WorkerBuilder(excel);
