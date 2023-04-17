## Ejercicio 1
Para pausar mi trabajo en el commit actual, usaría el comando `git stash` el cual guarda temporalmente los cambios en mi código. Después, para volver al branch `master` realizaría un `git checkout master` y borraría el archivo `status.js` con `git rm status.js`.

## Ejercicio 2
Primero accedería a `master` con el comando `git checkout master`. Después haria un merge de `front-react` con `git merge front-react`.
Subiría los cambios a `master` con `git push origin master`, y desde el servidor de producción, haría un `git pull origin master` para que los cambios estén actualizados en producción.
