import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class MockMealServiceService {

  constructor() { }

  getMeal() {
    return Observable.of([
      {
        "_id" : "5c5f1b9fb1a4ba36f341ca97",
        "ingredients" : [
          "Seafood",
          "Fish",
          "Lemons",
          "Peas",
          "Corn",
          "Rice",
          "Tomatoes",
          "Peppers"
        ],
        "name" : "Seafood Paella",
        "price" : 10.99,
        "imageUrl" : "https://img.taste.com.au/lNFYhmRK/taste/2016/11/seafood-paella-97653-1.jpeg",
        "category" : "seafood",
        "description" : "One mouthful of a steamy bowl of paella and you'll be on a beach in Spain -- such is the power of this seafood extravaganza.",
        "__v" : 0
      }
    ])
  }
}
