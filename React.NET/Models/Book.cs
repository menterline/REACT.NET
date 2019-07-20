using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace React.NET.Models
{
    public partial class Book
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BookId { get; set; }
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public string ReviewText { get; set; }
        public decimal Rating { get; set; }
        public DateTime? StartDate { get; set; }
        public string StartShortDate
        {
            get
            {
                if (StartDate.HasValue)
                    return StartDate.Value.ToShortDateString();
                return string.Empty;
            }
        }
        public DateTime? EndDate { get; set; }
        public string EndShortDate
        {
            get
            {
                if (EndDate.HasValue)
                    return EndDate.Value.ToShortDateString();
                return string.Empty;
            }
        }
    }
}
