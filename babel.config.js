module.exports = {
  presets: ["@vue/app",
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true,
        // "libraryName": "element-ui",
        // "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
