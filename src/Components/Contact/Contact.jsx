
export const Contact = () => {

  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputdata = Object.fromEntries(formData.entries());
    console.log(formInputdata);

  };


  return (
    <section className="section-contact">

      <h2 className="container-title">Contact us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input type="text" required autoComplete="off" placeholder="Enter your name" name="username" />
          <input type="email" className="form-control" required autoComplete="off" placeholder="Enter your email" name="email" />
          <textarea
            className="form-control" required rows="10" autoComplete="off" placeholder="Enter your message" name="message"
          >
          </textarea>

          <button type="submit" value="send">Submit</button>
        </form>
      </div>


    </section>
  );

};