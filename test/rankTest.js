import test from "ava";
import {rating} from "../src/rank";

const rankTest = require('ava');


test('rank case 1. Voyage is west-indies and length is 10. ', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },{
      zone: 'west-indies',
      profit: 15,
    },{
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];

  const result = rating(voyage,history);

  t.is(result, 'B');
});

