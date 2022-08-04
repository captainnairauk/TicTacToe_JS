const tiles = Array.from(document.querySelectorAll(".tile"));
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");

let board = ["", "", "", "", "", "","", "", ""];
let currentPlayer = "X";
let isGameActive = true;

const PLAYERX_WON = "PLAYERX_WON";
const PLAYER0_WON = "PLAYER0_ WON";
const TIE = "TIE";