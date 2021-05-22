//JS ES6 - AFTER CLASS
import ManagerDom from "./ManagerDom.js";

import {urlCategorias, urlProductos} from "./const.js"

document.addEventListener("DOMContentLoaded", () => {
   //Segunda manera
   fetch(urlCategorias)
   .then(res => res.json())
   .then(data => { ManagerDom.cargarSelect(data)
    let urlProducto = urlProductos + data[0].id
    fetchProducto(urlProducto)})
   .catch(error => console.log(error));
})
//Definir la funcion categoriasHandler
function categoriasHandler(){
  ManagerDom.setSpinner("productos");
  let urlProducto = urlProductos + this.value;
  // console.log(urlProducto);
 fetchProducto(urlProducto)
  }
  
const fetchProducto = (url) => {
  fetch(url)
  .then(res => res.json())
  .then(data => ManagerDom.cargarProducto(data.results))
  .catch(error => console.log(error));
}

//Cargar el evento
ManagerDom.setEvent("form-select", "change", categoriasHandler);


//Primer manera de pedir los datos
//  const fetchData = async() => {
//      const res = await fetch(urlCategorias);
//      const data = await res.json();
//      console.log(data)
//      ManagerDom.cargarSelect(data)
//  }
// fetchData

//Cargar select

// const cargarSelect = data => {
//     let select = document.getElementById("form-select");
//     let miInner ="";
//     data.forEach(element => {
//         miInner += `<option value="${element.id}">${element.name}</option>`
//     });
//     select.innerHTML = miInner
// }


