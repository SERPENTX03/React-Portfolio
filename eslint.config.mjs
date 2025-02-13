import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,  // ตรวจสอบว่า baseDirectory นี้ชี้ไปยัง root ของโปรเจกต์
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn", // ตัวอย่างการเพิ่มกฎเพิ่มเติม
    },
  },
];

export default eslintConfig;
