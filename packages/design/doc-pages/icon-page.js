import unicodes from "../components/Icon/font-unicode.json";
import Icon from "../components/Icon";
import { message } from "../components/index";
import "./mdx.scss";

export const codeArray = () => {
  const arr = [];
  for (const key in unicodes) {
    arr.push(key);
  }
  return arr;
};

function IconTempPage() {
  const codes = codeArray();
  const copyCode = (key) => {
    const content = `<Icon name="${key}" />`;
    let copy = (e) => {
      e.preventDefault();
      e.clipboardData.setData("text/plain", content);
      message.success(`${content} 复制成功`);
      document.removeEventListener("copy", copy);
    };
    document.addEventListener("copy", copy);
    document.execCommand("Copy");
  };
  return (
    <div className="icon-page">
      {codes.map((ele) => {
        return (
          <div
            className="icon-page-item"
            title="点击复制代码"
            onClick={() => copyCode(ele)}
            key={ele}
          >
            <Icon name={ele} />
          </div>
        );
      })}
    </div>
  );
}
export default IconTempPage;
