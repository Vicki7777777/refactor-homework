const MA = 'MA';
const CT = 'CT';
const NY = 'NY';
const NH = 'NH';
const ME = 'ME';

function deliveryDate (anOrder, isRush) {
  function judgeOrderWithMA_CT() {
    return [
      MA,
      CT,
    ].includes(anOrder.deliveryState);
  }

  function judgeOrderWithNY_NH() {
    return [
      NY,
      NH,
    ].includes(anOrder.deliveryState);
  }

  if (isRush) {
    let deliveryTime;
    if (judgeOrderWithMA_CT()) {
      deliveryTime = 1;
    }
    else if (judgeOrderWithNY_NH()) {
      deliveryTime = 2;
    }
    else {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime;
    if ([
      MA,
      CT,
      NY,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 2;
    }
    else if ([
      ME,
      NH,
    ].includes(anOrder.deliveryState)) {
      deliveryTime = 3;
    }
    else {
      deliveryTime = 4;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
