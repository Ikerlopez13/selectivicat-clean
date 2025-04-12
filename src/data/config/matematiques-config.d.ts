export interface SubTemaConfig {
  nom: string;
  subcategories: string[];
}

export interface MatematiquesConfig {
  subTemes: {
    [key: string]: SubTemaConfig;
  };
} 