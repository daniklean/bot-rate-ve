# Chiguire Rates Venezuela: Bot de cotizaciones USD - VES :moneybag:

> Este repositorio contiene el código fuente de **@ChiguirePricesBot** creado por **@Daniklean** para *Telegram.* 
>
> *Desarrollo de bots de Telegram por* [@Daniklean](https://t.me/daniklean). Link directo al bot: [Chiguire Bot](https://t.me/ChiguirePricesBot).
>
> Eventualmente disponible. :smiley:

Este repositorio tiene una plantilla personal (de las infinitas posibles) para crear un bot de Telegram utilizando NodeJS y TypeScript. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript/TypeScript.
- [telegraf.js](https://telegraf.js.org/): framework para crear bots de Telegram.
- [Jest](https://jestjs.io/): framework para escribir tests.

## :point_up: ¿Quieres intentar desarrollar un bot? - Prerrequisitos -  *instalar antes de empezar.*

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos TypeScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

Para ejecutar el código es necesario tener NodeJS en su versión 16 (`lts/gallium`). Para instalarlo recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés hacerlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

## :ballot_box_with_check: Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, estos son los comandos que deberías ejecutar la primera vez que trabajes tú proyecto:

```shell
# Copia los nombres de variables de entorno en tú archivo .env que son necesarias para comunicarse con la Bot API de Telegram.
cp .env.example .env
## Recuerda, que debes ingresar tus credenciales.
# Instala las dependencias Node del proyecto.
npm install
```

¡No te olvides de reemplazar el valor del `TOKEN` por el que te dio [@BotFather](https://t.me/botfather).

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

```shell
# Levanta el proyecto y recarga automáticamente si hay cambios.
npm start

# Corre ESlint y Prettier, corrigiendo los errores que pueda y formateando el código.
npm run ling

# Ejecuta los tests una sola vez.
npm test

# Ejecuta los tests y se queda esperando por cambios.
npm test:watch
```
