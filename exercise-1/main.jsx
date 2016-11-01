// Main.jsx file

// Create a simple component
var SimpleComponent = React.createClass({
    // In your render function...
    render:function() {
        // Set variables `name` and `interest`
        var name = "Hello, my name is NICO";
        var interest = "I am interested in COFFEE";

        // Return div with two paragraphs
        return (
          <div>
              <p>{name}</p>
              <p>{interest}</p>
          </div>
        )
    }
});

// Render your component in the `main` section
ReactDOM.render(<SimpleComponent/>,
  document.querySelector('main')
)
