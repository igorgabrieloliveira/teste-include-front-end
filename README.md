## Pré-requisitos

Antes de começar, certifique-se de que você tem as seguintes ferramentas instaladas na sua máquina:

* [**Node.js**]
* [**Git**]

Você pode verificar se eles estão instalados abrindo seu terminal e executando os seguintes comandos:

```bash
node -v
npm -v
git --version
```

## Passos para Rodar o Projeto Localmente

1.  **Clone o Repositório**

    Abra seu terminal, navegue até o diretório onde deseja salvar o projeto e clone o repositório.

    ```bash
    # Substitua a URL pela URL oficial do seu repositório
    git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)
    ```

2.  **Acesse a Pasta do Projeto**

    Entre no diretório que foi criado pelo comando anterior.

    ```bash
    cd nome-do-projeto
    ```

3.  **Instale as Dependências**

    Este comando irá baixar todas as bibliotecas e pacotes necessários listados no arquivo `package.json`.

    ```bash
    npm install
    ```

4.  **Execute o Servidor de Desenvolvimento**

    Para iniciar o projeto, use o comando abaixo. Ele ativará o servidor de desenvolvimento do Vite.

    ```bash
    npm run dev
    ```

**TECNOLOGIAS UTILIZADAS:**
* JSX (HTML e JavaScript)
* CSS
* Vite

**DECISÕES TÉCNICAS:**

Para o gerenciamento de estado dos jogos, utilizei o hook `useState`. Essa escolha foi essencial para permitir a adição dinâmica de novas resenhas (reviews).

A funcionalidade de pesquisa foi implementada com um estado `busca`, que captura o texto digitado pelo usuário em tempo real. Uma constante, `gamesFiltrados`, armazena o resultado da filtragem da lista de jogos. Finalmente, os componentes `GameCard` são responsáveis por renderizar essa lista filtrada, atualizando a interface conforme a busca é realizada.

Para a submissão de novas resenhas, utilizei um estado temporário para guardar os dados do formulário (nome, nota e comentário). Após o envio, essas informações são consolidadas no estado principal da aplicação (`games`). Optei por um sistema de avaliação de 0 a 5 estrelas, por ser um padrão intuitivo e amplamente reconhecido em plataformas de jogos.
