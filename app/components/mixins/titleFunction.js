const titleFunction = {
  methods: {
    title (page) {
      const houseTitles = this.houseDetails.Titels
      if (houseTitles) {
        const mainTitle = houseTitles.filter(title => title.Pagina === page)
        return mainTitle[0].Omschrijving || ''
      }
      return ''
    }
  }
}

export default titleFunction