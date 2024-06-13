import express from 'express';
import { Book } from '../models/bookModel.js';
const myrouter=express.Router();


// Route for Save a new Book
myrouter.post('/', async (request, response) => {
    try {
      if (!request.body.title || !request.body.author || !request.body.publishYear) {
        return response.status(400).send({ message: 'Send all required fields: title, author, publishYear',});
      }
      const newBook = {
        title: request.body.title,
        author: request.body.author,
        publishYear: request.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return response.status(201).send(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Get All Books from database
myrouter.get('/', async (request, response) => {
    try {
      const books = await Book.find({});
  
      return response.status(200).json(books);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Get One Book from database by id
myrouter.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const book = await Book.findById(id);
  
      return response.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Update a Book
myrouter.put('/:id', async (request, response) => {
    try {
      if ( !request.body.title || !request.body.author || !request.body.publishYear){
        return response.status(400).send({
          message: 'Send all required fields: title, author, publishYear',
        });
      }
  
      const { id } = request.params;
      const result = await Book.findByIdAndUpdate(id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
// Route for Delete a book
myrouter.delete('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const result = await Book.findByIdAndDelete(id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default myrouter;