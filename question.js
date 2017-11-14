'use strict';

class Question{

  constructor(content, ID){
    this.content = content
    this.ID = ID
    this.save()
  }


  save(){
    this.constructor._All.push(this)
  }

  static All(){
      return this._All
  }

  Find(ID){
    return this.All().filter(function(question){
      return question.ID === ID

    })
  }


  }

Question._All = []
