// Main.jsx file

// Create a simple component
var SimpleComponent = React.createClass({
    // In your render function...
    render:function() {
        // Return div with two paragraphs
        return (
          <div>
              <p>My name is {this.props.name}</p>
              <p>I am interested in {this.props.interest}</p>
          </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(
  <SimpleComponent name="NICO" interest="COFFEE"/>,
  document.querySelector('main')
)
