'use strict';

(() =>{
  class Table{
    constructor(){
      this.spots = [
        {class: 'space', column: 0},
        {view: '1 - 18', colspan: 6, column: 0, count: 0, odds: 2},
        {view: '19 - 36', colspan: 6, column: 0, count: 0, odds: 2},
        {view: '0', rowspan: 4, class: 'green', column: 1, count: 0, odds: 36},
        {view: '1', class: 'red', column: 2, count: 0, odds: 36},
        {view: '4', class: 'black', column: 2, count: 0, odds: 36},
        {view: '7', class: 'red', column: 2, count: 0, odds: 36},
        {view: '10', class: 'black', column: 2, count: 0, odds: 36},
        {view: '13', class: 'black', column: 2, count: 0, odds: 36},
        {view: '16', class: 'red', column: 2, count: 0, odds: 36},
        {view: '19', class: 'red', column: 2, count: 0, odds: 36},
        {view: '22', class: 'black', column: 2, count: 0, odds: 36},
        {view: '25', class: 'red', column: 2, count: 0, odds: 36},
        {view: '28', class: 'black', column: 2, count: 0, odds: 36},
        {view: '31', class: 'black', column: 2, count: 0, odds: 36},
        {view: '34', class: 'red', column: 2, count: 0, odds: 36},
        {view: '2 to 1', column: 2, count: 0, odds: 3},
        {view: '2', class: 'black', column: 3, count: 0, odds: 36},
        {view: '5', class: 'red', column: 3, count: 0, odds: 36},
        {view: '8', class: 'black', column: 3, count: 0, odds: 36},
        {view: '11', class: 'black', column: 3, count: 0, odds: 36},
        {view: '14', class: 'red', column: 3, count: 0, odds: 36},
        {view: '17', class: 'black', column: 3, count: 0, odds: 36},
        {view: '20', class: 'black', column: 3, count: 0, odds: 36},
        {view: '23', class: 'red', column: 3, count: 0, odds: 36},
        {view: '26', class: 'black', column: 3, count: 0, odds: 36},
        {view: '29', class: 'black', column: 3, count: 0, odds: 36},
        {view: '32', class: 'red', column: 3, count: 0, odds: 36},
        {view: '35', class: 'black', column: 3, count: 0, odds: 36},
        {view: '2 to 1', column: 3, count: 0, odds: 3},
        {view: '3', class: 'red', column: 4, count: 0, odds: 36},
        {view: '6', class: 'black', column: 4, count: 0, odds: 36},
        {view: '9', class: 'red', column: 4, count: 0, odds: 36},
        {view: '12', class: 'red', column: 4, count: 0, odds: 36},
        {view: '15', class: 'black', column: 4, count: 0, odds: 36},
        {view: '18', class: 'red', column: 4, count: 0, odds: 36},
        {view: '21', class: 'red', column: 4, count: 0, odds: 36},
        {view: '24', class: 'black', column: 4, count: 0, odds: 36},
        {view: '27', class: 'red', column: 4, count: 0, odds: 36},
        {view: '30', class: 'red', column: 4, count: 0, odds: 36},
        {view: '33', class: 'black', column: 4, count: 0, odds: 36},
        {view: '36', class: 'red', column: 4, count: 0, odds: 36},
        {view: '2 to 1', column: 4, count: 0, odds: 3},
        {class: 'space', column: 5},
        {view: '1st 12', colspan: 4, column: 5, count: 0, odds: 3},
        {view: '2nd 12', colspan: 4, column: 5, count: 0, odds: 3},
        {view: '3rd 12', colspan: 4, column: 5, count: 0, odds: 3},
        {class: 'space', column: 6},
        {view: 'add', colspan: 3, column: 6, count: 0, odds: 2},
        {view: 'even', colspan: 3, column: 6, count: 0, odds: 2},
        {colspan: 3, class: 'red', column: 6, count: 0, odds: 2},
        {colspan: 3, class: 'black', column: 6, count: 0, odds: 2},
      ];

      this.tr = document.querySelectorAll('tr');

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

      new Bet();
    }

    addition(index){
      this.spots[index].count++;
    }
  }

  class Bet{
    constructor(){
      this.tds = document.querySelectorAll('td');

      this.tds.forEach((td, index) =>{
        td.addEventListener('click', () =>{
          table.addition(index);
          td.classList.add('bet');
          td.textContent = `x${table.spots[index].count}`;
        });
      });
    }
  }

  const table = new Table();

})();

// {
//   const tds = document.querySelectorAll('td');

//   tds.forEach(td =>{
//     let count = 0;
//     td.addEventListener('click', () =>{
//       count++;
//       td.classList.add('bet');
//       td.textContent = `${count}`;
//     });
//   });
// }