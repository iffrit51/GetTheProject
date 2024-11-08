 public class DepotProfils
    {
        public int Id { get; set; }

        // Informations de base
        public string TitreProfil { get; set; }
        public string Website { get; set; }
        public string Formation { get; set; }
        public string NiveauEtude { get; set; }
        public string Competences { get; set; }
        public string Parcours { get; set; }

        // Langues
        public string Langue1 { get; set; }
        public string Langue1Proficiency { get; set; }
        public string Langue2 { get; set; }
        public string Langue2Proficiency { get; set; }
        public string Langue3 { get; set; }
        public string Langue3Proficiency { get; set; }

        // Informations sur l'expérience
        public string Experience { get; set; }
        public decimal Tarif { get; set; }
        public string Disponibilite { get; set; }

        // Informations complémentaires
        public string Metier { get; set; }
        public string Recherche { get; set; }
        public string Permis { get; set; }
        public bool EnvoiEmails { get; set; }
    }