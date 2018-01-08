var discards = [];

function Card(suit, value){
    this.suit = suit;
    this.value = value;
}

function Deck(){
    this.cards = [];

    //actions
    this.reset = function(){
        this.cards = [];
        var suits = ["heart", "diamond", "spade", "club"];
        var face = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (var i = 0; i < suits.length; i ++){
            for (var k = 0; k < face.length; k++){
                this.cards.push(new Card(suits[i], face[k]));
            }
        }
    }
    this.reset();

    this.shuffle = function(){
        for (var i = 0; i < this.cards.length; i++){
            random = Math.floor(Math.random() * 52);
            var temp = this.cards[i];
            this.cards[i] = this.cards[random];
            this.cards[random] = temp;
        }
    }

    this.deal = function(player, amount){
        for (var i = 0; i < amount; i++){
            var card = this.cards.pop();
            player.hand.push(card);
        }
    }
}

function Player(name){
    this.name = name;
    this.hand = [];
    this.discard = function(idx){
        var card = this.hand.splice(idx, 1);
        discards.push(card[0]);
    }
}

// Crazy 8's



// var Deck1 = new Deck();
// // console.log(Deck1.cards);

// Deck1.shuffle();

// var player1 = new Player("Andrei");
// Deck1.deal(player1, 8);
// console.log(Deck1.cards);
// console.log("fbhvhafbijaebhjfabvakjlnlbfbjvbsjkldbfjbjskldbkjvsbsfkjlbsh");
// console.log(player1.hand);

// player1.discard(2);
// console.log("fbhvhafbijaebhjfabvakjlnlbfbjvbsjkldbfjbjskldbkjvsbsfkjlbsh");
// console.log(player1.hand);
// console.log("fbhvhafbijaebhjfabvakjlnlbfbjvbsjkldbfjbjskldbkjvsbsfkjlbsh");
// console.log(discards);
