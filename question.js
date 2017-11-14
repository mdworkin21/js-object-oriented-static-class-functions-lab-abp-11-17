'use strict';

class Question{

  constructor(){
    Question._All.push(this)
  }

  static All(){
      return this._All
  }

  }

Question._All = []
