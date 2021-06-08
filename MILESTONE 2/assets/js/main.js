const app = new Vue({
    el: "#app",
    data:{
        uri:"https://api.themoviedb.org/3",
        api_key:"3aa3ea13ba4c284ab4777842999b80d1",
        films: " ",
        query: " ",
        series: " ",
    },
    methods:{
        //FUNZIONE PER LA RICERCA DEL TITOLO DEL FILM
        cercaFilm: function(){
             axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.query}`)
             .then (response =>{
                 
                 console.log(response.data.results);
                 this.films = response.data.results;
            }),
            axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.query}`)
            .then (resp =>{
                
                console.log(resp.data.results);
                this.series = resp.data.results;
           })

        },

    },
    mounted(){
     
    }
})