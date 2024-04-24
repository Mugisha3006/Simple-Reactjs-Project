function Template(props) {
    return (
        <section id="card">
            <i className={props.icon} style={{ fontSize: "5rem", color: "aqua" }}></i>

            <div>
                <h1>{props.heading}</h1>
                <p> {props.paragraph}</p>
            </div>
        </section>
    )
}

export default Template;