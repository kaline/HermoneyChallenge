# HermoneyChallege
Challenge of internship from HerMoney.👩🏽‍🦳🎈


HerMoney
Processo seletivo para pessoa estagiária de desenvolvimento


## Teste Prático


Usando um método GET via HTTP, carregue as informações de uma determinada busca na Wikipedia.

Para isso, use esse endpoint da Wikipedia: 

https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=[busca]

Crie uma função Javascript que recebe uma string [busca] como parâmetro e imprima os artigos retornados na tela. Atenção: você deve substituir o termo "busca" por algum tópico que seja do seu interesse.

Crie uma UI, usando HTML, CSS e/ou o seu framework de frontend favorito, para mostrar essa informação na tela. Pense em conceitos como mobile first, cards, menu hambúrguer e barra de navegação.

Observação: a busca da Wikipedia é case-sensitive - ou seja, diferencia maiúsculas das minúsculas.

Informações de apoio:

O endpoint da Wikipedia descrito acima retorna um objeto JSON no formato abaixo:
parse: um objeto JSON representando a página buscada do artigo. Esse objeto tem os seguintes três campos:
title: o artigo do título, como especificado no tópico buscado.
pageid: o ID da página do artigo.
text: um objeto JSON que contém o dump HTML do artigo na Wikipedia.


Formato e prazos de entrega:

*** Envie a função para um repositório do Github e envie o link para o email contato@hermoney.com.br.

*** Prazo: até o dia 07/08, sexta-feira, às 12h.


