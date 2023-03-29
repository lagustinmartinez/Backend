clase  ProductManager  {
    # precioBaseDeGanancia  =  3.10 ;
  
    constructor ( )  {
      esto _ productos  =  [ ] ;
    }
  
    obtenerProductos ( )  {
      devolver  esto . productos ;
    }
  
    agregarProducto ( nombre ,  descripcion ,  precio ,  imagen ,  codigo ,  stock )  {
      let  producto  =  {
        nombre ,
        descripcion ,
        precio : precio  *  este . #precioBaseDeGanancia , _
        imagen ,
        codigo ,
        existencias : [ ] ,

      } ;
  
      if  ( this . productos . longitud  ===  0 )  {
        producto [ "id" ]  =  1 ;
      } mas {
        producto [ "id" ]  =  esto . productos [ esto . productos _ longitud  -  1 ] [ "id" ]  +  1 ;
      }
  
      esto _ productos _ empujar ( producto ) ;
    }
  
    agregarStock ( idProducto ,  idDisponible )  {
      dejar  respuesta ;
      for  ( sea  i  =  0 ;  i  <  this . productos . length ;  i ++ )  {
        if  ( this . productos [ i ] . id  ===  idProducto )  {
          if  ( this . productos [ i ] . stock . include ( idDisponible ) )  {
            respuesta  =  "Hay stock disponible" ;
            romper ;
          }
  
          esto _ productos [ yo ] . acciones _ empujar ( idDisponible ) ;
          respuesta  =  "No hay stock disponible" ;
          romper ;
        }
      }
       respuesta de retorno ;
    }
  }


  
  const  fs  =  requerir ( 'fs' )

class  ManagerUsuarios  {
  constructor ( ) {
    if ( fs.existeSync ( './ Usuarios.json ' ) ) {
      esto _ usuarios  =  JSON . analizar ( fs . readFileSync ( './Usuarios.json' ,  'utf-8' ) )
    } mas  {
      esto _ usuarios  =  [ ]
    }
  }
  async  crearUsuario ( nombre ,  descripcion ,  precio ,  stock ) {
    const  usuario  =  {
      nombre ,
      descripcion ,
      precio ,
      existencias ,
      fecha : nueva  fecha ( ) . aCadenaLocal ( )
    }

    esto _ usuarios _ empujar ( usuario )

    esperar  fs . promesas _ writeFile ( './Usuarios.json' ,  JSON . stringify ( this . usuarios ,  null ,  '\t' ) )
    
    consola _ log ( 'Usuario Creado' )
  }

  async  consultarUsuarios ( ) {
    devolver   JSON . analizar ( aguardar  fs . promesas . readFile ( './Usuarios.json' ) ) 
  }

  async  eliminarUsuario ( nombre )  {
    dejar  usuario  =  esto . usuarios _ findIndex ( usuario  =>  usuario . nombre  ===  nombre )
    consola _ registro ( usuario )
    
    usuario  =  esto . usuarios
    esperar  fs . promesas _ writeFile ( './Usuarios.json' ,  JSON . stringify ( this . usuarios ,  null ,  '\t' ) )
    devolver 

  }
}

const  usuarioManager  =  new  ManagerUsuarios ( )

usuarioManager . crear usuario ( {
  nombre : 'el' ,
  descripcion : 'tortas' ,
  precio : 1500 ,
  stock : 'disponible'
} )

usuarioManager . consultarusuarios ( )
  . entonces ( datos  =>  consola . registro ( datos ) )

usuarioManager . eliminarUsuario ( 'el' )
  . luego ( resultado  =>  consola . log ( resultado ) )

  