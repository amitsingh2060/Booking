const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
console.log(ticketPrice, "ticketPrice");

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
   // console.log(selectedSeats,"selectedSeats");
   const selectedSeatCount = selectedSeats.length
  // console.log(selectedSeatCount,"selectedSeatCount");
  count.innerText = selectedSeatCount;
  total.innerText = selectedSeatCount * ticketPrice

}
//Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})
// seat click event
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        console.log("checkkkk");
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})
