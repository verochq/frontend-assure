import { useRef, useState } from "react";

function ValidatingInputs() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");


  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInvalidInputs = () => {
 
    if (!nameRef?.current?.value) {
      nameRef?.current?.focus();
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    if (!emailRef?.current?.value) {
      emailRef?.current?.focus();
      setEmailError("Email is required");
    } else if (!regex.test(emailRef?.current?.value)) {
      emailRef?.current?.focus();
      setEmailError("Email is incorrect");
    } else {
      setEmailError("");
    }

    if (!passwordRef?.current?.value) {
      passwordRef?.current?.focus();
      setPasswordError("Password is required");
    } else if (passwordRef?.current?.value.length < 8) {
      passwordRef?.current?.focus();
      setPasswordError("Password needs to be at least 8 characters");
    }else {
      setPasswordError("");
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <input ref={nameRef} type="text" placeholder="Enter your nameRef" />
      {nameError && <p style={{ color: "red" }}>{nameError}</p>}
      <input ref={emailRef} type="email" placeholder="Enter your email" />
      {emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <input
        ref={passwordRef}
        type="password"
        placeholder="Enter your password"
      />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}

      <button onClick={handleInvalidInputs}>Submit</button>
    </div>
  );
}

export default ValidatingInputs;
