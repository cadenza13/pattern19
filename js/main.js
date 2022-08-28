'use strict';

(() =>{
  class Table{
    constructor(){
      this.spots = [
        {class: 'space', column: 0},
        {view: '1 - 18', colspan: 6, column: 0, count: 0, odds: 2},
        {view: '19 - 36', colspan: 6, column: 0, count: 0, odds: 2},
        {view: '0', rowspan: 4, class: 'green', column: 1, count: 0, odds: 36, num: 0, str: '緑の0'},
        {view: '1', class: 'red', column: 2, count: 0, odds: 36, num: 1, str: '赤の1'},
        {view: '4', class: 'black', column: 2, count: 0, odds: 36, num: 4, str: '黒の4'},
        {view: '7', class: 'red', column: 2, count: 0, odds: 36, num: 7, str: '赤の7'},
        {view: '10', class: 'black', column: 2, count: 0, odds: 36, num: 10, str: '黒の10'},
        {view: '13', class: 'black', column: 2, count: 0, odds: 36, num: 13, str: '黒の13'},
        {view: '16', class: 'red', column: 2, count: 0, odds: 36, num: 16, str: '赤の16'},
        {view: '19', class: 'red', column: 2, count: 0, odds: 36, num: 19, str: '赤の19'},
        {view: '22', class: 'black', column: 2, count: 0, odds: 36, num: 22, str: '黒の22'},
        {view: '25', class: 'red', column: 2, count: 0, odds: 36, num: 25, str: '赤の25'},
        {view: '28', class: 'black', column: 2, count: 0, odds: 36, num: 28, str: '黒の28'},
        {view: '31', class: 'black', column: 2, count: 0, odds: 36, num: 31, str: '黒の31'},
        {view: '34', class: 'red', column: 2, count: 0, odds: 36, num: 34, str: '赤の34'},
        {view: '2 to 1', column: 2, count: 0, odds: 3},
        {view: '2', class: 'black', column: 3, count: 0, odds: 36, num: 2, str: '黒の2'},
        {view: '5', class: 'red', column: 3, count: 0, odds: 36, num: 5, str: '赤の5'},
        {view: '8', class: 'black', column: 3, count: 0, odds: 36, num: 8, str: '黒の8'},
        {view: '11', class: 'black', column: 3, count: 0, odds: 36, num: 11, str: '黒の11'},
        {view: '14', class: 'red', column: 3, count: 0, odds: 36, num: 14, str: '赤の14'},
        {view: '17', class: 'black', column: 3, count: 0, odds: 36, num: 17, str: '黒の17'},
        {view: '20', class: 'black', column: 3, count: 0, odds: 36, num: 20, str: '黒の20'},
        {view: '23', class: 'red', column: 3, count: 0, odds: 36, num: 23, str: '赤の23'},
        {view: '26', class: 'black', column: 3, count: 0, odds: 36, num: 26, str: '黒の26'},
        {view: '29', class: 'black', column: 3, count: 0, odds: 36, num: 29, str: '黒の29'},
        {view: '32', class: 'red', column: 3, count: 0, odds: 36, num: 32, str: '赤の32'},
        {view: '35', class: 'black', column: 3, count: 0, odds: 36, num: 35, str: '黒の35'},
        {view: '2 to 1', column: 3, count: 0, odds: 3},
        {view: '3', class: 'red', column: 4, count: 0, odds: 36, num: 3, str: '赤の3'},
        {view: '6', class: 'black', column: 4, count: 0, odds: 36, num: 6, str: '黒の6'},
        {view: '9', class: 'red', column: 4, count: 0, odds: 36, num: 9, str: '赤の9'},
        {view: '12', class: 'red', column: 4, count: 0, odds: 36, num: 12, str: '赤の12'},
        {view: '15', class: 'black', column: 4, count: 0, odds: 36, num: 15, str: '黒の15'},
        {view: '18', class: 'red', column: 4, count: 0, odds: 36, num: 18, str: '赤の18'},
        {view: '21', class: 'red', column: 4, count: 0, odds: 36, num: 21, str: '赤の21'},
        {view: '24', class: 'black', column: 4, count: 0, odds: 36, num: 24, str: '黒の24'},
        {view: '27', class: 'red', column: 4, count: 0, odds: 36, num: 27, str: '赤の27'},
        {view: '30', class: 'red', column: 4, count: 0, odds: 36, num: 30, str: '赤の30'},
        {view: '33', class: 'black', column: 4, count: 0, odds: 36, num: 33, str: '黒の33'},
        {view: '36', class: 'red', column: 4, count: 0, odds: 36, num: 36, str: '赤の36'},
        {view: '2 to 1', column: 4, count: 0, odds: 3},
        {class: 'space', column: 5},
        {view: '1st 12', colspan: 4, column: 5, count: 0, odds: 3},
        {view: '2nd 12', colspan: 4, column: 5, count: 0, odds: 3},
        {view: '3rd 12', colspan: 4, column: 5, count: 0, odds: 3},
        {class: 'space', column: 6},
        {view: 'add', colspan: 3, column: 6, count: 0, odds: 2},
        {view: 'even', colspan: 3, column: 6, count: 0, odds: 2},
        {view: '', colspan: 3, class: 'red', column: 6, count: 0, odds: 2},
        {view: '', colspan: 3, class: 'black', column: 6, count: 0, odds: 2},
      ];

      this.tr = document.querySelectorAll('tr');
      this.tableNode = document.querySelector('.table');
      this.textDisplay = document.querySelector('.text-display');
      this.text = document.getElementById('text');
      this.prevCount = 0;
      this.betSwitch = false;

      for(let i = 0; i < this.spots.length; i++){
        const td = document.createElement('td');

        if(this.spots[i].view){
          td.textContent = this.spots[i].view;
        }

        if(this.spots[i].colspan){
          td.colSpan = this.spots[i].colspan;
        }

        if(this.spots[i].rowspan){
          td.rowSpan = this.spots[i].rowspan;
        }

        if(this.spots[i].class){
          td.classList.add(this.spots[i].class);
        }

        this.tr[this.spots[i].column].appendChild(td);
      }

      this.bet = new Bet();
    }

    addition(index){
      this.prevCount = this.spots[index].count;
      this.spots[index].count += this.bet.amount;

      if(this.spots[index].count > 99){
        this.spots[index].count = 99;
      }
    }

    reduce(index){
      this.prevCount = this.spots[index].count;
      this.spots[index].count -= this.bet.amount;

      if(this.spots[index].count < 0){
        this.spots[index].count = 0;
      }
    }

    correct(index, minus){
      this.spots[index].count += minus;
    }

    countCheck(){
      this.spots.forEach(spot =>{
        if(spot.count > 0){
          this.betSwitch = true;
        }
      });
    }

    result(number){
      this.spots.forEach((spot, index) =>{
        if(spot.num === number){
          let bonus = 0;

          if(spot.count > 0){ //数字の直当たりを判定
            bonus += spot.count * spot.odds;
          }

          if(number === 0){ //０ならここで終了
            this.showText();
            player.elected(bonus);
            return;
          }

          if(number % 2 === 0){ //偶数、奇数を判定
            bonus += this.spots[49].count * this.spots[49].odds;
          } else {
            bonus += this.spots[48].count * this.spots[48].odds;
          }

          if(spot.class === 'red'){ //色を判定
            bonus += this.spots[50].count * this.spots[50].odds;
          } else {
            bonus += this.spots[51].count * this.spots[51].odds;
          }

          if(spot.column === 2){ //横列を判定
            bonus += this.spots[16].count * this.spots[16].odds;
          } else if(spot.column === 3){
            bonus += this.spots[29].count * this.spots[29].odds;
          } else {
            bonus += this.spots[42].count * this.spots[42].odds;
          }

          if(number < 19){ //ハイ、ローで判定
            bonus += this.spots[1].count * this.spots[1].odds;
          } else {
            bonus += this.spots[2].count * this.spots[2].odds;
          }

          if(number < 13){ //ダースで判定
            bonus += this.spots[44].count * this.spots[44].odds;
          } else if(number > 24){
            bonus += this.spots[46].count * this.spots[46].odds;
          } else {
            bonus += this.spots[45].count * this.spots[45].odds;
          }

          player.elected(bonus);
          this.showText(index, bonus);
        }
      });
    }

    showText(index, bonus){
      if(player.currentCredit === 0){
        this.text.innerText = `${this.spots[index].str}が出ました!\n残念ながらゲームオーバーです!`;
      } else {
        this.text.innerText = `${this.spots[index].str}が出ました!\nあなたの配当は${bonus}枚です!`;
      }

      this.textDisplay.classList.add('appear');
      this.tableNode.classList.add('freeze');

      const textBtn = document.querySelector('span');
      textBtn.addEventListener('click', () =>{
        if(player.currentCredit === 0){
          location.href = 'index.html';
          return;
        }

        this.format();

        this.textDisplay.classList.remove('appear');
        this.tableNode.classList.remove('freeze'); 
      });
    }

    showTable(){
      this.tableNode.classList.remove('hidden');
    }

    format(){
      this.spots.forEach((spot, index) =>{
        if(spot.count > 0){
          spot.count = 0;
          this.bet.format(index);
        }
      });

      this.betSwitch = false;
    }
  }

  class Bet{
    constructor(){
      this.tds = document.querySelectorAll('td');
      this.amountBtn = document.getElementById('amount-btn');
      this.convertBtn = document.getElementById('convert-btn');
      this.spinBtn = document.getElementById('spin-btn');
      this.amount = 1;
      this.convert = true;

      this.tds.forEach((td, index) =>{
        td.addEventListener('click', () =>{
          if(this.convert){
            if(player.currentCredit === 0){
              return;
            }
            table.addition(index);
          } else {
            if(table.spots[index].count === 0){
              return;
            }
            table.reduce(index);
          }

          player.creditChange(index);

          if(table.spots[index].count === 0){
            this.format(index);
          } else {
            td.classList.add('bet');
            td.textContent = `x${table.spots[index].count}`;
          }
        });
      });

      this.amountBtn.addEventListener('click', () =>{
        switch(this.amount){
          case 1:
            this.amount = 5;
            break;
          case 5:
            this.amount = 10;
            break;
          case 10:
            this.amount = 1;
            break;
        }

        this.amountBtn.textContent = `${this.amount} BET`;
      });

      this.convertBtn.addEventListener('click', () =>{
        if(this.convert){
          this.convert = false;
          this.convertBtn.textContent = '減らす';
        } else {
          this.convert = true;
          this.convertBtn.textContent = '増やす';
        }
      });

      this.spinBtn.addEventListener('click', () =>{
        table.countCheck();

        if(table.betSwitch){
          new Rulet();
        }
      });
    }

    format(index){
      this.tds[index].classList.remove('bet');
      this.tds[index].textContent = `${table.spots[index].view}`;
    }
  }

  class Rulet{
    constructor(){
      this.number = Math.floor(Math.random() * 37);
      table.result(this.number);
      console.log(this.number);
    }
  }

  class Player{
    constructor(){
      this.credit = document.getElementById('credit');
      this.currentCredit = 100;

      this.creditUpdate();
    }

    creditChange(index){
      const betCoin = table.spots[index].count - table.prevCount;
      this.currentCredit -= betCoin;

      if(this.currentCredit < 0){
        table.correct(index, this.currentCredit);
        this.currentCredit = 0;
      }

      this.creditUpdate();
    }

    creditUpdate(){
      this.credit.textContent = `${this.currentCredit}`;
    }

    elected(bonus){
      this.currentCredit += bonus;
      this.creditUpdate();
    }
  }

  const title = document.querySelector('.title');
  const startBtn = document.getElementById('start-btn');
  
  const table = new Table();
  const player = new Player();

  startBtn.addEventListener('click', () =>{
    title.classList.add('hidden');

    table.showTable();
  });
})();