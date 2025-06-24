const Contact = () => {
  return (
    <div className="flex flex-wrap m-15 p-10">
      <div className=" m-auto text-center m-5 p-5 font-bold ">
        <h1>Contact Us</h1>
        <form className="border border-black w-6/12 text-center m-auto p-25">
          <input
            className="border border-black p-4 m-4 "
            placeholder="Name"
            type="text"
          />
          <input
            className="border border-black p-4 m-4"
            placeholder="password"
            type="text"
          />
          <button className="border border-black p-4 m-4" type="click">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
