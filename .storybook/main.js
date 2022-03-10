module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  /**
   * according to display full source of story
   * @link https://storybook.js.org/addons/@storybook/addon-storysource#displaying-full-source
   */
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    "@storybook/addon-storysource",
    "storybook-zeplin/register"
  ],
  "framework": "@storybook/react"
}