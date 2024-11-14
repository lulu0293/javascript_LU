# Mi Proyecto Javascript - Programación Web Avanzada (MAD-UCV)

## Instalando GIT en nuestro sistema

Para empezar a trabajar con el proyecto, lo primero que debemos hacer es asegurarnos de tener instalado GIT en nuestro sistema.

**Windows**

https://git-scm.com/downloads/win (64-bit Standalone Installer). El asistente os hará mil preguntas, sí a todo.

**iOS**

El primer paso es instalar Homebrew (https://brew.sh/) si no lo tenéis instalado ya.  Abrid una terminal y ejecutad el siguiente comando:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

Os pedirá contraseña de usuario del ordenador (aunque parece que no se escriba nada cuando tecleáis, sí se está escribiendo, ponedla y dadle a enter).

Una vez haya concluido, al final del propio log de la instalación os dice que copiéis y ejecutéis tres comandos que aparecen ahí mismo para añadir Homebrew al PATH de vuestro sistema. Hacedlo.

Hecho esto, procedemos a instalar GIT con el siguiente comando: 

brew install git

Y listo, podemos seguir.

**Linux**

En muchas distribuciones GIT viene preinstalado, si no, en la terminal, a través de vuestro gestor de paquetes (apt, rpm, dnf, yum...) podéis instalarlo desde los repositorios oficiales. Por ejemplo, para distros basadas en Debian:

sudo apt install git

## Configurando GIT

En muchos casos, la primera vez que usamos GIT en el sistema, hemos de configurar nuestro nombre de usuario y nuestro email. Para ello, ejecutamos los siguientes comandos en la terminal sustituyendo los valores finales por los que corresponda en vuestro caso (en vuestro propio fichero README.md, podéis copiaros estos comandos con vuestros propios valores para tenerlas a mano y poder copiar-pegar directamente).

*(Para usuarios de Windows, la terminal por defecto en vuestro sistema es PowerShell, debéis cambiar a Git Bash para ejecutar estos comandos)

git config --global user.name el_nombre_de_usuario_que_quieras

y

git config --global user.email tu_email_en_github

Para ver si lo hemos configurado correctamente podemos ejecutar el siguiente comando:

git config -l

## Clonando nuestro repositorio en el sistema

La primera vez que trabajamos en un ordenador con nuestro repositorio, hemos de clonarlo, para que localmente, se cree una copia de los archivos que existen en el repositorio y podamos trabajar con ellos.

En VS-Code, sin tener ninguna carpeta ni proyecto abierto, nos vamos al tercer icono de la barra de la izquierda (Source Control) y elegimos la opción de clonar repositorio "Clone Repository", en la barra que nos aparece en la parte superior de la pantalla, copiamos el enlace a nuestro repositorio de GitHub (cada uno al suyo). Podéis usar tanto la versión HTTPS como la versión SSH.

El asistente nos preguntará en qué carpeta/directorio de nuestro sistema queremos clonar el repositorio. Esto es una decisión personal, cread una carpeta en la que vayáis a trabajar y listo. Por ejemplo en mi caso, yo tengo un directorio llamado Workspace y ahí clono todos los proyectos. Seleccionad la carpeta y continuad.

Una vez clonado el repositorio, VS-Code os preguntará si queréis abrirlo, la respuesta es sí.

Y listo, ya tenemos nuestro entorno listo para trabajar con el proyecto. Veréis que en la carpeta que hayáis elegido, se ha creado una carpeta nueva con el nombre de vuestro repositorio. Ahí es donde vamos a trabajar.
