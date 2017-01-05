var cardDeck = deck();
var player1Cards = [];
var player2Cards = [];
var player3Cards = [];
var player4Cards = [];
var randomCard;

$(document).ready(function() {
    for (var i = 0; i < 13; i++) {
        randomCard = getRandomCard();
        player1Cards.push(randomCard);
    }
    player1Cards.sort(firstBy(sortBySuitValue).thenBy(sortByValue));
    addToList(1, player1Cards);
    for (var i = 0; i < 13; i++) {
        randomCard = getRandomCard();
        player2Cards.push(randomCard);
    }
    player2Cards.sort(firstBy(sortBySuitValue).thenBy(sortByValue));
    addToList(2, player2Cards);
    for (var i = 0; i < 13; i++) {
        randomCard = getRandomCard();
        player3Cards.push(randomCard);
    }
    player3Cards.sort(firstBy(sortBySuitValue).thenBy(sortByValue));
    addToList(3, player3Cards);
    for (var i = 0; i < 13; i++) {
        randomCard = getRandomCard();
        player4Cards.push(randomCard);
    }
    player4Cards.sort(firstBy(sortBySuitValue).thenBy(sortByValue));
    addToList(4, player4Cards);
});

function card(value, number, suitValue, suit) {
    this.value = value;
    this.number = number;
    this.suitValue = suitValue;
    this.suit = suit;
}

function sortByValue(a,b) {
  if (a.value < b.value)
    return 1;
  if (a.value > b.value)
    return -1;
  return 0;
}

function sortBySuitValue(a,b) {
  if (a.suitValue < b.suitValue)
    return -1;
  if (a.suitValue > b.suitValue)
    return 1;
  return 0;
}

function deck() {
    this.cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.cardNumbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    this.cardSuitValues = [4, 2, 1, 3]
    this.cardSuits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
    var cards = [];
    
    for (var s = 0; s < this.cardSuits.length; s++) {
        for (var n = 0; n < this.cardNumbers.length; n++) {
            cards.push(new card(this.cardValues[n], this.cardNumbers[n], this.cardSuitValues[s], this.cardSuits[s]));
        }
    }
    return cards;
}

function getRandomCard() {
    var card = cardDeck[Math.floor(Math.random()*cardDeck.length)];;
    var cardToRemove = cardDeck.indexOf(card);
    if (cardToRemove > -1) {
        cardDeck.splice(cardToRemove, 1);
    }
    return card;
}

function addToList(player, playersCards) {
    for (var i = 0; i < playersCards.length; i++) {
        if (playersCards[i].suit == "&hearts;" || playersCards[i].suit == "&diams;") {
            var color = 'red';
        } else {
            var color = 'black';
        }
        $("#cardList-player" + player).append('<li><div class="card"><div class="left" style="color:' + color + '">' + playersCards[i].suit + '</div><div class="right" style="color:' + color + '">' + playersCards[i].number + '</div></div></li>');
    }
}


/*** Copyright 2013 Teun Duynstee Licensed under the Apache License, Version 2.0 ***/
!function(n,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():n.firstBy=t()}(this,function(){var n=function(){function n(n){return n}function t(n){return"string"==typeof n?n.toLowerCase():n}function e(e,r){if(r="number"==typeof r?{direction:r}:r||{},"function"!=typeof e){var i=e;e=function(n){return n[i]?n[i]:""}}if(1===e.length){var o=e,f=r.ignoreCase?t:n;e=function(n,t){return f(o(n))<f(o(t))?-1:f(o(n))>f(o(t))?1:0}}return r.direction===-1?function(n,t){return-e(n,t)}:e}function r(n,t){var i="function"==typeof this&&this,o=e(n,t),f=i?function(n,t){return i(n,t)||o(n,t)}:o;return f.thenBy=r,f}return r}();return n});