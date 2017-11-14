'use strict';

class Question{

  constructor(question, id){
    this.question = question
    this.id = id
    this.save()
  }


  save(){
    this.constructor._All.push(this)
  }
  static All(){
      return this._All
  }

  find(){
    return this.All().filter(function(question){

    })
  }


  }

Question._All = []
