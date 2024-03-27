import React, { Suspense } from "react";

const ModalWrapper = ({ show, onHide, id, modalType }) => {
  // Capitalize "modalType" to construct the component filename
  const modalName = `Modal${modalType.charAt(0).toUpperCase()}${modalType.slice(
    1
  )}`;

  const Modal = React.lazy(() => import(`./${modalName}.jsx`));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Modal show={show} onHide={onHide} id={id} modalType={modalType} />
    </Suspense>
  );
};

export default ModalWrapper;
