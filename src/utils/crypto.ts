import { SM4 } from "gm-crypto";
import toast from "svelte-french-toast";

/** 解密 */
export const decryptBySM4 = (
  encryptedData: any,
  KEY: string,
  stringify: boolean
) => {
  let result = SM4.decrypt(encryptedData, KEY, {
    inputEncoding: "base64",
    outputEncoding: "utf8",
  });
  return stringify ? result : JSON.parse(result);
};

/** 加密 */
const encryptBySM4 = (originalData: any, KEY: string) => {
  let data =
    typeof originalData === "string"
      ? originalData
      : JSON.stringify(originalData);
  return SM4.encrypt(data, KEY, {
    inputEncoding: "utf8",
    outputEncoding: "base64",
  });
};

/**
 * 复制文案
 * @param text 需要复制的文字
 */
export const copyText = (text: string) => {
  if (!text) {
    toast.error("No content👻");
    return;
  }
  try {
    var aux = document.createElement("input");
    aux.setAttribute("value", text);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);

    // navigator.clipboard.writeText(text);
    toast.success("Copy successful🫡");
  } catch {
    toast.error("Copy failure😣");
  }
};
