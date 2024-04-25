import "./App.css";
import Card from "./components/Template.jsx";


let templatesArray = [
  {
    id: 1,
    icon: "bx bxs-building",
    title: "About",
    text: "Corporis quae, aliquid dolores itaque sapiente eum culpa porro. Dolores corrupti ex id quo earum nostrum eos nam!"

  },
  {
    id: 2,
    icon: "bx bx-world",
    title: "Our Values",
    text: " Voluptatum itaque eveniet animi excepturi, quae beatae.Incidunt quasi assumenda consequuntur quas blanditiis, labore."

  },
  {
    id: 3,
    icon: "bx bxs-bank",
    title: "Our Mission",
    text: "Officia ipsum, molestiae cumque natus fuga expedita eligendi laboriosam non dolores commodi culpa possimus odit!"

  },

]

function App() {
  return (
    <div>
      <section id="header" style={{ backgroundColor: "aqua", textAlign: "center" }}>
        <h1>Company</h1>
        <p>We specialize in some things ...</p>
      </section>

      {
        templatesArray.map(function (element) {
          return <Template key={element.id} icon={element.icon} heading={element.title} paragraph={element.text}/>
        })
        }
     

    </div>

  )
}

function Template(props) {
  return (
    <section id="card">
      <i className={props.icon} style={{ fontSize: "5rem", color: "aqua", alignSelf:"center" }}></i>

      <div>
        <h1>{props.heading}</h1>
        <p> {props.paragraph}</p>
      </div>
    </section>
  )
}

export default App;

