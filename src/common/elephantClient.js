import pg from "pg";
import {getDbConnectionString} from '../config/index.js'

function queryBuilder(tablaParm){

  if (!tablaParm){ return new Excepcion("Table missing")}
  
  return {
    tabla: tablaParm,
    campos: null,
    condiciones: null,
    orden: null,

    setTabla: function(tablaNueva) {this.tabla = tablaNueva},
    getTabla: function(){return this.tabla},

    addCampo: function(campoNuevo) {
      if (this.campos){
        this.campos += ', '+campoNuevo
      }else{        
        this.campos = campoNuevo 
      }          
    },
    getCampos: function(){
      if(!this.campos){return "*"}else{return this.campos}
    },

    addCondicion: function(condicionNueva){
      console.log(this.condiciones)
      if (this.condiciones){
        this.condiciones += ' AND '+condicionNueva
      }else{        
        this.condiciones = condicionNueva
      }           
    },
    getCondicion: function(){
      if(this.condiciones){return "where "+this.condiciones}else{return ""}
    },

    setOrden: function(ordenNuevo){this.orden = ordenNuevo},
    getOrden: function(){
      if(this.orden){return "order by "+this.orden}else{return ""}
    },
    
    getQuerry: function(){
      const querry = `
        select ${this.getCampos()} 
        from ${this.getTabla()} 
        ${this.getCondicion()}
        ${this.getOrden()} 
        `
      return querry 
    }
  }
}


function crearElephantClient() {
  return {

    getQueryBuilder: (tablaParm) => {
      return queryBuilder(tablaParm)
    },   

    ejecutar: (queryString) => {
      return new Promise((resolve, reject) => {
        const conString = getDbConnectionString()
        const client = new pg.Client(conString);
        client.connect(function (err) {
          if (err) {
            reject('could not connect to postgres', err);
          }
          client.query(queryString, function (err, result) {
            if (err) {
              reject(err);
            }
            if (result) {
              client.end();
              resolve(result.rows);
            } else {
              reject('error inesperado')
            }
          });
        });
      });
    },
  };
}

export default crearElephantClient