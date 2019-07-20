using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React.NET.Models
{
    public class BooksDataAccessLayer
    {
        masterContext dbContext = new masterContext();

        public IEnumerable<Book> GetAllBooks()
        {
            try
            {
                return dbContext.Book.ToList();
            }
            catch { throw; }
        }

        public bool TryAddBook(Book book)
        {
            try
            {
                dbContext.Book.Add(book);
                dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
        public bool TryDeleteBook(int id)
        {
            try
            {
                Book book = dbContext.Book.Find(id);
                dbContext.Book.Remove(book);
                dbContext.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

    }
}
