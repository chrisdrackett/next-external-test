module.exports = (api) => {
  api.cache(true)

  const presets = ['next/babel', '@expo/next-adapter/babel']

  return {
    presets,
  }
}
