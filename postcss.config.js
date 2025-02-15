import postcssPxtorem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxtorem({
        propList: ["*"],
        mediaQuery: true,
      })
    )
  }

  return {
    plugins,
  }
}
