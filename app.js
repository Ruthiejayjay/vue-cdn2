const app = Vue.createApp({
    data() {
        return {
            firstName: 'NamJoon',
            lastName: 'Kim',
            email: 'rm@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
            //picture: 'https://lastfm.freetls.fastly.net/i/u/770x0/01cac1a103a733441eda6e386400c1df.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            // console.log(results)
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')