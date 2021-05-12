# vue site playground

---

* install `vue-cli` & `surge`
[if you already install on global ignore this step]

```
cd /{path}/
yarn install
```
&nbsp;



* install vue web project
```
cd /{path}/web-site/
yarn install
```
&nbsp;



* build `site` to static files and put into `dist` folder
```
cd /{path}/web-site/
yarn build
```
&nbsp;



* deploy `dist` to public with `surge`
```
cd /{path}/web-site/
yarn surge /{path}/web-site/dist/ --domain https://wico.surge.sh
```
&nbsp;

---
```
cd ~/GitHub/App_010/web-v3 && yarn build && \\
cd dist && mv index.html 200.html && \\
cd ~/GitHub/App_010/ && \\
yarn surge ~/GitHub/App_010/web-v3/dist --domain https://wico.surge.sh
```
