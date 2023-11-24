const qaPairs = {
  "Olá": "Olá! Como posso ajudar?",
  "Qual é o seu nome?": "Eu sou um assistente virtual.",
  "Como você está?": "Estou aqui para ajudar!",
  "O que é inteligência artificial?": "Inteligência artificial é a simulação de processos de inteligência humana por máquinas.",
};


export const getAnswer = (question) => {
  question = question.trim().toLowerCase();

  // Verifica se há uma resposta correspondente na lista de perguntas e respostas
  for (const key in qaPairs)
  {
    if (question.includes(key.toLowerCase()))
    {
      return qaPairs[key];
    }
  }

  return "Desculpe, não entendi a pergunta.";
}

export default getAnswer;
