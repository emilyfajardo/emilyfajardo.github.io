document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 100, timeBetweenNPCs: 3800, npcCollisionRadius: 100, actionDuration:1000, jumpHeight: 350, makeResponsive: true, removeNPCAfterInteractedDelay: 2500, npcSpeed: 400});
});