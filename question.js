'use strict';

class Question{

  constructor(content, id){
    this.content = content
    this.id = id
    this.save()
  }


  save(){
    this.constructor._All.push(this)
  }

  static All(){
      return this._All
  }

  Find(id){
    return this.All().filter(function(id){
      return question.id === id

    })
  }


  }

Question._All = []
