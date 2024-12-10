Instucciones para levantar el proyecto localmente
npm install -> instalar node
npm run dev -> levantar la app

al levantar la app se vera el 3er ejercicio con la pantalla de login y en la consola se veran unos logs con los datos del
2do ejercicio

Primer ejercicio

Consignas

- Enunciar todos problemas o posibilidades de mejoras para este componente. Mencionar cuáles de los problemas o
  posibilidades de mejoras enunciados son los más relevantes.
- Refactorizar el código y adjuntar cómo quedaría la solución luego de la refactorización.
- Justificar lo realizado en el punto 2 explicando qué mejoras aporta y por qué soluciona lo comentado en el punto 1.
- Se pide agregar una vista de perfil del contacto (layout similar a como se muestra en la lista), suponiendo que los datos del
  contacto son avatar , first_name , last_name , company , details , email , phone_number y address . Adjuntar la solución propuesta.

Respuestas:

1:

- Faltaba un ")" en el mapeo de contact.addresses
- Faltaba agregar una key a los .map
- se deberia mover el codigo dentro de los maps a componentes independientes
- hay incoherencia en el objeto de contact, en un momento saca el telefono de contact.phone_number y en otro de contact.phone.number
- faltaba exportar el componente
- las funciones de findById Y truncate no estan importadas
- agregar typescript a todos los archivos, no lo hice por falta de tiempo y falta de detalles respecto a los datos
- se memorizo contactsToDisplay para mejorar el performance ya que no se calculara repetidas veces
- quitamos las rutas absolutas de los links usando react router dom lo que mejora la escalabilidad en caso de que cambie la estructura de las carpetas
- se agrego comentario de alt a la imagen por si falla
- Lo mas relevante es lo de mover codigo a componentes independientes asi logramos un codigo mas facil de leer y sea reutilizable, que el codigo use typescript para que
  el proyecto sea mas robusto y a prueba de errores y lo del use memo por la mejora de performance

2: El codigo refactorizado se encuentra en el archivo ContactsScreen.jsx en src/Exercise1, en la misma carpeta esta la carpeta de componentes

3: Soluciona lo del primer punto por que:

- mover el codigo a componentes independientes lo que mejora la simplicidad del codigo y lo hace reutilizable
- agreguar las key en los map lo que apaga los warnings en la consola y ayuda a react a mantener el listado de datos que se le pasan y evitar errores
  al modificar dichos datos
- hacer provecho del use Memo que ofrese react ayuda al performance del codigo esto hace que a no ser que los datos cambien no tengan que
  ser re calculados ni re renderizados
- usar un manejador de rutas y navegacion ayudo a la escalabilidad del proyecto ya que permite que el mismo codigo siga funcionando en caso de que cambie la estructura
  de las carpetas

4: Mi solucion para una vista del contacto se encuentra en el archivo MyContactDesign.tsx dentro de la carpeta de componentes, en esta vista
aprovecho de usar typescript y un poco de tailwind para mejorarlo esteticamente

Segundo Ejercicio

1: el codigo se encuentra en el archivo Exercise2.tsx dentro de src/Exercise2, en la misma carpeta se encuentra un archivo de las interfaces y otra carpeta
con los custom hooks que uso para manejar los contextos de los datos, la otra parte del codigo se encuentra en el archivo App.tsx donde llamo el componente y el
archivo Main.tsx donde envuelvo al App.tsx en los contextos

2: users: [
{
"id": 1,
"title": "Clean Code",
"author": {
"id": 1,
"name": "Uncle Bob"
}
},
{
"id": 2,
"title": "Clean Architecture",
"author": {
"id": 1,
"name": "Uncle Bob"
}
}
]

Books: [
{
"id": 1,
"title": "Clean Code",
"author": {
"id": 1,
"name": "Uncle Bob"
}
},
{
"id": 2,
"title": "Clean Architecture",
"author": {
"id": 1,
"name": "Uncle Bob"
}
}
]

3: las ventajas de mi solucion son:

- Guardo mis datos en un contexto global lo que me permite acceder a ellos desde cualquier componente hijo
- Evito generar prop drilling
- Uso context api en vez de Redux (o Redux toolkit) ya que para el tamaño del ejercicio que es pequeño no requiere un boilerplate tan complejo
- mantengo ambos objetos en contextos separados para no pedir informacion innecesaria en caso de necesitar uno o el otro
- Facilidad de solicitar y actualizar los datos gracias a los custom hooks, por ejemplo en el caso de los users puedo
  solicitar la lista y actualizarla usando users y setUsers

Tercer ejercicio

El codigo del ejercicio se encuentra en: src/Exercise3 donde hay una carpeta screens donde se guarda la pantalla de login y pantalla privada.
ademas en la carpeta src esta el archivo auth.ts donde se maneja la peticion al backend, el archivo routes.tsx donde se maneja el ruteo de las pantallas
y en el archivo App.tsx llamo a routs.tsx

// me hubiera gustado agregar una pantalla para cuando escriben una ruta que no existe y diseñar dicha pantalla, tambien me gustaria poder hacer la accion del logout
// en la pantalla privada y por ultimo agregar mas validaciones al login como por ejemplo si se escribio un email no valido
