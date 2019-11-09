let smvc={};
smvc.init=function(){
	this.controller.init();
};
smvc.model={
	instances:{},
	add:function(key, handler){
		this.instances[key]={
			handler:handler
		};
	},
	execute:function(key){
		let instance=this.instances[key];
		let data=instance.handler(instance.data);
		instance.data=data;
		return instance.data;
	}
};
smvc.view={
	instances:{},
	add:function(key, handler, view){
		this.instances[key]={
			handler:handler,
			view:view
		};
	},
	execute:function(key, data){
		let instance=this.instances[key];
		instance.handler(instance.view, data);
	}
};
smvc.controller={
	instances:{},
	init:function(){
		for(let key in this.instances){
			this.execute(key);
		}
	},
	add:function(key, handler){
		this.instances[key]={
			handler:handler
		}
	},
	execute:function(key){
		let instance=this.instances[key];
		instance.handler(key);
	}
};