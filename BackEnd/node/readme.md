Todos os metodos precisam contem um campo no body chamado pword com o valor "senha123" além dos descritos


caminho \ parametros \ retorna \ descrição

# DB

'app.url/createDb'  \ -- \ 'ok' \ cria o banco de dados

# USUARIOS

'https://trabalhoengsw.herokuapp.com/usuarios/login' \ email, senha \ json com info usuario \ func de login, se as info forem validas retorna as inf do usuario

'https://trabalhoengsw.herokuapp.com/usuarios/insert' \nome, email, senha. experiencia, caminhoAtual, caminhoFront, caminhoBAck \ 'ok'\ insere um usuario no banco de dados

'https://trabalhoengsw.herokuapp.com/usuarios/get/all' \ -- \ json com todos os usuarios \ get para todos os usuarios cadastrados

'https://trabalhoengsw.herokuapp.com/usuarios/get'\ id \ json com um usuarios especifico \ informações de um usuario especifico

'https://trabalhoengsw.herokuapp.com/usuarios/ranking/get/' \ -- \ json usuarios \ retorna todos os usuarios ordenados pela experiencia

'https://trabalhoengsw.herokuapp.com/usuarios/edit' \ nome, email, senha. experiencia, nivel, caminhoAtual, caminhoFront, caminhoBAck \ 'ok' \ edita um usuario

'https://trabalhoengsw.herokuapp.com/usuarios/delete' \ id \ 'ok' \ deleta um usuario


# CAMINHOS

