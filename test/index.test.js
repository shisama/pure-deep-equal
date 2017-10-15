import test from 'ava';
import React from 'react';
import {configure, shallow} from 'enzyme';
import sinon from 'sinon';
import Adaper from 'enzyme-adapter-react-16';

configure({adapter: new Adaper()});

import Test from './component';

let spy;

test.before(function () {
  spy = sinon.spy(Test.prototype, 'render');
});

test.afterEach(function () {
  spy.reset();
});

test('props value change', t => {
  const props = {
    id: 1
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 2
  };
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 2);
});

test('props object not change', t => {
  const props = {
    id: 1
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 1
  };
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 1);
});

test('props object change', t => {
  const props = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 1,
    first: {
      second : {
        third: {
          val: 2
        }
      }
    }
  };
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 2);
});

test('props object not change', t => {
  const props = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 1);
});

test('state object change', t => {
  const props = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 1,
    first: {
      second : {
        third: {
          val: 2
        }
      }
    }
  };
  wrapper.setState(second);

  t.is(Test.prototype.render.callCount, 2);
});

test('state object not change', t => {
  const props = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    id: 1,
    first: {
      second : {
        third: {
          val: 1
        }
      }
    }
  };
  wrapper.setState(second);

  t.is(Test.prototype.render.callCount, 1);
});

test('props array change', t => {

  const props = [
    {
      id: 1,
      first: {
        second : {
          third: {
            val: 1
          }
        }
      }
    },
    {
      id: 2,
      first: {
        second : {
          third: {
            val: 2
          }
        }
      }
    },
    {
      id: 3,
      first: {
        second : {
          third: {
            val: 3
          }
        }
      }
    },
  ];

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = [
    {
      id: 1,
      first: {
        second : {
          third: {
            val: 1
          }
        }
      }
    },
    {
      id: 2,
      first: {
        second : {
          third: {
            val: 2
          }
        }
      }
    },
    {
      id: 3,
      first: {
        second : {
          third: {
            val: 4
          }
        }
      }
    },
  ];
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 2);
});


test('props array not change', t => {

  const props = [
    {
      id: 1,
      first: {
        second : {
          third: {
            val: 1
          }
        }
      }
    },
    {
      id: 2,
      first: {
        second : {
          third: {
            val: 2
          }
        }
      }
    },
    {
      id: 3,
      first: {
        second : {
          third: {
            val: 3
          }
        }
      }
    },
  ];

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = [
    {
      id: 1,
      first: {
        second : {
          third: {
            val: 1
          }
        }
      }
    },
    {
      id: 2,
      first: {
        second : {
          third: {
            val: 2
          }
        }
      }
    },
    {
      id: 3,
      first: {
        second : {
          third: {
            val: 3
          }
        }
      }
    },
  ];
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 1);
});

test('state array change', t => {

  const props = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };

  wrapper.setState(second);

  t.is(Test.prototype.render.callCount, 2);
});

test('state array not change', t => {

  const props = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };
  wrapper.setState(second);

  t.is(Test.prototype.render.callCount, 1);
});
test('props array length change', t => {

  const props = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
    ]
  };
  wrapper.setProps(second);

  t.is(Test.prototype.render.callCount, 2);
});

test('state array length change', t => {

  const props = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
      {
        id: 3,
        first: {
          second: {
            third: {
              val: 3
            }
          }
        }
      },
    ]
  };

  const wrapper = shallow(
    <Test {...props}/>
  );

  t.is(Test.prototype.render.callCount, 1);

  const second = {
    arr: [
      {
        id: 1,
        first: {
          second: {
            third: {
              val: 1
            }
          }
        }
      },
      {
        id: 2,
        first: {
          second: {
            third: {
              val: 2
            }
          }
        }
      },
    ]
  };
  wrapper.setState(second);

  t.is(Test.prototype.render.callCount, 2);
});