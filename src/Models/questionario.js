const mongoose = require('mongoose');

const QuestionarioSchema = new mongoose.Schema({  
    data: Date,
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
    oquePrecisaSairDaRua: "",
    servicoBusca: [],
    meioSobrevivencia: "",
    beneficio: [],
    observacaoGeral: "",
    responsavel: ""  
})

module.exports = mongoose.model('Questionario', QuestionarioSchema);