using System;
using System.Collections.Generic;

namespace React.NET.Models
{
    public partial class Book
    {
        public int BookId { get; set; }
        public string BookName { get; set; }
        public string AuthorName { get; set; }
        public string ReviewText { get; set; }
        public decimal Rating { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
    }
}
