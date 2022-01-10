const App = {
    data() {
        return {
            post: {
                title:'',
                text: '',
                placeholderTitle: 'Заголовок..',
                placeholderText: 'Введите текст..',
                editing: false,
                date: new Date().toLocaleString(),
                id: Date.now()
            }, 

            // Хранилище всех постов
            posts: [],

        }
    },

    // Рендер постов в html
    mounted(){
        this.getPosts()
    },

    methods: {
        addPost() {

            if( this.post.title && this.post.text) {
                this.posts.push({
                title: this.post.title,
                text: this.post.text,
                editing: this.post.editing,
                date: this.post.date,
                id: this.post.id
            })
            this.post.title = ''
            this.post.text = ''
            }

            
        },

        removePost(index) {
            this.posts.splice(index, 1)
        },

        getPosts() {
            const postsFromLS = localStorage.getItem('posts')

            if(postsFromLS) {
                this.posts = JSON.parse(postsFromLS)
            }

        }
   
    },

    watch: {

        // следим за массивом Posts
        posts: {
            handler(updatedpost) {
                localStorage.setItem('posts', JSON.stringify(updatedpost))
            },
            deep: true
        }
    },

    computed: {
        getTextLength() {
            return this.post.text.length
        }
    }
}


Vue.createApp(App).mount('#app')