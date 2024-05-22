// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

  async function myButtonClicked() {
    try {
      const resultJSON = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
      const jsonData = await resultJSON.json()
      //console.log(jsonData)
      const tempOttawa = jsonData.main.temp
      console.log(tempOttawa)
      // convert to C
      // then show
      document.getElementById("final-answer").innerHTML = "The temperature in Ottawa is " + tempOttawa
    } catch (error) {
      console.error(error)
    }
  }