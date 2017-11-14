'use strict';

class Question{

  constructor(){
    Question.All.push(this)
  }

  static All(){
      return this._All
  }

  }

Question._All = []