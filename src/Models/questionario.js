const mongoose = require('mongoose');

const QuestionarioSchema = new mongoose.Schema({  
    data: Date,
    localAbordagem: "",
    motivoAbordagem: "",
    nomeAbordado: "",
    dataNascimento: Date,
    sexo: "",
    cor: "",
    localNascimento: {
      cidade: "",
      uf: ""
    },
    localOrigem: {
      cidade: "",
      uf: ""
    },
    tempoEmJundiai: "",
    tempoSituacaoDeRua: "",
    motivoLevouParaRua: "",
    interesseSairDaRua: Boolean,
    precisaParaSairDaRua: "",
    buscaQualServico: "",
    meioSobrevivencia: "",
    recebeBeneficio: Boolean,
    observacaoGeral: "",
    responsavel: ""  
})

module.exports = mongoose.model('Questionario', QuestionarioSchema);