"use strict";

//Funciones para la lista

/*
Ojete calor! - Parametros pordefecto! O:
y||(y=0)
si el primer miembro no se ejecuta, se ejecutara el segundo
*/

var listLength = 0; //Longitud de la lista
var list = new Array(); //Array que tendra el comportamieto de un lista No ordenada

function CreateList(length)
/*Funcion para crear la lista, comprueba si el parametro de la longitud. Si la longitud no es un numero entero, devuelve un error.*/
{
  length||(length = 5); // En caso de no introducir ningun valor a lenght asignara el valor de 5 por defecto 
  if(isNumber(length)){
    listLength = length;
    for (var i = 0; i < length; i++) {
      list[i] = Number.NaN;
    }  
  }else{
    throw "This isn`t a valid value for length, sorry. (o_o')"
  }

}

function place(array)
/*Funcion que situa todos los elementos NaN al final de la lista*/
{
  var i = 0;
  while(i < listLength){
    if(isNaN(array[i]) && !isNaN(array[i+1])){
      var aux = array[i];
      array[i] = array[i+1];
      array[i+1] = aux;
    }
      i++;
  }
}

function isNumber(num)
/*Funcion para comprobar si un dato es un numero finito y entero. Si no devuelve un error.*/
{
  num = parseInt(num);
  if(isFinite(num) && Number.isInteger(num)){
    return true;
  }else{
    return false;
  }
}

function isFull(array)
/*Funcion que comprueba si la lista esta llena.*/
{
  if(isNaN(array[listLength-1])){
    return false;
  }else{
    return true;
  }
}

function isEmpty(array)
/*Funcion que comprueba si la lista esta vacia.*/
{
  if(isNaN(array[0])){
    return true;
  }else{
    return false;
  }
}

function indexIn(index)
/*Funcion que indica si el indice dado esta dentro del rango de la lista*/
{
  if(index < listLength){
    return true;
  }else{
    return false;
  }
}

function size(array)
/*Funcion que devuelve el tamaño de la lista.*/
{
  var i = 0;
  var finLista = false;
  while(i < listLength && !finLista){
    if(!isNaN(array[i])){
      i++;
    }else{
      finLista = true;
    }
  }
  return i ;
}

function add(array,element)
/*Funcion que añade un elemento al final de la lista. Devuelve el tamaño de la lista*/
{
  if(!isFull(array) && isNumber(element) && (size(array)<= listLength-1)){
    
    array.splice((size(array)),1,element)
    return size(array);
    
  }else{
    throw "Array is full or element isn`t a number.";
  }
  
}

function addAt(array,element,index)
/*Funcion que añade un elemento en la posicion indicada de la lista. Devuelve el tamaño de la lista*/
{

  if(indexIn(index) && isNumber(element) && !isFull(array)){
    
    array.splice(index,1,element);

    place(array);

    return size(array);
  }else{
    throw "Index out of the range, element isn`t a number or list is full."
  }
}

function get(array,index)
/*Funcion que devuelve un elemento indicando su posicion en la lista, sin consumirlo*/
{
  if(indexIn(index)){
    return array[index];
  }else{
    throw "Index out of list range.";
  }
}

function Remove(array,index)
/*Funcion que quita un elemento de la lista indicando su posicion. Desplaza toda la lista dejando la posicion
libre al final de la misma*/
{
  if(indexIn(index) && !isEmpty(list)){

    array.splice(index,1,Number.NaN);

    place(array);
    
    return size(array);

  }else{
    throw "Index out of list range or empty list.";
  }
}

function ToString(array)
/*Funcion qeu devuelve la lista convertida en una cadena separada por guiones*/
{
  var i = 0
  var string = "";
   while(i < listLength && !isNaN(array[i])){
    string += (isNaN(array[i+1]))? array[i] : array[i]+" - ";
    i++;
   }
    return string;  
}

function IndexOf(array,elem)
/*Funcion que muestra el indice de la aparicion de un elemento en la lista*/
{
  if(isNumber(elem)){

    elem = parseInt(elem);
    
    return array.indexOf(elem);

  }else{
    throw "Element isn`t a number."      
  }
}
function LastIndexOf(array,elem)
/*Funcion que muestra por pantalla el indice de la ultima aparicion de un elemento en la lista*/
{
  elem = parseInt(elem);
  if(isNumber(elem)){
    return array.lastIndexOf(elem);
  }else{
    throw "Element isn`t a number."
  }  
}
function Capacity(array)
/*Funcion que devuelve la capacidad de la lista*/
{
   return listLength;
}
  
function clear(array)
/*Funcion que elimina todos los valores de la lista*/
{
  for (var i = 0; i < listLength; i++) {
    array[i] = NaN;      
  }
  return size(array);
}

