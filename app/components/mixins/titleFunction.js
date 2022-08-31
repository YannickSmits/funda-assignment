const titleFunction = {
  methods: {
    title (page) {
      // Could be improved by optional chaining but it is not allowed by NuxtJS
      if (this.houseDetails) {
        const houseTitles = this.houseDetails.Titels
        if (houseTitles) {
          const mainTitle = houseTitles.filter(title => title.Pagina === page)
          return mainTitle[0].Omschrijving || ''
        }
      }
      return ''
    }
  }
}

export default titleFunction
