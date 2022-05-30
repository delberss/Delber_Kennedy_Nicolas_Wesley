Todos os metodos precisam contem um campo no body chamado pword com o valor "senha123" além dos descritos


caminho \ parametros \ retorna \ descrição

# DB

'app.url/createDb'  \ -- \ 'ok' \ cria o banco de dados

# USUARIOS

'app.url/usuarios/login' \ email, senha \ json com info usuario \ func de login, se as info forem validas retorna as inf do usuario

'app.url/usuarios/insert' \nome, email, senha. experiencia, nivel, caminhoAtual, caminhoFront, caminhoBAck \ 'ok'\ insere um usuario no banco de dados

'app.url/usuarios/get/all' \ -- \ json com todos os usuarios \ get para todos os usuarios cadastrados

'app.url/usuarios/get'\ id \ json com um usuarios especifico \ informações de um usuario especifico

'app.url/usuarios/ranking/get/' \ -- \ json usuarios \ retorna todos os usuarios ordenados pela experiencia

'app.url/usuarios/edit' \ nome, email, senha. experiencia, nivel, caminhoAtual, caminhoFront, caminhoBAck \ 'ok' \ edita um usuario

'app.url/usuarios/delete' \ id \ 'ok' \ deleta um usuario

# CAMINHOS

