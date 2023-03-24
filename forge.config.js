const { parsed } = require("dotenv").config();
module.exports = {
  packagerConfig: {
    name: "ChatGPT",
    executableName: "ChatGPT",
    icon: "images/icon",
    appBundleId: "com.owenou.chatgptmac",
    extendInfo: {
      LSUIElement: "true",
    },
    osxSign: false,
    osxNotarize: false,
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "owenthereal",
          name: "chatgpt-mac",
        },
        prerelease: true,
      },
    },
  ],

  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {},
    },
    {
      name: "@electron-forge/maker-dmg",
      platforms: ["darwin"],
      config: {},
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
    },
  ],
};
