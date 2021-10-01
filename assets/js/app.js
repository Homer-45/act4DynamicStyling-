new Vue({
    el: '#events',
    data: {
            boxko: '',
            user: '',
            isButton: true,
            color:'',
            keyColor: '',     
    },
    methods: {
         set(event) {
            this.boxko = event.target.value;
            if(this.boxko === 'user1') {
                this.user = 'active';
            }else if(this.boxko === 'user2') {
                this.user = 'wara';
            }else{
                this.user = '';
            }
        },
         toggleParagraph(){
            this.isButton = !this.isButton
         },
         PickColor(event){
            this.color = event.target.value;
            if(this.color === 'red'){
                this.keyColor = 'red';
            }else if(this.color === 'blue'){
                this.keyColor = 'blue';
            }else if(this.color ==='yellow'){
                this.keyColor = 'yellow';
            }else{
                this.keyColor = '';
            }
         }
     }
});