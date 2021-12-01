const WrittenExportFile = require("./utils/import");

const written = (options) => {
  new WrittenExportFile(options).written();
};

module.exports = (script) => {
  if (script === "assets") {
    written({
      types: ["svg", "png", "jpg", "jpeg", "gif", "ico"],
      write: {
        name: "index.ts",
        forder: "./",
        path: "src/assets/",
      },
      isDelete: true,
      read: "src/assets/",
      isForder: false,
    });
    return;
  }
  if (script === "components") {
    written({
      types: [],
      write: {
        name: "index.ts",
        forder: "./",
        path: "src/components/",
      },
      isDelete: true,
      read: "src/components/",
      isForder: true,
    });
    return;
  }
  console.log("no script access!!!");
};
