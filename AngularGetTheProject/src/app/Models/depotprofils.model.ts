export interface DepotProfils {
    id: number;
  
    // Informations de base
    titreProfil: string;
    website: string;
    formation: string;
    niveauEtude: string;
    competences: string;
    parcours: string;
  
    // Langues
    langue1: string;
    langue1Proficiency: string;
    langue2: string;
    langue2Proficiency: string;
    langue3: string;
    langue3Proficiency: string;
  
    // Informations sur l'expérience
    experience: string;
    tarif: number;
    disponibilite: string;
  
    // Informations complémentaires
    metier: string;
    recherche: string;
    permis: string;
    envoiEmails: boolean;
  }