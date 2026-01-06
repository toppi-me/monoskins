export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'zinc'
    },
    header: {
      slots: {
        root: 'bg-white/75 dark:bg-black/75 border-default'
      }
    }
  }
})
