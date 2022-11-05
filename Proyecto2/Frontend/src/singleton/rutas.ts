import { Binary } from "@angular/compiler";

export var namespace = {
    _singleton: null,
    array:[],
    get singleton() {
      
      if (!this._singleton) {
        this._singleton = {
          delete: function() {
            //console.log("amethod");
            this.array.pop()
          },
          insert:function(cadena:string){
            //this.array = []
            this.array.push(cadena)
          },
          select:function(){
            let cadena = "";
            for(let i:number = 0; i < this.array.length - 1; i++)
            {
              cadena += this.array[i] + "/"
            }
            cadena += this.array[this.array.length - 1]
            return cadena
          }
        }
      }
      return this._singleton;
    }
  };