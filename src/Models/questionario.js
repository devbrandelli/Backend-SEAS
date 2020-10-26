const mongoose = require('mongoose');

const QuestionarioSchema = new mongoose.Schema({  
    data: "",
    hora: "",
    localAbordagem: "",
    motivoAbordagem: "",
    nomeAbordado: "",
    dataNascimento: Date,
    sexo: "",
    cor: "",
    localNascimento: "",
    localOrigem: "",
    tempoJund: "",
    tempoRua: "",
    motivo: [],
    sairRua: "",
    oquePrecisaSairRua: "",
    servicoBusca: [],
    meioSobrevivencia: "",
    beneficio: [],
    casosEspeciais: [],    
    equipeComposta: "",
    pessoasAbordadas: "",
    observacaoGeral: "",
    encaminhamento: "",
    orientacoes: "",
    responsavel: ""  
})

module.exports = mongoose.model('Questionario', QuestionarioSchema);