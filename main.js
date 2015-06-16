var Vue = require("vue");

var samples = [
				{name: "Task #1"},
				{name: "Task #2"},
				{name: "Task #3"},
				{name: "Task #4"},
				{name: "Task #5"},
				{name: "Task #6"},
				{name: "Task #7"},
				{name: "Task #8"}
			];

new Vue({
	el: "#main",
	data: {
		message: "Hello?!",
		cards: [
		]
	},
	methods: {
		toggle: function(){
			if(this.cards.length > 0){
				this.cards = [];
			}else{
				this.cards = samples;
			}
		}
	},
	ready: function(){
		var self = this;
		setTimeout(function(){
			self.cards = samples;
		}, 1000)
	}
})