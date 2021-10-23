import pg from "pg";
import { getDbConnectionString } from '../config/index.js'

function queryBuilder() {
  return {
    queryType: null,
    tabla: null,
    campos: [],
    valores: [],
    condiciones: null,
    orden: null,
    joins: null,
    queryTypes: {
      select: "select",
      insert: "insert",
      update: "update",
      delete: "delete"
    },

    getQueryTypes: function () { return this.queryTypes },
    setQueryType: function (queryType) { this.queryType = queryType },

    setTabla: function (tablaNueva) { this.tabla = tablaNueva },

    addCampo: function (campoNuevo, valorNuevo) {
      if (campoNuevo) {
        this.campos.push(campoNuevo)
        this.valores.push(valorNuevo)
      }
    },

    addCondicion: function (campo, condicion, valor) {
      if (this.condiciones) {
        this.condiciones += ' AND ' + campo + ' ' + condicion + ' ' + valor
      } else {
        this.condiciones = campo + ' ' + condicion + ' ' + valor
      }
    },

    setOrden: function (ordenNuevo) { this.orden = ordenNuevo },

    addJoin: function (join, tablaJoin, onJoin) {
      if (this.joins) {
        this.joins += ' ' + join + ' ' + tablaJoin + ' ON ' + onJoin
      } else {
        this.joins = ' ' + join + ' ' + tablaJoin + ' ON ' + onJoin
      }
    },

    getQuerry: function () {
      let querry = ''

      switch (this.queryType) {
        case this.queryTypes.select:
          querry = `
                  ${this.queryType} 
                  ${(this.campos.length? this.campos.toString():"*")} 
                  from ${this.tabla} 
                  ${(this.joins? this.joins:"")} 
                  ${(this.condiciones? "where "+this.condiciones:"")} 
                  ${(this.orden? "order by "+this.orden:"")} 
                  `
          break;

        case this.queryTypes.insert:
          querry = `
                  ${this.queryType} 
                  into ${this.tabla} 
                  (${this.campos.toString()}) 
                  values (${this.valores.toString()}) 
                  RETURNING id    
                  `
          break;

        case this.queryTypes.update:

          let camposUpdate = '( '
          for (let index = 0; index < this.campos.length; index++) {
            camposUpdate += this.campos[index] + " = " + this.valores[index]
          }
          camposUpdate += ' )'

          querry = `
                  update ${this.tabla}
                  set ${camposUpdate} 
                  ${(this.condiciones? "where "+this.condiciones:"")}                     
                  `
          break;

        case this.queryTypes.delete:
          querry = `
                  delete from  ${this.tabla}                  
                  ${(this.condiciones? "where "+this.condiciones:"")}                     
                  `
          break;
      }

      return querry
    }
  }
}


function crearElephantClient() {
  return {
    getQueryBuilder: (tablaParm) => { return queryBuilder(tablaParm) },

    ejecutar: (queryString) => {
      return new Promise((resolve, reject) => {
        const conString = getDbConnectionString()
        const client = new pg.Client(conString);
        client.connect(function (err) {
          if (err) { reject('could not connect to postgres', err); }
          client.query(queryString, function (err, result) {
            if (err) { reject(err); }
            if (result) {
              client.end();
              switch (result.command) {
                case 'INSERT':
                  resolve(result.rows[0].id);
                  break;

                case 'SELECT':
                  resolve(result.rows);
                  break;

                default:
                  resolve(result);
                  break;
              }
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