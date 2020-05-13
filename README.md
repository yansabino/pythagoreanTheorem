# Pythagorean Theorem

## Stack
Esse é um projeto de Frontend Web feito utilizando [ReactJS com Hooks](https://reactjs.org/docs/hooks-intro.html) e como gerenciador de pacotes do NodeJS o [npm](https://www.npmjs.com/).
Sobre a divisão dos arquivos, há dois grandes setores. Os `components` são os componentes em si do meu projeto (Header, Barra Lateral, Cards de Vídeo e outros). Já os `Styles` são reponsaveis pela estilização dos componentes. 

## Sobre

Pythagorean Theorem é uma interface personalizada que realiza o calculo da Hipotenuza de um Triangulo Retângulo inserindo os valores do cateto oposto e do cateto adjacente. Esses valores precisam ser inteiros e positivos para que o calculo possa ser realizado com sucesso. Após o processamento dos dados pelo Back-End, o valor dos dados inseridos são mostrados na página.

- Integrando com a API externa (Método POST): [API](https://atlas-231814.appspot.com/calcula)

- Link para acessar o App: [Site](http://warlike-tray.surge.sh/)

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. 
- Clone o Repositório e com ele em sua máquina: `git clone https://github.com/yansabino/pythagoreanTheorem.git`
- Agora basta abrir o terminal e navegar até o repositório: `cd pythagoreanTheorem`
- E então instala-lo e rodar-lo:
    1. `npm install` para instalar todas as dependências;
    1. `npm run start` para rodar localmente o projeto
    1. `npm run build` para gerar uma versão estática do projeto (que ficará na pasta `build`)
