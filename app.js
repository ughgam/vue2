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
    },
    beforeCreate: function(){
        console.log('componentbeforeCreate')
        console.log("component one... trying to print global_count",this.global_count)
    },
    created: function(){
        console.log("component created",this.global_count)
    },
    beforeMount: function(){
        //fetch data from backend
        console.log("componentbeforeMount")
    },
    mounted:function(){
        console.log('component mounted',this.$el)
    },
    beforeUpdate:function(){
        console.log('component beforeUpdate')
    },
    updated:function(){
        console.log('component updated')
    },
    beforeDestroy:function(){
        console.log('component beforeDestroy')
    },
    destroyed:function(){
        console.log('component destroyed',this.$el)
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
    },
    beforeCreate: function(){
        console.log('app beforeCreate')
        console.log("app one... trying to print global_count",this.global_count)
    },
    created: function(){
        console.log("app created",this.global_count)
    },
    beforeMount: function(){
        //fetch data from backend
        console.log("app beforeMount")
    },
    mounted:function(){
        console.log('app mounted',this.$el)
    },
    beforeUpdate:function(){
        console.log('app beforeUpdate')
    },
    updated:function(){
        console.log('app updated')
    },
    beforeDestroy:function(){
        console.log('app beforeDestroy')
    },
    destroyed:function(){
        console.log('app destroyed',this.$el)
    }
})