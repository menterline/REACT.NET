using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace React.NET.Models
{
    public partial class masterContext : DbContext
    {
        public masterContext()
        {
        }

        public masterContext(DbContextOptions<masterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Book> Book { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=localhost;Database=master;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("book");

                entity.Property(e => e.BookId).HasColumnName("bookID");

                entity.Property(e => e.AuthorName)
                    .IsRequired()
                    .HasColumnName("authorName")
                    .HasMaxLength(96)
                    .IsUnicode(false);

                entity.Property(e => e.BookName)
                    .IsRequired()
                    .HasColumnName("bookName")
                    .HasMaxLength(96)
                    .IsUnicode(false);

                entity.Property(e => e.EndDate)
                    .HasColumnName("endDate")
                    .HasColumnType("date");

                entity.Property(e => e.Rating)
                    .HasColumnName("rating")
                    .HasColumnType("decimal(2, 1)");

                entity.Property(e => e.ReviewText)
                    .HasColumnName("reviewText")
                    .HasColumnType("text");

                entity.Property(e => e.StartDate)
                    .HasColumnName("startDate")
                    .HasColumnType("date");
            });
        }
    }
}
