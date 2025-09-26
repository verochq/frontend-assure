import { useRef, useState } from "react";

function ValidatingInputs() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleInvalidInputs = () => {
    if (!nameRef?.current?.value) {
      nameRef?.current?.focus();
      setNameError("Name is required");
    } else if (!emailRef?.current?.value) {
      emailRef?.current?.focus();
      setEmailError("Email is required");
    } else if (!passwordRef?.current?.value) {
      passwordRef?.current?.focus();
      setPasswordError("Password is required");
    }
    else {
      setNameError("");
      setEmailError("");
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
