const pessoa1 = {
    nome: 'André',
    sobrenome: 'Luiz',
    idade: 33,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  pessoa1.incrementaIdade();
  pessoa1.fala();
  