const score = {
    win: 0,
    looses: 0,
    ties: 0
};
update_scoreboard();
// document.querySelector('.scoreboard').innerHTML=`win:${score.win},looses:${score.looses},ties:${score.ties}`;
let autop_on= false;
let intervalID ;

function autoplay(){
    if(autop_on===false){
         intervalID =setInterval(function(){
            computermove();
            let move=computermove()
            playermove(move);
            update_scoreboard()
        },1000)
        autop_on=true;

    }
    else{
        clearInterval(intervalID)
        autop_on=false;
    }
    
}
function computermove() {
    let computer = '';
    let num = Math.random();
    if (num >= 0 && num < 1 / 3) {
        computer = 'rock'

    }
    else if (num >= 1 / 3 && num < 2 / 3) {
        computer = 'paper'
    }
    else if (num >= 2 / 3 && num <= 1) {
        computer = 'Scissor'
    }
    return computer;

}


function playermove(move) {
    let computer = computermove()
    let result = '';
    if (move === 'rock') {
        if (computer === 'rock') {
            result = 'tie';


        } else if (computer === 'scissor') {
            result = 'you loose';

        }
        else if (computer === 'paper') {
            result = 'you win';

        }
        // document.querySelector('.uncmove').innerHTML = `you ${move} - computer ${computermove()}`
    }

    else if (move === 'paper') {
        if (computer === 'rock') {
            result = 'you win';


        } else if (computer === 'scissor') {
            result = 'you loose';

        }
        else if (computer === 'paper') {
            result = 'tie';

        }
        // document.querySelector('.uncmove').innerHTML = `you ${move} - computer ${computermove()}`
    }
    else if (move === 'scissor') {

        if (computer === 'rock') {
            result = 'you loose';


        } else if (computer === 'scissor') {
            result = 'tie';

        }
        else if (computer === 'paper') {
            result = 'you win';

        }
    }
    document.querySelector('.uncmove').innerHTML = `you <img src="./${move}.png" alt=""> vs <img src="./${computer}.png" alt="" srcset=""> computer`




    if (result === 'you win') {
        score.win = score.win + 1;
    } else if (result === 'tie') {
        score.ties = score.ties + 1;
    } else if (result === 'you loose') {
        score.looses = score.looses + 1;
    }

//     alert(`you pick ${move} . computer pick ${computer},${result},
// win:${score.win},looses:${score.looses},ties:${score.ties}`)
    // alert(score);
    console.log(score)
    update_scoreboard();
    document.querySelector('.gameresult').innerHTML = `result`


}

function update_scoreboard() {
    document.querySelector('.scoreboard').innerHTML = `win:${score.win}  ,looses:${score.looses}  ,ties:${score.ties}`;


}

// document.querySelector('.gameresult').innerHTML=result
// document.querySelector('.uncmove').innerHTML=`you ${move} - computer ${computermove()}`
