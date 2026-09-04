Vue.component('mess_board',{
    props:['title'],
    template: `
        <div>
        <h3>{{title}}</h3>
        <p>thoughts... <input type="text" v-model="visitor_message"> 
        </p>
        <p> and you? <input type="text" v-model="visitor_name"> <button v-on:click="sned">Sned </button></p>
       

        <ul>
            <li v-for="message in messages">{{message["visitor_name"]}} said {{message['visitor_message']}}</li>
        </ul>
        </div>
        
    `,
    data: function() {
        return {
            visitor_name:'',
            visitor_message:'',
            messages:[]
        }
    },
    methods:{
        sned: function() {
            this.messages.push({"visitor_name":this.visitor_name, "visitor_message":this.visitor_message})
            this.visitor_message=""
            this.$emit('gcplus1')
        }
    },
    computed:{
        count:function(){
            return this.messages.length;
        }
    }
})

var app=new Vue({
    el:"#app",
    data:{
        global_count:0
    },
    methods:{
        gc:function(){
            this.global_count++
        }
    }
})