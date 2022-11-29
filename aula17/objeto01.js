let amigo = {nome: 'Daniell',
sexo: 'M',
peso: 61,
engordar(p=0){
    this.peso += p;
}};

amigo.engordar(4);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);