function FirstElement(array)
/*Funcion que devuelve el primer elemento de la lista. Si la lista esta vacia devuelve un error*/
{
  if(!isEmpty(array)){
    return array[0];
  }else{
    throw "The list haven`t fist element, is empty. sorry (o_o')";
  }
}

function LastElement(array)
/*Funcion que devuelve el ultimo elelemto de la lista. Si la lista esta vacia devuele un error*/
{
  if(!isEmpty(array)){
    var i = 0;
    while(i < listLength-1 && !isNaN(array[i+1])){
      i++;
    }
    return array[i];
  }else{
    throw "The list haven`t last element, is empty. sorry (o_o')";
  }
}

function RemoveElement(array,element)
/*Funcion que elimina un elemento en la lista. devuelve true o false, si se pudo eliminar. Devuelve un error si elemento a borrar no es un numero*/
{
  element = parseInt(element);
  if(isNumber(element) ){
    var index = array.indexOf(element);
    if((index != -1)){
      Remove(array,index);
      return true;
    }else{
      return false;
    }

  }else{
    
    throw "Element isn`t a number"
  }
}

function FillRandom(array,limit)
/*Funcion que llena la lista de valores aleatorios, añadiendo un limite. Si el limite no se pasa por parametro se asigna un valor de 10*/
{
  limit||(limit = 10);
  for (var i = 0; i < listLength; i++) {
    array[i] = parseInt(Math.random()*limit + 1);
  }
  return size(array);
}

function test()
/*Funcion para probar las distintas funciones implementadas en el script*/
{
  /*En cada llamada a las distintas funciones entre parentesis aparece el nombre a la funcion que hacen referencia*/
  try{
    CreateList("aksjhdkahi");// Comprobamos si falla al entrar una cadena por longitud
  }catch(error){
    console.log("Error: " + error);
  }
  CreateList(); // No asignamos valor para comprobar que salta el operador ||
  console.log("Tamaño de la lista(size): "+size(list));
  console.log("Añadimos un elemento(add).");
  console.log("Tamaño de la lista: " + add(list,5));
  console.log(list[0]);
  console.log("Tamaño de la lista: " + add(list,4));
  console.log(list[1]);
  console.log("Tamaño de la lista: " + add(list,3));
  console.log(list[2]);
  console.log("Tamaño de la lista: " + add(list,2));
  console.log(list[3]);
  console.log("Tamaño de la lista: " + add(list,1));
  console.log(list[4]);

  console.log("Obtener un elemento dentro de la lista(get(list,3): " + get(list,3));

  try{
    get(list,11);
  }catch(error){
    console.log("Obtener un elemento furea de la lista(get(list,11)): " + error);
  }

  console.log("Extraer un elemento dentro de la lista(remove(list,3)): " + Remove(list,3));
  
  try{
  console.log( Remove(list,11));
  }catch(error){
  console.log("Extraer un elemento fuera de la lista(remove): " + error);
  }

  console.log("Insertar un elemento dentro de la lista(addAt): " + addAt(list,8,2));
  console.log("Elementos en la lista(ToString(list)): " + ToString(list));
  console.log("Indice del elemento 3 (IndexOf(list,4)): " + IndexOf(list,4));
  console.log("Indice del elemento 8 (LastIndexOf(list,8)): " + LastIndexOf(list,8));
  console.log("Capacidad de la lista(capacity(list)): "+ Capacity(list));
  console.log("Primer elemento a de la lista (FirstElement(list)): " + FirstElement(list));
  console.log("Primer elemento a de la lista (LastElement(list)): " + LastElement(list));
  console.log("Eliminamos un elemento de la lista RemoveElement(list,8): " + RemoveElement(list,8) );
  console.log("Elementos en la lista despues de un Remove Element): " + ToString(list));
  console.log("Eliminamos el mismo elemento de la lista RemoveElement(list,8): " + RemoveElement(list,8) );
  console.log("Elementos en la lista despues de un segundo RemoveElement): " + ToString(list));
  console.log("Vaciamos la lista (Clear): " + clear(list));
  console.log("Llenamos la lista de valores aleatorios sin pasar limite por parametro (FillRandom(list)): " + FillRandom(list));
  console.log("Mostramos los valores de la lista en una cadena: " + ToString(list));
  console.log("Vaciamos la lista: " + clear(list));
  console.log("Llenamos la lista de valores aleatorios pasando un limite por parametro (FillRandom,limit): " + FillRandom(list,100));
  console.log("Mostramos los valores de la lista en una cadena: " + ToString(list));

  
}

test();

function Reset()
/*Reinicia los valores de list para que se pueda utilizar en la pagina HTML*/
{
  listLength = 0;
  list = new Array();
}

Reset();
