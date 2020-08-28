import {rating} from "../src/rank";

const rankTest = require('ava');

rankTest('rank case 1. Voyage is west-indies and length is 10. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 2. Voyage is china and length is 10. ', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 3. Voyage is china and length is 10 and without history china. ', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 4. Voyage is east-indies and length is 10. ', t => {
    const voyage = {
        zone: 'east-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 5. Voyage is china and length is 10. ', t => {
    const voyage = {
        zone: 'china',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 6. Voyage is china and length is 13. ', t => {
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 7. Voyage is china and length is 13 and history length is 4. ', t => {
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 8. Voyage is china and length is 19 and history length is 4. ', t => {
    const voyage = {
        zone: 'china',
        length: 13,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        }
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 9. Voyage is china and length is 19 and history length is 11. ', t => {
    const voyage = {
        zone: 'china',
        length: 19,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});


rankTest('rank case 10. Voyage is east-indies and length is 12 and history length is 9. ', t => {
    const voyage = {
        zone: 'china',
        length: 12,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 11. Voyage is east-indies and length is 15 and history length is 9. ', t => {
    const voyage = {
        zone: 'china',
        length: 15,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'A');
});

rankTest('rank case 11. Voyage is west-indies and length is 10. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 10,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});


rankTest('rank case 12. Voyage is west-indies and length is 3. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 3,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 13. Voyage is west-indies and length is 5. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 5,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 14. Voyage is west-indies and length is 9. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 14. Voyage is west-indies and length is 9. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 9,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 15. Voyage is west-indies and length is 15. ', t => {
    const voyage = {
        zone: 'west-indies',
        length: 15,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});

rankTest('rank case 16. Voyage is west-indies and length is 15 and history length is 9.', t => {
    const voyage = {
        zone: 'west-indies',
        length: 15,
    };
    const history = [
        {
            zone: 'east-indies',
            profit: 5,
        }, {
            zone: 'west-indies',
            profit: 15,
        }, {
            zone: 'china',
            profit: -2,
        },
        {
            zone: 'west-africa',
            profit: 7,
        },
        {},
        {},
        {},
        {},
        {}
    ];

    const result = rating(voyage, history);

    t.is(result, 'B');
});