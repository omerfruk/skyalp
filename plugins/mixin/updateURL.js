export default {
    methods: {
      async updateURL(newLang) {
        let previousLanguage = localStorage.getItem('previousLanguage')
        console.log(previousLanguage) // dil değişmeden önceki dil bilgisi
        let previousUrl = this.$route.params.name ? this.$route.params.name : this.$route.params.id // sayfanın url paramı
        const languageObject = await import(`@/lang/content-${previousLanguage}.js`) //eski dilin objesi import ediliyor
        let baseURL = Object.keys(languageObject.default).find(key => languageObject.default[key] === previousUrl); // eski dil objesinden sayfa urlsine göre base url bilgisi elde ediliyor
        const languageObject2 = await import(`@/lang/content-${newLang}.js`) //eski dilin objesi import ediliyor
  
        // yeni params set ediliyor
        if (this.$route.params.name) {
          this.$router.push({
            params: {
              name: languageObject2.default[baseURL]
            }
          })
        } else {
          this.$router.push({
            params: {
              id: languageObject2.default[baseURL]
            }
          })
        }
        this.$i18n.setLocale(newLang)
        // yeni dil ile ilgili ayarlar set ediliyor
        localStorage.setItem('previousLanguage', newLang)
      },
    },
  };