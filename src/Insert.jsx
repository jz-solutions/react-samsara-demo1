"use strict";
require("normalize.css/normalize.css");
require("samsarajs/samsara.css");

var React = require('react');
var {render, Surface} = require('./ReactSamsara');
var Samsara = require('samsarajs');

var Transform = Samsara.Core.Transform;
var Transitionable = Samsara.Core.Transitionable;


const Image = React.createClass({
  render() {
    const props = this.props;

    return (
      <node size={[undefined, undefined]}>
        <surface key="img"
                 size={[undefined, undefined]}
                 properties={{
                    backgroundImage : `url("${props.picture}")`,
                    backgroundSize : `cover`
                  }}>
        </surface>
        <node align={[1, 1]}>
          <surface key="name"
                   size={[true, true]}
                   origin={[1,1]}
                   properties={{
                    backgroundColor : `black`,
                    padding : `5px`,
                    color : 'white'
                  }}>
            {props.name}
          </surface>
        </node>
      </node>
    )
  }
});

var Example = React.createClass({
  /**
   * Initialize state members.
   */
  getInitialState: function () {
    return {
      hideMiddle: true
    };
  },

  /**
   * When the component is mounted into the document - this is similar to a
   * constructor, but invoked when the instance is actually mounted into the
   * document. Here's, we'll just set up an animation loop that invokes our
   * method. Binding of `this.onTick` is not needed because all React methods
   * are automatically bound before being mounted.
   */
  componentDidMount: function () {
    setTimeout(() => {
      this.setState({
        hideMiddle: false
      });
    }, 2000);
  },

  /**
   * This is the "main" method for any component. The React API allows you to
   * describe the structure of your UI component at *any* point in time.
   */
  render: function () {
    const hideMiddle = this.state.hideMiddle;

    const items = [];

    console.log('hideMiddle', hideMiddle);

    items.push((<node key='1' size={[100, 100]} transform={Transform.translateY(0)}>
      <Image name='Frog <br/> 100x100' picture='http://static.imgix.net/treefrog.jpg'/>
    </node>));

    if (!hideMiddle) {
      items.push((<node key='2' size={[200, 200]} transform={Transform.translateY(101)}>
        <Image name='Apples <br/> 200x200' picture='http://static.imgix.net/apples.jpg'/>
      </node>));
    }

    items.push((<node key='3' size={[undefined, 100]} transform={Transform.translateY(302)}>
      <Image name='Espresso <br/> autox100' picture='http://static.imgix.net/espresso.jpg'/>
    </node>));

    return (
      <context>
        {items}
      </context>
    );
  }
});

render(<Example />, document.body);
