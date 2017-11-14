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
    return this.All()[id-1]

  }}




Question._All = []
