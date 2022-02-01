const pessoa = {
    nome: 'André',
    sobrenome: 'Luiz',
    idade: 30,
    endereco: {
      rua: 'Brasilia',
      numero: 110
    }
  };
  
  // Atribuição via desestruturação
  const { nome, sobrenome, ...resto } = pessoa;
  console.log(nome, resto);
  