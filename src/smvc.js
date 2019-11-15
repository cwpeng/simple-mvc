let smvc={};
smvc.init=function(){
	this.controller.init();
};
smvc.add=function(key, model, view, controller){
	this.model.add(key, model.handler);
	this.view.add(key, view.handler, view.root);
	this.controller.add(key, controller.handler);
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
	add:function(key, handler, root){
		this.instances[key]={
			handler:handler,
			root:root
		};
	},
	execute:function(key, data){
		let instance=this.instances[key];
		instance.handler(instance.root, data);
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