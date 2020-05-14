const withPlugins = require('next-compose-plugins')
const { withExpo } = require('@expo/next-adapter')
const withSvgr = require('next-svgr')
const withFonts = require('next-fonts')
const withImages = require('next-images')

module.exports = withPlugins(
  [
    [
      withImages,
      {
        projectRoot: __dirname,
      },
    ],
    withSvgr,
    [
      withExpo,
      {
        projectRoot: __dirname,
      },
    ],
    [
      withFonts,
      {
        projectRoot: __dirname,
      },
    ],
  ],
)
