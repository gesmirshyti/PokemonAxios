import React, { useState } from "react";
import './App.css'

function App() {
    function tossCoin() {
        // Simulate a coin toss by generating random "heads" or "tails"
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
    function fiveHeadsAsync() {
        return new Promise((resolve, reject) => {
            let headsCount = 0;
            let attempts = 0;
    
            function flipCoin() {
                attempts++;
                let result = tossCoin();
                console.log(`${result} was flipped`);
                if (result === "heads") {
                    headsCount++;
                } else {
                    headsCount = 0;
                }
    
                if (headsCount === 5) {
                    resolve(`It took ${attempts} tries to flip five "heads"`);
                } else {
                    flipCoin();
                }
            }
    
            flipCoin();
        });
    }
    
    fiveHeadsAsync()
        .then(result => {
            console.log(result);
            console.log("This is run after the fiveHeadsAsync function completes");
        })
        .catch(error => {
            console.error("An error occurred:", error);
        });
    
    
    return (
      <div className="App"></div>
      );
    }
    
    export default App;