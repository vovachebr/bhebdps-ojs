import js from "@eslint/js";

export default [
    js.configs.recommended,
   {
    plugins: {
      extends: ["airbnb-base/legacy"]
    },
    rules: {
      "no-undef": [
        "error",
      ]
    }
   }
];