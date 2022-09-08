## Entrega

### 3: Arquitetura

Acredito que tendo em vista o cenário proposto bem como a visualização do site da Serasa e seus produtos, acredito que podemos pensar em uma arquitetura de Micro-frontends. Onde poderíamos pegar cada produto e transformá-los em modulos frontends a parte, nos quais os mesmos seriam geridos por um modulo agregador que disponibilizaria as informações do usuário logado e outras coisas que forem necessárias. 

Ao fazermos isso ganharíamos agilidade, tendo em vista que cada equipe ou desenvolvedor estaria focado em uma parte especifica da aplicação. Ganharíamos também deploy mais rápido pois não precisaríamos entregar toda a aplicação e sim apenas o build da nova parte criada. Poderíamos pensar em usar vários fremeworks ou linguagens conforme a necessidade de cada aplicação. Também podemos elencar o scale que pode ser feito apenas no modulo que estiver tendo maior uso ou que necessite de mais recursos. E também um ponto importante é termos uma tolerância a falhas maior, ao passo de que caso de algum problema, apenas uma parte do sistema seria afetada e essa parte afetada poderíamos realizar alguma tratativa de circuit breaker para não demonstrar algo "quebrado" na tela.

Essa proposta poderia ser feita com Single-Spa ou Module Federation, esse ultime sendo uma forma da qual trabalho atualmente e acredito estar dando resultados bem produtivos no quesito entrega e velocidade, sem impactar no restante da aplicação. Os Módulos federados por serem algo do Webpack 5 ganham um destaque por serem algo mais nativo ao browser e os frameworks mais comuns de JS (React, Angular, Vue) terem configurações para o mesmo. 


#### Projetos e artigos

* Trabalho de conclusão de curso.

Titulo: Padrões para produção de aplicações utilizando microsserviços

Link: https://repositorio.ifg.edu.br/handle/prefix/700


* Capitulo de livro publicado.

Titulo: "APLICATIVO DE CELULAR PARA O APRENDIZADO INTERDISCIPLINAR EM AMBIENTES NÃO FORMAIS DE EDUCAÇÃO PRESENTES NAS CIDADES"

Link: https://www.editoracientifica.org/articles/code/220207756


* Artigo publicado em viés de congresso internacional.

Titulo: "APLICATIVO DE CELULAR PARA O APRENDIZADO INTERDISCIPLINAR EM AMBIENTES NÃO FORMAIS DE EDUCAÇÃO PRESENTES NAS CIDADES"

Link: https://cietenped.ufscar.br/submissao/index.php/2020/article/view/1280

### Nos deixe um feedback!

Acredito que o teste foi bem completo e bem preciso aos objetivos que buscava avaliar. A possíbilidade também de expor trabalhos academicos acho bastante interessante é diferente do que se é feito.
