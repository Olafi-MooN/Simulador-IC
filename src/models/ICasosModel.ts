interface ICasosModel { 
  id: number;
  title: string;
  quiz: ICasoQuizModel[];
}

interface ICasoQuizModel { 
  id: number;
  question: string;
  response: string;
}

export type { ICasosModel, ICasoQuizModel };