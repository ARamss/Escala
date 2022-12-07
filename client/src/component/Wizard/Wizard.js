import React from "react";

const Wizard = ({ children }) => {
    const [activePageIndex, setActivePageIndex] = React.useState(0);
    const pages = React.Children.toArray(children);
    const currentPage = pages[activePageIndex];

    const goNextPage = () => {
      setActivePageIndex(index => index + 1);
    };

    const goPrevPage = () => {
      setActivePageIndex(index => index - 1);
    };

    const ButtonPrev = () =>
      activePageIndex > 0 ? (
        <button
          type="button"
          onClick={goPrevPage}
          className="btn btn-primary btn-block btn-sm"
        >
          Atras
        </button>
      ) : null;

    const ButtonNext = () =>
      activePageIndex < pages.length - 1 ? (
        <button
          type="button"
          onClick={goNextPage}
          className="btn btn-primary btn-block btn-sm"
        >
          Siguiente
        </button>
      ) : null;

    return (
      <React.Fragment>
      <div className="wizard">
        <div className="wizard__content">{currentPage}</div>
          <div className="wizard__buttons">
            <ButtonPrev />
            <ButtonNext />
          </div>
       </div>
      </React.Fragment>
    );
}

export default Wizard;
