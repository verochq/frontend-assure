function ControlledUncontrolledForm() {
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </form>
    </>
  );
}

export default ControlledUncontrolledForm;
