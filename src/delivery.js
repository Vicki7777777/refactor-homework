const MA = 'MA';
const CT = 'CT';
const NY = 'NY';
const NH = 'NH';
const ME = 'ME';

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

function judgeOrderWithMA_CT_NY() {
  return [
    MA,
    CT,
    NY,
  ].includes(anOrder.deliveryState);
}

function judgeOrderWithME_NH() {
  return [
    ME,
    NH,
  ].includes(anOrder.deliveryState);
}


function deliveryDate (anOrder, isRush) {
  if (isRush) {
    let deliveryTime = 3;
    if (judgeOrderWithMA_CT()) {
      deliveryTime = 1;
    }
    else if (judgeOrderWithNY_NH()) {
      deliveryTime = 2;
    }
    return anOrder.placedOn.plusDays(1 + deliveryTime);
  }
  else {
    let deliveryTime = 4;
    if (judgeOrderWithMA_CT_NY()) {
      deliveryTime = 2;
    }
    else if (judgeOrderWithME_NH()) {
      deliveryTime = 3;
    }
    return anOrder.placedOn.plusDays(2 + deliveryTime);
  }
}
