Vue.component('mess_board',{
    template: `
        <div>and you?
        <input type="text" v-model="visitor_name">
        <br>and your thoughts?
        <input type="text" v-model="visitor_message">
        <button v-on:click="sayhi">Say Hi</button>

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
        sayhi: function() {
            this.messages.push({"visitor_name":this.visitor_name, "visitor_message":this.visitor_message})
            this.visitor_name='',
            this.visitor_message=""
        }
    },
    computed:{
        count:function(){
            return this.messages.length;
        }
    }
})

var app=new Vue({
    el:"#app"
})