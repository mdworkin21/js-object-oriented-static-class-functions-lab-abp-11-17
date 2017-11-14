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

  static Find(id){
    return this.All().filter(function(question){
      return question.id === id

    })
  }


  }

Question._All = []
