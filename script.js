    'use strict';
    /*
    console.log( document.querySelector( '.message' ).textContent );
    document.querySelector( '.message' ).textContent = 'Correct 🥳';

    message displayed about wrong and right
    document.querySelector( '.message' ).textContent = ` Correct Number 🥳`

    this shows the correct number only when user inputs correct value
    document.querySelector( '.number' ).textContent = 13;

    this shows the current score of user
    document.querySelector( '.score' ).textContent = 10;

    document.querySelector( '.guess' ).value = 23;
    console.log( document.querySelector( '.guess' ).value );
    */

    let secretNumber = Math.trunc( Math.random() * 20 ) + 1;
    console.log( secretNumber );
    console.log( `Aa gya n cheating krne bhai, lga hi tha` );
    let score = 20;
    let highScore = 0;

    document.querySelector( '.check' ).addEventListener( 'click', () => {
        const guess = Number(document.querySelector( '.guess' ).value);
        console.log( guess, typeof ( guess ) );

        /* When no input from unser */
        if ( !guess ) {
            document.querySelector( '.message' ).textContent = '⛔️ No Number';
        }

        /* When correct input from user */
        else if ( guess === secretNumber ) {
            document.querySelector( '.message' ).textContent = '🥳 Correct Number';
            document.querySelector( 'body' ).style.backgroundColor = '#60b347';
            document.querySelector( '.number' ).style.width = '30rem';
            document.querySelector( '.number' ).textContent = secretNumber;
            if ( score > highScore ) {
                highScore = score;
                document.querySelector( '.highscore' ).textContent = highScore;
            }
        }
        else if ( guess !== secretNumber ) {
            if ( score > 1 ) {
                document.querySelector( '.message' ).textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
                score--;
                document.querySelector( '.score' ).textContent = score;
            }
            else {
                document.querySelector( '.message' ).textContent = '💥 You lost the game!';
                document.querySelector( '.score' ).textContent = 0;
            }
        }
            
        /* When input inserted is greater than guessed number */
        // else if ( guess > secretNumber ) {
        //     if ( score > 1 ) {
        //         document.querySelector( '.message' ).textContent = '📈 Too High!';
        //         score--;
        //         document.querySelector( '.score' ).textContent = score;
        //     }
        //     else {
        //         document.querySelector( '.message' ).textContent = '💥 You lost the game!';
        //         document.querySelector( '.score' ).textContent = 0;
        //     }
        // }
            
        /* When input inserted is less than guessed number */
        // else if ( guess < secretNumber ) {
        //     if ( score > 1 ) {
        //         document.querySelector( '.message' ).textContent = '📉 Too Low!';
        //         score--;
        //         document.querySelector( '.score' ).textContent = score;
        //     }
        //     else {
        //         document.querySelector( '.message' ).textContent = '💥 You lost the game!';
        //         document.querySelector( '.score' ).textContent = 0;
        //     }
        // }
    } )

    document.querySelector( '.again' ).addEventListener( 'click', ()=> {
        score = 20;
        secretNumber = Math.trunc( Math.random() * 20 ) + 1;
        document.querySelector( '.message' ).textContent = 'Start guessing...';
        document.querySelector( '.score' ).textContent = score;
        document.querySelector( '.number' ).textContent = '?';
        document.querySelector( '.guess' ).value = '';
        document.querySelector( 'body' ).style.backgroundColor = '#222';
        document.querySelector( '.number' ).style.width = '15rem';
    })