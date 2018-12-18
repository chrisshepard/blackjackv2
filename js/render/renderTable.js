function renderTable(players, dealer) {
  root.appendChild(dealerComponent(dealer));
  players.forEach(player => {
    root.appendChild(playerComponent(player));
  });
};
