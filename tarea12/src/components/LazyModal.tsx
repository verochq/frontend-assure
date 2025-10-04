import React from "react";
import { useState, Suspense } from "react";

const Modal = React.lazy(() => import("./Modal"));

export default function LazyModal() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Open Modal</button>

      {show && (
        <Suspense fallback="Cargando...">
          <Modal />
        </Suspense>
      )}
    </div>
  );
}