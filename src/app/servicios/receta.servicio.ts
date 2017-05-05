import {Receta} from "../componentes/receta.model";
import {EventEmitter, Injectable} from "@angular/core";
import {ListaDeLaCompraServicio} from "./lista-de-la-compra.servicio";
import {Ingrediente} from "../compartido/ingrediente.model";

@Injectable()
export class RecetaServicio {

  recetaSeleccionada = new EventEmitter<Receta>();

  recetas: Receta[] = [
    new Receta('Hamburguesa de avestruz',
      'ñam ñam ',
      'http://portal.minervafoods.com/files/como_fazer_hamburguer_caseiro.jpg',
      [{nombre: 'Carne de avestruz', cantidad: 300},{nombre: 'Patatas fritas', cantidad: 1}]),
    new Receta('Noodles con pollo',
      ' Con salsa de ostras ',
      'http://cdn.skim.gs/images/one-pot-paleo-ginger-chicken-noodles/paleo-chicken-recipe',
      [{nombre:'Noodles',cantidad:250},{nombre: 'Pollo', cantidad: 100}]),
    new Receta('Pizza congelada',
      'Al menos lo has intentado',
      'https://i.ytimg.com/vi/9Pq1SmUSL9o/maxresdefault.jpg'
    ,[{nombre:'Harina',cantidad:300},{nombre: 'Mezcla 4 quesos', cantidad: 400}]),
  ];


  constructor(private _listaDeLaCompraService: ListaDeLaCompraServicio){}

  getRecetas() {
    return this.recetas.slice();
  }

  insertarIngredientesEnLaListaDeLaCompra(ingredientes: Ingrediente[]){
    this._listaDeLaCompraService.insertarIngredientes(ingredientes);
  }


}