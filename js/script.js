// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Gabriel
// Created on: May 2024
// This file contains the JS functions for index.html

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    document.getElementById("api-image").innerHTML =
      '<img src="' +
      jsonData.url +
      '" alt="API image" class="center" ' +
      '>'
    if (jsonData.artist_url != "none") {
      document.getElementById("image-artist").innerHTML =
        "<p>Artist: " +
        '<a href="' +
        jsonData.artist_url +
        '">' +
        jsonData.artist +
        "</a>"
    } else {
      document.getElementById("image-artist").innerHTML = "<p>Artist: unknown</p>"
    }
  } catch (err) {
    console.log(err)
  }
}

getImage("https://api.catboys.com/img")