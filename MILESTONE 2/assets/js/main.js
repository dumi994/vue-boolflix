const app = new Vue({
    el: "#app",
    data:{
        uri:"https://api.themoviedb.org/3",
        api_key:"3aa3ea13ba4c284ab4777842999b80d1",
        films: " ",
        query: " ",
        series: " ",
        flagImg:'https://www.countryflags.io/',
        error: null,
    },
    methods:{
        //FUNZIONE PER LA RICERCA DEL TITOLO DEL FILM
        cercaFilm: function(){
             axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.query}`)
             .then (response =>{
                 
                 console.log(response.data.results);
                 this.films = response.data.results;
                 
                //Errore quando la pagina non carica
            }).catch(e =>{
                this.error = "Ops, si è verificato un'errore con il server" + e
                console.error(e);
           })
            //CERCA SERIE
            axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.query}`)
            .then (resp =>{
                
                console.log(resp.data.results);
                this.series = resp.data.results;
             
           //Errore quando la pagina non carica
           }).catch(e =>{
                this.error = "Ops, si è verificato un'errore con il server" + e
                console.error(e);
           })
           

        },

    },
    mounted(){
     
    }
})