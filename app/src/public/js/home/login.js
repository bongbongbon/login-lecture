"use strict";

const { json } = require("body-parser");
const { application } = require("express");

const id  = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    logingBtn = document.querySelector("button");

logingBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value, 
        psword: psword.value,
    };
}

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
