import "./App.css"

function App() {
  return (
    <div>
      <section id="header" style={{ backgroundColor: "aqua", textAlign: "center" }}>
        <h1>Company</h1>
        <p>We specialize in some things ...</p>
      </section>


      < Template
        icon="bx bxs-building"
        heading="About"
        paragraph="Corporis quae, aliquid dolores itaque sapiente eum culpa porro. Dolores corrupti ex id quo earum nostrum eos nam!"
      /> 

      < Template
        icon="bx bx-world"
        heading="Our Values"
        paragraph=" Voluptatum itaque eveniet animi excepturi, quae beatae.Incidunt quasi assumenda consequuntur quas blanditiis, labore."
      /> 

      < Template
        icon="bx bxs-bank"
        heading="Our Mission"
        paragraph="Officia ipsum, molestiae cumque natus fuga expedita eligendi laboriosam non dolores commodi culpa possimus odit!"
      /> 

    </div>

  )
}


function Template(props) {
  return (
    <section id="card">
      <i className={props.icon} style={{fontSize: "5rem",color:"aqua"}}></i>

      <div>
        <h1>{props.heading}</h1>
        <p> {props.paragraph}</p>
      </div>
    </section>
  )
}

export default App;

