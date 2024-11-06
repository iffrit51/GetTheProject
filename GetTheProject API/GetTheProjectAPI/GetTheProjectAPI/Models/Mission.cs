namespace GetTheProjectAPI.Models
{
    public class Mission
    {
        public int Id { get; set; }
        public string Reference { get; set; }
        public string Intitule { get; set; }
        public string Lieu { get; set; }
        public DateTime Demarage { get; set; }
        public string Societe { get; set; }
    }
}