﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using React.NET.Models;

namespace React.NET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        BooksDataAccessLayer _dataLayer;
        public BookController(BooksDataAccessLayer booksDataAccessLayer)
        {
            _dataLayer = booksDataAccessLayer;
        }

        [HttpGet]
        [Route("api/Book/Index")]
        public IEnumerable<Book> Index()
        {
            return _dataLayer.GetAllBooks();
        }

        [HttpPost]
        [Route("api/Book/Create")]
        public bool Create(Book book)
        {
            return _dataLayer.TryAddBook(book);
        }

        [HttpDelete]
        [Route("api/Book/Delete/{id}")]
        public bool Delete(int id)
        {
            return _dataLayer.TryDeleteBook(id);
        }
    }
}